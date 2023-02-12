export const model = {
  todoItems: [
    'SSR이 뭔데?',
    'CSR은 뭔데?',
    '이게 왜 필요한건데?',
    'MVVM은 또 뭐야?',
    '공부해야 할게 왜이렇게 많아?'
  ],

  addTodoItem(item) { this.todoItems.push(item) },
  deleteTodoItem(index) { this.todoItems.splice(index, 1) },
  init(initialModel) { this.todoItems = initialModel.todoItems; }
}
