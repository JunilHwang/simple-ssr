export const TodoItem = (item) => `<li>${item}</li>`;
export const TodoList = (items) => `<ul>${items.map(TodoItem).join('')}</ul>`;
export const Button = ({ id, text }) => `<button id="${id}">${text}</button>`;
export const Home = (todoItems) => `
  ${Button({ id: 'add', text: '아이템 추가' })}
  ${Button({ id: 'delete', text: '아이템 삭제' })}
  ${TodoList(todoItems)}
`;

export const DefaultLayout = (children) => `
  <main>
    <h1>Todo App</h1>
    <header>
      <nav>
        <a href="/">메인페이지</a>
        <a href="/sub">서브페이지</a>
      </nav>
    </header>
    <section style="margin: 30px 0">
      ${children}
    </section>
    <footer>
      <p>Copyright &copy; 2023 황준일</p
    </footer>
  </main>
`;

export const App = (path, model) => {
  if (path === "/") {
    return DefaultLayout(Home(model.todoItems));
  } else if (path === "/sub") {
    return DefaultLayout(`<p>서브페이지 입니다.</p>`);
  } else {
    return DefaultLayout(`<p>404</p>`);
  }
}
