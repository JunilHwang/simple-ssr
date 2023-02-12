import { App } from "./components.js";

export const generateHTML = (model) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Todo List</title>
  </head>
  <body>
    <div id="app">
      ${App(model.todoItems)}
    </div>
    <script src="./src/main.js" type="module"></script>
  </body>
  </html>
`;
