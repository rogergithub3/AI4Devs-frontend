import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Row, Col } from 'react-bootstrap';

interface InterviewStep {
  id: string;
  name: string;
}

interface Candidate {
  id: string;
  name: string;
  current_interview_step_id: string;
  score: number;
  applicationId: number;
}

const PositionKanban: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [positionName, setPositionName] = useState('');
  const [steps, setSteps] = useState<InterviewStep[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshTimeout, setRefreshTimeout] = useState<NodeJS.Timeout | null>(null);
  const [stepsReady, setStepsReady] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const lastCandidatesRef = useRef<Candidate[]>([]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setStepsReady(false);
    fetch(`http://localhost:3010/position/${id}/interviewFlow`)
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar el flujo de entrevistas');
        return res.json();
      })
      .then(flowRaw => {
        const flow = flowRaw.interviewFlow;
        setPositionName(flow.positionName || '');
        const newSteps = Array.isArray(flow.interviewFlow?.interviewSteps) ? flow.interviewFlow.interviewSteps.map((step: any) => ({
          id: `step-${String(step.id)}`,
          name: step.name
        })) : [];
        if (newSteps.length > 0) setSteps(newSteps);
        setStepsReady(true);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!stepsReady) return;
    setLoading(true);
    setError(null);
    fetch(`http://localhost:3010/position/${id}/candidates`)
      .then(res => res.json())
      .then(candidatesRaw => {
        setCandidates(Array.isArray(candidatesRaw) ? candidatesRaw.map((c: any) => {
          const step = steps.find((s: InterviewStep) => s.name === c.currentInterviewStep);
          return {
            id: `candidate-${String(c.id)}`,
            name: c.fullName,
            current_interview_step_id: step ? step.id : '',
            score: c.averageScore,
            applicationId: c.applicationId
          };
        }) : []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
    // eslint-disable-next-line
  }, [id, stepsReady]);

  useEffect(() => {
    if (candidates.length > 0) {
      lastCandidatesRef.current = candidates;
    }
  }, [candidates]);

  // Calcular columns solo cuando cambian steps o candidates
  const columns = useMemo(() => {
    const sourceCandidates = (isDragging && candidates.length === 0)
      ? lastCandidatesRef.current
      : candidates;
    const cols: { [key: string]: Candidate[] } = {};
    steps.forEach(step => {
      cols[String(step.id)] = sourceCandidates.filter(c => c.current_interview_step_id === String(step.id));
    });
    return cols;
  }, [steps, candidates, isDragging]);

  const onDragEnd = async (result: any) => {
    setIsDragging(false);
    const { source, destination, draggableId } = result;
    if (!destination || source.droppableId === destination.droppableId) return;
    const candidate = columns[source.droppableId]?.find(c => c.id === draggableId);

    if (!candidate) return;
    // Actualizar backend y esperar respuesta
    try {
      const response = await fetch(`http://localhost:3010/candidates/${candidate.id.replace('candidate-', '')}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          applicationId: candidate.applicationId,
          currentInterviewStep: destination.droppableId.replace('step-', '')
        })
      });
      if (!response.ok) throw new Error('Error al actualizar el candidato en el backend');
      // Actualizar frontend localmente solo si el PUT fue exitoso
      setCandidates(prev => prev.map(c => c.id === candidate.id ? { ...c, current_interview_step_id: destination.droppableId } : c));
    } catch (err) {
      setError('No se pudo mover el candidato. Intenta de nuevo.');
    }
  };

  // Detectar inicio de drag
  const onDragStart = () => setIsDragging(true);

  // Función para refrescar manualmente los candidatos desde la API
  const refreshCandidates = () => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost:3010/position/${id}/candidates`)
      .then(res => res.json())
      .then(candidatesRaw => {
        setCandidates(Array.isArray(candidatesRaw) ? candidatesRaw.map((c: any) => {
          const step = steps.find((s: InterviewStep) => s.name === c.currentInterviewStep);
          return {
            id: `candidate-${String(c.id)}`,
            name: c.fullName,
            current_interview_step_id: step ? step.id : '',
            score: c.averageScore,
            applicationId: c.applicationId
          };
        }) : []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  // Generar una clave única para los candidatos
  const candidatesKey = candidates.map(c => c.id).join('-');

  if (loading || !stepsReady) return <div className="p-4">Cargando...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="w-full p-4">
      <div className="mb-8 pb-5">
        <Row className="align-items-center g-0 bg-white rounded-2xl shadow-lg border border-blue-200 py-4 px-2">
          <Col xs="auto" className="d-flex justify-content-start">
            <button className="btn btn-outline-primary btn-lg d-flex align-items-center" onClick={() => navigate('/positions')} title="Volver al listado">
              <i className="bi bi-arrow-left"></i>
            </button>
          </Col>
          <Col className="d-flex justify-content-center">
            <h2 className="text-3xl font-extrabold text-black tracking-tight text-center drop-shadow-lg m-0">
              {positionName}
            </h2>
          </Col>
          <Col xs="auto" className="d-flex justify-content-end">
            <button className="btn btn-primary btn-lg d-flex align-items-center gap-2" onClick={refreshCandidates} disabled={isDragging} title="Refrescar candidatos">
              <i className="bi bi-arrow-repeat"></i>
              <span className="hidden sm:inline">Refrescar</span>
            </button>
          </Col>
        </Row>
      </div>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        <Row className="g-4">
          {(steps || []).map(step => (
            <Col key={String(step.id)} xs={12} sm={6} md={4} lg={3} xl={3}>
              <Droppable droppableId={String(step.id)}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="bg-primary bg-opacity-10 border border-primary rounded-4 p-3 min-vh-25 d-flex flex-column shadow-sm mb-2"
                  >
                    <h3 className="fw-bold mb-3 text-center text-primary">{step.name}</h3>
                    {(columns[String(step.id)] || []).map((candidate, idx) => {
                      return (
                        <Draggable draggableId={String(candidate.id)} index={idx} key={String(candidate.id)}>
                          {(prov) => (
                            <div
                              ref={prov.innerRef}
                              {...prov.draggableProps}
                              {...prov.dragHandleProps}
                              className="bg-white rounded-4 shadow-sm p-3 mb-3 border border-secondary d-flex flex-column"
                            >
                              <div className="fw-bold text-dark fs-5 mb-2 d-flex align-items-center gap-2">
                                <i className="bi bi-person-circle text-primary" style={{ fontSize: '1.3rem' }}></i>
                                {candidate.name}
                              </div>
                              <div className="d-flex align-items-center">
                                <span className="me-2 small text-secondary">Score: {candidate.score}</span>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Col>
          ))}
        </Row>
      </DragDropContext>
    </div>
  );
};

export default PositionKanban; 