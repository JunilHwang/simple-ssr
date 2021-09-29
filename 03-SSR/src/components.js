import { store } from "./store.js";

export const TodoList = () => `
  <ul>
    ${store.state.todoItems.map(({ id, content, activation }) => `
      <li>
        <input type="checkbox" ${activation ? 'checked' : ''} />
        <span ${activation ? ' style="text-decoration: line-through;"' : ''}>${content}</span>
      </li>
    `).join('')}
  </ul>
`;
