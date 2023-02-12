import { TodoItems } from './components.js';

export const generateHTML = (model) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Todo List</title>
  </head>
  <body>
    <div id="app">${TodoItems(model.todoItems)}</div>
  </body>
  </html>
`;
