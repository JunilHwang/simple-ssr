function main() {
  document.querySelector('#add').onclick = () => {
    fetch('/api/todo-items', {
      method: 'post',
      body: JSON.stringify({ content: '추가된 아이템' }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(() => location.reload())
  }

  document.querySelector('#delete').onclick = () => {
    fetch('/api/todo-items/0', { method: 'delete' }).then(() => location.reload())
  }
}

main();
