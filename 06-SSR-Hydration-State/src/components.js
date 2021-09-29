import { store } from "./store.js";

export const TodoList = () => `
  <ul>
    ${store.state.todoItems.map(({ id, content, activation }) => `
      <li data-id="${id}">
        <input type="checkbox" ${activation ? 'checked' : ''} />
        <span ${activation ? ' style="text-decoration: line-through;"' : ''}>${content}</span>
      </li>
    `).join('')}
  </ul>
`;

const Router = (path) => {
  if (path === '/todo-list') {
    return TodoList();
  }

  return `Hello World`;
}

export const App = ({ path, state }) => {
  if (state !== undefined) {
    console.log({ state });
    store.hydration(state);
  }
  return `
    <header>
      <a href="/">SSR Tutorial</a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/todo-list">Todo List</a></li>
        </ul>
      </nav>
    </header>
    ${Router(path)}
    <footer>
      Copyright &copy; 황준일 All Right Reserved.
    </footer>
  `
}
