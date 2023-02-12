import { App } from "./components.js";

export const generateHTML = ({ todoItems }) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Todo List</title>
  </head>
  <body>
    <div id="app">
      ${App(todoItems)}
    </div>
    <script>window.__INITIAL_MODEL__ = ${JSON.stringify({ todoItems })}</script>
    <script src="./src/main.js" type="module"></script>
  </body>
  </html>
`;
