import { App } from "./components.js";
import { store } from "./store.js";

export const render = () => {
  const $app = document.querySelector('#app');
  const { pathname: path } = location;
  $app.innerHTML = App({ path });

  if (path === '/todo-list') {
    $app.querySelectorAll('li').forEach(el => {
      el.addEventListener('click', () => {
        const {id} = el.dataset;
        store.toggleActivation(store.state.todoItems.findIndex(v => v.id === Number(id)));
        render();
      })
    });
  }
}

render();