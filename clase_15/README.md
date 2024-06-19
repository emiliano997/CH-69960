# Primera Práctica Integradora

## Tecnologías

- Node.js
- Express.js
- MongoDB (con Mongoose)
- Handlebars (Para las vistas)

## Tareas a realizar

- [ x ] Crear la estructura de carpetas e instalar las dependencias
- [ x ] Crear el esquema de las tareas para la base de datos
- [ x] Crear una aplicación web con Node.js y Express.js
- [ x ] Crear la API REST para la aplicación
  - [ x ] GET /tasks
  - [ x ] GET /tasks/:id
  - [ x ] POST /tasks
  - [ x ] PUT /tasks/:id
  - [ x ] DELETE /tasks/:id
- [ x ] Crear las vistas de la aplicación para mostrar los datos de la base de datos

## Estrucutra de carpetas

```
.
├── node_modules
├── public
│   ├── css
│   │   └── style.css
│   └── js
│       └── script.js
├── src
│   ├── server.js o app.js
|   ├── dirname.js
│   ├── models
│   │   ├── task.model.js (Esquema de Mongoose)
│   ├── routes
│   │   ├── tasks.routes.js
│   └── views
│       ├── layouts
│       │   └── main.hbs
│       └── index.hbs
└── package.json
```
