import express from "express";
import { App } from "./src/components.js";
import { serverRenderer } from "./src/ServerRenderer.js";

const app = express();

app.use("/src", express.static("./src"));

app.get("/*", (req, res) => {
  res.send(
    serverRenderer(App({
      path: req.path,
    }))
  );
});

app.listen(3000, () => {
  console.log('listen to http://localhost:3000');
})