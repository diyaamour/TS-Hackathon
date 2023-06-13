require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { reviewRouter } = require('./routes/review.routes')
const port = process.env.API_PORT;
require('./config/mongoose.config');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/reviews', reviewRouter); 
app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));