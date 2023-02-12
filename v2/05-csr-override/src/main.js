import { App } from "./components.js";
import { model } from "./model.js";

function render() {
  const $app = document.querySelector('#app');
  $app.innerHTML = App(model.todoItems);

  $app.querySelector('#add').onclick = () => {
    model.addTodoItem('새로운 아이템');
    render();
  }

  $app.querySelector('#delete').onclick = () => {
    model.deleteTodoItem(0);
    render();
  }
}

function main() {
  render();
}

main();
