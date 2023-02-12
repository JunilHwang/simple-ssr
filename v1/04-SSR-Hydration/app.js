import express from "express";
import { TodoList } from "./src/components.js";
import { serverRenderer } from "./src/ServerRenderer.js";

const app = express();

app.use("/src", express.static("./src"));

app.get("/", (req, res) => {
  res.send(
    serverRenderer(TodoList())
  );
});

app.listen(3000, () => {
  console.log('listen to http://localhost:3000');
})