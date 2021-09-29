import express from "express";
import { App } from "./src/components.js";
import { serverRenderer } from "./src/ServerRenderer.js";
import { store } from "./src/store.js";

const app = express();

app.use(express.json());
app.use("/src", express.static("./src"));

app.put('/api/state', (req, res) => {
  store.hydration(req.body);
  res.status(204).send();
})

app.get("/*", (req, res) => {
  res.send(
    serverRenderer(App({
      path: req.path,
      state: store.state,
    }))
  );
});

app.listen(3000, () => {
  console.log('listen to http://localhost:3000');
})