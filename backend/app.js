const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bitcoinSavingDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const tasksRoutes = require('./routes/tasks');
app.use('/api/tasks', tasksRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
