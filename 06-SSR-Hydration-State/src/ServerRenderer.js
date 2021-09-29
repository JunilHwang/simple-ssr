export const serverRenderer = (RootComponent, context) => `
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Server Side Rendering</title>
</head>
<body>
<div id="app">${RootComponent}</div>
<script>
  window.context = ${context}
</script>
<script src="./src/main.js" type="module"></script>
</body>
</html>
`;
