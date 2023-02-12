import { App } from "./components.js";
import { model } from "./model.js";

function render() {
  const $app = document.querySelector('#app');
  $app.innerHTML = App(model.todoItems);

  $app.querySelector('#add').onclick = async () => {
    model.addTodoItem('새로운 아이템');
    render();
  }

  $app.querySelector('#delete').onclick = async () => {
    model.deleteTodoItem(model.todoItems.length - 1);
    render();
  }
}

function main() {
  model.init(window.__INITIAL_MODEL__);
  render();
}

main();
