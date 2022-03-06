express = require('express');

let app = express();

const staticDirectories = [ 'content\images', 'src', 'wwwroot'];
staticDirectories.forEach(directory => {
  app.use(express.static(directory));
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
