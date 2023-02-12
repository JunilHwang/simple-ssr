export const TodoItem = (item) => `<li>${item}</li>`;
export const TodoList = (items) => `<ul>${items.map(TodoItem).join('')}</ul>`;
export const Button = ({ id, text }) => `<button id="${id}">${text}</button>`;
