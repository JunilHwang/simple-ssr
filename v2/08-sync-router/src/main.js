import { App } from "./components.js";
import { model } from "./model.js";

function updateTodoItems(todoItems) {
  const headers = {  'Content-Type': 'application/json',  };
  const body = JSON.stringify({ todoItems });
  return fetch('/api/todo-items', { method: 'put', headers, body }).then(res => res.json());
}

async function syncServerModel() {
  const newTodoItems = await updateTodoItems(model.todoItems);
  model.init({ todoItems: newTodoItems });
}

function render() {
  const path = location.pathname;
  const $app = document.querySelector('#app');
  $app.innerHTML = App(path, model);

  document.querySelectorAll('a').forEach($a => {
    $a.addEventListener('click', (event) => {
      const path = $a.getAttribute('href');
      if ($a.href === path) {
        return;
      }
      event.preventDefault();
      history.pushState(null, null, path);
      render();
    })
  })

  if (path !== '/') return;

  $app.querySelector('#add').onclick = async () => {
    model.addTodoItem('새로운 아이템');
    syncServerModel().then(render);
  }

  $app.querySelector('#delete').onclick = async () => {
    model.deleteTodoItem(model.todoItems.length - 1);
    syncServerModel().then(render);
  }
}

function main() {
  model.init(window.__INITIAL_MODEL__);
  render();

  window.addEventListener('popstate', render);
}

main();
