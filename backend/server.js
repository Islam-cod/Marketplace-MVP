const express = require('express');
const cors = require('cors');
require('dotenv').config();

const jobsRouter = require('./routes/jobs');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', jobsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
