# Primera Práctica Integradora

## Tecnologías

- Node.js
- Express.js
- MongoDB (con Mongoose)
- Handlebars (Para las vistas)

## Tareas a realizar

- [ ] Crear una aplicación web con Node.js y Express.js
- [ ] Crear el esquema de las tareas para la base de datos
- [ ] Crear la API REST para la aplicación
  - [ ] GET /tasks
  - [ ] GET /tasks/:id
  - [ ] POST /tasks
  - [ ] PUT /tasks/:id
  - [ ] DELETE /tasks/:id
- [ ] Crear las vistas de la aplicación para mostrar los datos de la base de datos

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
│   │   ├── task.js
│   ├── routes
│   │   ├── tasks.js
│   └── views
│       ├── layouts
│       │   └── main.hbs
│       └── index.hbs
└── package.json
```
