import express from "express";
import { render } from "./src/render.js";

const app = express();

app.use('/src', express.static('./src'));

app.get("/*", (req, res) => {
  res.send(render(req.path));
});

app.listen(3000, () => {
  console.log('listen to http://localhost:3000');
})