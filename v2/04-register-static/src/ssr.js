import { TodoItems, Button } from './components.js';

export const generateHTML = (model) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Todo List</title>
  </head>
  <body>
    <div id="app">
      ${Button({ id: 'add', text: '아이템 추가' })}
      ${Button({ id: 'delete', text: '아이템 삭제' })}
      ${TodoItems(model.todoItems)}
    </div>
    <script src="./src/main.js"></script>
  </body>
  </html>
`;
