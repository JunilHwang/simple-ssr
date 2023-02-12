export const TodoItem = (item) => `<li>${item}</li>`;
export const TodoList = (items) => `<ul>${items.map(TodoItem).join('')}</ul>`;
export const Button = ({ id, text }) => `<button id="${id}">${text}</button>`;
export const App = (todoItems) => `
  ${Button({ id: 'add', text: '아이템 추가' })}
  ${Button({ id: 'delete', text: '아이템 삭제' })}
  ${TodoList(todoItems)}
`;
