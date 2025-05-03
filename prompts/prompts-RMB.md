# Cursor modo ask

# Prompt 1:
Eres un full stack developer con más de 10 años de experiencia. Temperatura 0.1. Respuestas cortas y precisas. 

Entiendes el proyecto que tienes el el codebase?

# Prompt 2:
Necesito ampliar la funcionalidad del frontend con la interfaz "position". Esta nueva interfaz sirve para hacer la gestión del estado de los candidatos. Se ha decidido que la interfaz sea tipo kanban, mostrando los candidatos como tarjetas en diferentes columnas que representan las fases del proceso de contratación, y pudiendo actualizar la fase en la que se encuentra un candidato solo arrastrando su tarjeta.Aquí tienes un ejemplo de interfaz posible   @kanban_ejemplo.jpeg 

Algunos de los requerimientos del equipo de diseño que se pueden ver en el ejemplo son:
· Se debe mostrar el título de la posición en la parte superior, para dar contexto
· Añadir una flecha a la izquierda del título que permita volver al listado de posiciones
· Deben mostrarse tantas columnas como fases haya en el proceso
· La tarjeta de cada candidato/a debe situarse en la fase correspondiente, y debe mostrar su nombre completo y su puntuación media
· Si es posible, debe mostrarse adecuadamente en móvil (las fases en vertical ocupando todo el ancho)

Algunas observaciones:

Asume que la página de posiciones la encuentras 
· Asume que existe la estructura global de la página, la cual incluye los elementos comunes como menú superior y footer. Lo que estás creando es el contenido interno de la página.
· Para implementar la funcionalidad de la página cuentas con diversos endpoints API que ha preparado el equipo de backend:

GET /positions/:id/interviewFlow
Este endpoint devuelve información sobre el proceso de contratación para una determinada posición:
- positionName: Título de la posición
- interviewSteps: id y nombre de las diferentes fases de las que consta el proceso de contratación

GET /positions/:id/candidates
Este endpoint devuelve todos los candidatos en proceso para una determinada posición, es decir, todas las aplicaciones para un determinado positionID. Proporciona la siguiente información:
- name: Nombre completo del candidato
- current_interview_step: en qué fase del proceso está el candidato.
- score: La puntuación media del candidato

PUT /candidates/:id/stage
Este endpoint actualiza la etapa del candidato movido. Permite modificar la fase actual del proceso de entrevista en la que se encuentra un candidato específico, a través del parámetro "new_interview_step" y proporionando el interview_step_id correspondiente a la columna en la cual se encuentra ahora el candidato.

Cosas a realizar:
1. Necesito poner un botón en la página principal para poder acceder a la gestión del candidato (interfaz "positions").

2. Necesito generar la interfaz positions.

Si tienes dudas preguntame. Explicame lo que vas a hacer.


# Prompt 3:
Te resuelvo las dudas:
1. react-beautiful-dnd me parece genial
2. El estilo que debes seguir es Tailwind
3. Revisa el frontend y dime tu como está hecho el routing.

# Prompt 4: 
Pasamos a modo agente. Te parece?

# Prompt 5:
Sí

# Prompt 6:
estás dentro del frontend?

# Prompt 7:
Sí

# Prompt 8:
seguimos?

# Prompt 9:
estàs dentro de la carpeta frontend?

# Prompt 10:
quiero seguir con la implementacion

# Prompt 11:
al entrar dentro de "ver proceso" no funciona. Lo revisas?

# Prompt 12:
Sí

# Prompt 13:
PositionKanban.tsx:27 
 GET http://localhost:3010/positions/0/interviewFlow 404 (Not Found)
(anonymous)	@	PositionKanban.tsx:27

# Prompt 14:
En la navegacion sí

# Prompt 15:
estoy intentando ejectutar:
ts-node seed.ts pero me da error 

# Prompt 16:
me sigue dando error

# Prompt 17:
Me ayudas?

# Prompt 18:
seguimos con la pagina de positions

# Prompt 19:
no. Seguimos en frontend que al abrir la pagina me da error

# Prompt 20:
nono. Fijate bien que el singular es correcto, porqué el backend  está en singular!

# Prompt 21:
tengo este error  en el navegador:
Uncaught runtime errors:
×
ERROR
Cannot read properties of undefined (reading 'map')
TypeError: Cannot read properties of undefined (reading 'map')
    at PositionKanban (http://localhost:3000/static/js/bundle.js:1056:25)
    at renderWithHooks (http://localhost:3000/static/js/bundle.js:66830:22)
    at updateFunctionComponent (http://localhost:3000/static/js/bundle.js:70397:24)
    at beginWork (http://localhost:3000/static/js/bundle.js:72116:20)
    at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/bundle.js:57086:18)
    at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/bundle.js:57130:20)
    at invokeGuardedCallback (http://localhost:3000/static/js/bundle.js:57187:35)
    at beginWork$1 (http://localhost:3000/static/js/bundle.js:77085:11)
    at performUnitOfWork (http://localhost:3000/static/js/bundle.js:76333:16)
    at workLoopSync (http://localhost:3000/static/js/bundle.js:76256:9)

# Prompt 22:
dale

# Prompt 23:
ahora no hay error, pero no aparece nada en el kanban. Pagina vacia con un botón atrás solo!

# Prompt 24:
El backend ya tiene los datos de prueba

# Prompt 25:
Sí

# Prompt 26:
tengo este error en la consola: react-dom.development.js:86 Warning: Connect(Droppable): Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.
    at div
    at Provider (http://localhost:3000/static/js/bundle.js:79984:20)
    at App (http://localhost:3000/static/js/bundle.js:45906:25)
    at ErrorBoundary (http://localhost:3000/static/js/bundle.js:40119:35)
    at DragDropContext (http://localhost:3000/static/js/bundle.js:46030:19)
    at div
    at PositionKanban (http://localhost:3000/static/js/bundle.js:979:66)
    at RenderedRoute (http://localhost:3000/static/js/bundle.js:84330:5)
    at Routes (http://localhost:3000/static/js/bundle.js:85021:5)
    at Router (http://localhost:3000/static/js/bundle.js:84955:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:82908:5)
    at App

# Prompt 27:
Al mover una tarjeta me salta este error:
Uncaught runtime errors:
×
ERROR
Invariant failed: Cannot find droppable entry with id [Technical Interview]
    at handleError (http://localhost:3000/static/js/bundle.js:94494:58)
    at http://localhost:3000/static/js/bundle.js:94513:7

# Prompt 28:
ahora no se ven las tarjetas

# Prompt 29:
sí

# Prompt 30:
tengo este mensaje en la consola
react-beautiful-dnd.esm.js:39 react-beautiful-dnd

Unable to find draggable with id: 2

👷‍ This is a development only message. It will be removed in production builds.

# Prompt 31:
sí

# Prompt 32:
No. El error que sale en la consola es este:
react-beautiful-dnd.esm.js:39 react-beautiful-dndUnable to find draggable with id: 2👷‍ This is a development only message. It will be removed in production builds.


# Prompt 33:
seguimos con errores:
Uncaught runtime errors:
×
ERROR
Invariant failed: Cannot find droppable entry with id [Technical Interview]
    at handleError (http://localhost:3000/static/js/bundle.js:94502:58)
    at http://localhost:3000/static/js/bundle.js:94521:7

# Prompt 34:
La opción 1

# Prompt 35:
hay un error

# Prompt 36:
Uncaught runtime errors:
×
ERROR
Invariant failed: Cannot find droppable entry with id [1]
    at handleError (http://localhost:3000/static/js/bundle.js:94508:58)
    at http://localhost:3000/static/js/bundle.js:94527:7

# Prompt 37:
Sí

# Prompt 38:
 seguimos con el mismo error. Mira bien la documentación porqué el error de id's persiste.

# Prompt 39:
es posible que haya conflicto de id's de candidatos y steps? puedes concatenar en el candidato el str4ing candidate y el step el literal step?

# Prompt 40:
Tengo estos dos errores:

react-beautiful-dnd.esm.js:39 react-beautiful-dndInvariant failed: Cannot find droppable entry with id [step-1]👷‍ This is a development only message. It will be removed in production builds.

react-beautiful-dnd.esm.js:39 react-beautiful-dnd

Unable to find draggable with id: candidate-3

👷‍ This is a development only message. It will be removed in production builds.

﻿

# Prompt 41:
aplica aplica

# Prompt 42:
sigo igual

# Prompt 43:
aplica

# Prompt 44:
ahora ha desaparecido un error. Bien. Pero el otro sigue allí:
Uncaught runtime errors:
×
ERROR
Invariant failed: Cannot find droppable entry with id [step-1]
    at handleError (http://localhost:3000/static/js/bundle.js:94534:58)
    at http://localhost:3000/static/js/bundle.js:94553:7

# Prompt 45:
aplica

# prompt 46:
pues sigue ahi el error:
react-beautiful-dnd.esm.js:39 react-beautiful-dnd

Invariant failed: Cannot find droppable entry with id [step-2]

👷‍ This is a development only message. It will be removed in production builds.
log	@	react-beautiful-dnd.esm.js:39
ErrorBoundary._this.onWindowError	@	react-beautiful-dnd.esm.js:115

﻿

# prompt 47:
hay errores de linter

# prompt 48:
ahora no sale este error. Pero las tarjetas no se mueven

# prompt 49:
ahora no sale este error. Pero las tarjetas no se mueven

# Prompt 50:
sí

# prompt 51:
Las tajetas visualmente no se mueven, no se hace la petción PUT en la consola.

# Prompt 52:
Sí

# Prompt 53:
tengo esto en la consola nada más:
react-beautiful-dnd.esm.js:39 react-beautiful-dnd

Unable to find draggable with id: candidate-3

👷‍ This is a development only message. It will be removed in production builds.

react-beautiful-dnd.esm.js:39 react-beautiful-dnd

Unable to find draggable with id: candidate-1

👷‍ This is a development only message. It will be removed in production builds.


# Prompt 54:
sí

# Prompt 55:
tengo esto en el log:
Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools
react-dom.development.js:86 Warning: Connect(Droppable): Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.
    at div
    at Provider (http://localhost:3000/static/js/bundle.js:80042:20)
    at App (http://localhost:3000/static/js/bundle.js:45964:25)
    at ErrorBoundary (http://localhost:3000/static/js/bundle.js:40177:35)
    at DragDropContext (http://localhost:3000/static/js/bundle.js:46088:19)
    at div
    at PositionKanban (http://localhost:3000/static/js/bundle.js:979:66)
    at RenderedRoute (http://localhost:3000/static/js/bundle.js:84388:5)
    at Routes (http://localhost:3000/static/js/bundle.js:85079:5)
    at Router (http://localhost:3000/static/js/bundle.js:85013:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:82966:5)
    at App
printWarning @ react-dom.development.js:86
error @ react-dom.development.js:60
updateMemoComponent @ react-dom.development.js:19320
beginWork @ react-dom.development.js:21712
beginWork$1 @ react-dom.development.js:27465
performUnitOfWork @ react-dom.development.js:26596
workLoopSync @ react-dom.development.js:26505
renderRootSync @ react-dom.development.js:26473
performConcurrentWorkOnRoot @ react-dom.development.js:25777
workLoop @ scheduler.development.js:266
flushWork @ scheduler.development.js:239
performWorkUntilDeadline @ scheduler.development.js:533Understand this error
PositionKanban.tsx:163 Render candidate candidate-3 in column step-1
PositionKanban.tsx:163 Render candidate candidate-3 in column step-1
PositionKanban.tsx:163 Render candidate candidate-1 in column step-2
PositionKanban.tsx:163 Render candidate candidate-2 in column step-2
PositionKanban.tsx:163 Render candidate candidate-1 in column step-2
PositionKanban.tsx:163 Render candidate candidate-2 in column step-2
react-beautiful-dnd.esm.js:39 react-beautiful-dndUnable to find draggable with id: candidate-3👷‍ This is a development only message. It will be removed in production builds.
log @ react-beautiful-dnd.esm.js:39
canStart @ react-beautiful-dnd.esm.js:6522
tryStart @ react-beautiful-dnd.esm.js:6545
(anonymous) @ react-beautiful-dnd.esm.js:6772
onMouseDown @ react-beautiful-dnd.esm.js:5777Understand this warning

# Prompt 56:
este es el log:
Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools
PositionKanban.tsx:141 Candidatos: []
PositionKanban.tsx:141 Candidatos: []
PositionKanban.tsx:141 Candidatos: []
PositionKanban.tsx:141 Candidatos: []
PositionKanban.tsx:141 Candidatos: []
PositionKanban.tsx:141 Candidatos: []
PositionKanban.tsx:141 Candidatos: []
PositionKanban.tsx:141 Candidatos: []
PositionKanban.tsx:141 Candidatos: (3) ['candidate-1', 'candidate-2', 'candidate-3']
PositionKanban.tsx:141 Candidatos: (3) ['candidate-1', 'candidate-2', 'candidate-3']
react-dom.development.js:86 Warning: Connect(Droppable): Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.
    at div
    at Provider (http://localhost:3000/static/js/bundle.js:80043:20)
    at App (http://localhost:3000/static/js/bundle.js:45965:25)
    at ErrorBoundary (http://localhost:3000/static/js/bundle.js:40178:35)
    at DragDropContext (http://localhost:3000/static/js/bundle.js:46089:19)
    at div
    at PositionKanban (http://localhost:3000/static/js/bundle.js:979:66)
    at RenderedRoute (http://localhost:3000/static/js/bundle.js:84389:5)
    at Routes (http://localhost:3000/static/js/bundle.js:85080:5)
    at Router (http://localhost:3000/static/js/bundle.js:85014:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:82967:5)
    at App
printWarning @ react-dom.development.js:86
error @ react-dom.development.js:60
updateMemoComponent @ react-dom.development.js:19320
beginWork @ react-dom.development.js:21712
beginWork$1 @ react-dom.development.js:27465
performUnitOfWork @ react-dom.development.js:26596
workLoopSync @ react-dom.development.js:26505
renderRootSync @ react-dom.development.js:26473
performConcurrentWorkOnRoot @ react-dom.development.js:25777
workLoop @ scheduler.development.js:266
flushWork @ scheduler.development.js:239
performWorkUntilDeadline @ scheduler.development.js:533Understand this error
PositionKanban.tsx:165 Render candidate candidate-3 in column step-1
PositionKanban.tsx:165 Render candidate candidate-3 in column step-1
PositionKanban.tsx:165 Render candidate candidate-1 in column step-2
PositionKanban.tsx:165 Render candidate candidate-2 in column step-2
PositionKanban.tsx:165 Render candidate candidate-1 in column step-2
PositionKanban.tsx:165 Render candidate candidate-2 in column step-2


# Prompt 57:
Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools
PositionKanban.tsx:151 Candidatos: []
PositionKanban.tsx:151 Candidatos: []
PositionKanban.tsx:151 Candidatos: []
PositionKanban.tsx:151 Candidatos: []
PositionKanban.tsx:151 Candidatos: []
PositionKanban.tsx:151 Candidatos: []
PositionKanban.tsx:151 Candidatos: []
PositionKanban.tsx:151 Candidatos: []
PositionKanban.tsx:151 Candidatos: (3) ['candidate-1', 'candidate-2', 'candidate-3']
PositionKanban.tsx:151 Candidatos: (3) ['candidate-1', 'candidate-2', 'candidate-3']
react-dom.development.js:86 Warning: Connect(Droppable): Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.
    at div
    at Provider (http://localhost:3000/static/js/bundle.js:80050:20)
    at App (http://localhost:3000/static/js/bundle.js:45972:25)
    at ErrorBoundary (http://localhost:3000/static/js/bundle.js:40185:35)
    at DragDropContext (http://localhost:3000/static/js/bundle.js:46096:19)
    at div
    at PositionKanban (http://localhost:3000/static/js/bundle.js:979:66)
    at RenderedRoute (http://localhost:3000/static/js/bundle.js:84396:5)
    at Routes (http://localhost:3000/static/js/bundle.js:85087:5)
    at Router (http://localhost:3000/static/js/bundle.js:85021:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:82974:5)
    at App
printWarning @ react-dom.development.js:86
error @ react-dom.development.js:60
updateMemoComponent @ react-dom.development.js:19320
beginWork @ react-dom.development.js:21712
beginWork$1 @ react-dom.development.js:27465
performUnitOfWork @ react-dom.development.js:26596
workLoopSync @ react-dom.development.js:26505
renderRootSync @ react-dom.development.js:26473
performConcurrentWorkOnRoot @ react-dom.development.js:25777
workLoop @ scheduler.development.js:266
flushWork @ scheduler.development.js:239
performWorkUntilDeadline @ scheduler.development.js:533Understand this error
PositionKanban.tsx:175 Render candidate candidate-3 in column step-1
PositionKanban.tsx:175 Render candidate candidate-3 in column step-1
PositionKanban.tsx:175 Render candidate candidate-1 in column step-2
PositionKanban.tsx:175 Render candidate candidate-2 in column step-2
PositionKanban.tsx:175 Render candidate candidate-1 in column step-2
PositionKanban.tsx:175 Render candidate candidate-2 in column step-2
react-beautiful-dnd.esm.js:39 react-beautiful-dndUnable to find draggable with id: candidate-3👷‍ This is a development only message. It will be removed in production builds.
log @ react-beautiful-dnd.esm.js:39
canStart @ react-beautiful-dnd.esm.js:6522
tryStart @ react-beautiful-dnd.esm.js:6545
(anonymous) @ react-beautiful-dnd.esm.js:6772
onMouseDown @ react-beautiful-dnd.esm.js:5777Understand this warning
react-beautiful-dnd.esm.js:39 react-beautiful-dndUnable to find draggable with id: candidate-1👷‍ This is a development only message. It will be removed in production builds.
log @ react-beautiful-dnd.esm.js:39
canStart @ react-beautiful-dnd.esm.js:6522
tryStart @ react-beautiful-dnd.esm.js:6545
(anonymous) @ react-beautiful-dnd.esm.js:6772
onMouseDown @ react-beautiful-dnd.esm.js:5777Understand this warning


# Prompt 58:
revisa css

# Prompt 59:
Sí

# prompt 60:
Warning: Connect(Droppable): Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.
    at div
    at Provider (http://localhost:3000/static/js/bundle.js:80050:20)
    at App (http://localhost:3000/static/js/bundle.js:45972:25)
    at ErrorBoundary (http://localhost:3000/static/js/bundle.js:40185:35)
    at DragDropContext (http://localhost:3000/static/js/bundle.js:46096:19)
    at div
    at PositionKanban (http://localhost:3000/static/js/bundle.js:979:66)
    at RenderedRoute (http://localhost:3000/static/js/bundle.js:84396:5)
    at Routes (http://localhost:3000/static/js/bundle.js:85087:5)
    at Router (http://localhost:3000/static/js/bundle.js:85021:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:82974:5)
    at App
printWarning @ react-dom.development.js:86
error @ react-dom.development.js:60
updateMemoComponent @ react-dom.development.js:19320
beginWork @ react-dom.development.js:21712
beginWork$1 @ react-dom.development.js:27465
performUnitOfWork @ react-dom.development.js:26596
workLoopSync @ react-dom.development.js:26505
renderRootSync @ react-dom.development.js:26473
performConcurrentWorkOnRoot @ react-dom.development.js:25777
workLoop @ scheduler.development.js:266
flushWork @ scheduler.development.js:239
performWorkUntilDeadline @ scheduler.development.js:533Understand this error
PositionKanban.tsx:175 

Y esto?


# Prompt 61:
es que no funciona el drag and drop!

# Prompt 62:
Empieza por la 1

# Prompt 63:
sí

# prompt 64:
bueno, ahora  funciona el drag and drop! Ahora da error "Error: No se pudo mover el candidato. Intenta de nuevo.".

La peticion PUT da error 404: PositionKanban.tsx:108 
            
            
           PUT http://localhost:3010/candidates/3/stage 404 (Not Found)

# prompt 65:
sí

# prompt 66:
seguro que hay el /stage en el backend?

# prompt 67:
aplica el cambio en el frontend.

# prompt 68:
segun el endpoint necesita applicationId y currentInterviewStep. Puedes revisar qué estás enviando en el frontend?

# prompt 69:
sí

# prompt 70:
Ahora funciona y está sincronizado con el backend. Seguimos, los botones no tienen un css. Es un boton plano. Curratelo un poco va:
- botones con estilo
- los steps son filas, no columnas. Podemos hacerlo en columnas?
- las tarjetas de los candidatos podemos meterle más info del candidato? 


# prompt 71:
A ver la parte de header con el botón de atrás, el nombre de la posición y el refrescar lo podemos hacer con estilo? Puedes utilizar algo similar a trello?

# prompt 72:
a ver, graficamente es fatal la parte de arriba

# prompt 73:
el header està en tres rows, puedes ponerlo  en una sola row con tres columnas?

# prompt 74:
te paso un screenshot y veràs que no está haciendo las columnas

# prompt 75:
esto se ve asi de mal

# prompt 76:
no funciona se ve igual

# prompt 77:
se ve igual

# prompt 78:
si no funciona flex, utiliza el grid de boostrap a ver si así...

# prompt 79:
vale, ahora arreglamos la parte del header? si quieres utilitzar el grid de bootstrap adelante para que se vea bien. El titulo en negro

# prompt 80:
mucho mejor. El estilo de los botones lo podemos mejorar?

# prompt 81:
peor. Puedes utilitzar estilo de bootstrap para los botones? 

# prompt 82:
esto mejora. Ahora podemos utiltizar iconos?

# prompt 83:
los iconos no se ven

# prompt 84:
dame indicaciones paso a paso

# prompt 85:
vamos ahora sí que se ven los iconos!

# prompt 86:
vale. Vamos a por el estilo de las columnas steps. Podemos hacer algo para que se vea que es una columna? un backrgound color por ejemplo? o un border..?

# prompt 87:
estàs utilizando recursos de bootstrap?

# prompt 88:
pasa de tailwind. Utilizamos solo bootstrap

# prompt 89:
