import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
		  <meta charset="UTF-8">
		  <title>Todo List</title>
		</head>
		<body>
		<div id="app">
		  <ul>
		    <li>SSR이 뭔데?</li>
		    <li>CSR은 뭔데?</li>
		    <li>이게 왜 필요한건데?</li>
		    <li>MVVM은 또 뭐야?</li>
		    <li>공부해야 할게 왜이렇게 많아?</li>
		  </ul>
		</div>
		</body>
		</html>
	`);
});

app.listen(8000, () => console.log('listen to http://localhost:8000'));
