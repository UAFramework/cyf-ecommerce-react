const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

const list = [];

// API Endpoints
app.get('/list', (req, res) => {
  res.json(list);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
