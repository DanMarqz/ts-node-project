import express from 'express';
import path from 'path';

const app = express();
const port:number = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/love-me', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/love-me.html'));
});

app.listen(port, () => {
  return console.log(`Express is listennning at port http://mixi:${port}/`);
})