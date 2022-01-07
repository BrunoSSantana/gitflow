import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({message: "Server is Runing"})
})

export { app };
