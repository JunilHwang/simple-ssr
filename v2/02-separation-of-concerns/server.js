import express from 'express';
import { generateHTML } from "./src/ssr.js";
import { model } from "./src/model.js";

const app = express();
app.get("/", (req, res) => res.send(generateHTML(model)));
app.listen(8000, () => console.log('listen to http://localhost:8000'));
