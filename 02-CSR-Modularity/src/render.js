import { todoItems } from "./items.js";

export const TodoList = () => `
  <ul>
    ${todoItems.map(({ id, content, activation }) => `
      <li>
        <input type="checkbox" ${activation ? 'checked' : ''} />
        <span ${activation ? ' style="text-decoration: line-through;"' : ''}>${content}</span>
      </li>
    `).join('')}
  </ul>
`;
