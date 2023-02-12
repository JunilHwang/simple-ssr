import express from 'express';
import { generateHTML } from "./src/ssr.js";
import { model } from "./src/model.js";

const app = express();
app.use(express.json());

app.use("/src", express.static("./src"));
app.put("/api/todo-items", (req, res) => {
  model.init({ todoItems: req.body.todoItems });
  res.status(200).send(model.todoItems);
});


app.get(/\/.*/, (req, res) => res.send(generateHTML(req.path, model)))

app.listen(8000, () => console.log('listen to http://localhost:8000'));
