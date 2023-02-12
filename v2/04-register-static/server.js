import express from 'express';
import { generateHTML } from "./src/ssr.js";
import { model } from "./src/model.js";

const app = express();
app.use(express.json());

app.use("/src", express.static("./src"));

app.get("/", (req, res) => res.send(generateHTML(model)));
app.post("/api/todo-items", (req, res) => {
  model.addTodoItem(req.body.content);
  res.status(201).send();
});
app.delete("/api/todo-items/:index", (req, res) => {
  model.deleteTodoItem(req.params.index);
  res.status(204).send();
});

app.listen(8000, () => console.log('listen to http://localhost:8000'));
