import { todoItems } from "./items.js";

export const TodoList = () => `
  <ul>
    ${todoItems.map(({ id, content, activation }) => `
      <li>
        <input type="checkbox" ${activation ? 'checked' : ''} />
        <span ${activation ? ' style="text-decoration: line-through;"' : ''}>${content}</span>
      </li>
    `).join('')}
  </ul>
`;

export const Router = () => `

`;

export const render = () => `
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Client Side Rendering</title>
</head>
<body>
<div id="app">${Router}</div>
<script src="./src/main.js" type="module"></script>
</body>
</html>
`;
