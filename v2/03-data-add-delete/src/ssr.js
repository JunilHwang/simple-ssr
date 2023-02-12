import { TodoList, Button } from './components.js';

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
      ${TodoList(model.todoItems)}
    </div>
    <script>
      document.querySelector('#add').onclick = () => {
        fetch('/api/todo-items', {
          method: 'post',
          body: JSON.stringify({ content: '추가된 아이템' }),
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(() => location.reload())
      }
  
      document.querySelector('#delete').onclick = () => {
        fetch('/api/todo-items/0', { method: 'delete' }).then(() => location.reload())
      }
    </script>
  </body>
  </html>
`;
