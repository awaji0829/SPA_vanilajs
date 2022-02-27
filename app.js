import path from 'path';
import express from 'express';

const app = express();
//포트 지정
const port = 4000;
const __dirname = path.resolve();

app.use(
  '/static',
  express.static(path.resolve(__dirname, 'frontend', 'static'))
);
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
