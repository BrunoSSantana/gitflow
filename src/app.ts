import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const { name } = req.query
  return res.json({message: `Hello ${name}`})
})

app.get('/new-path', (req, res) => {
  return res.json({message: "Server is Runing"})
})

export { app };
