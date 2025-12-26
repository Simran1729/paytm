const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mainRouter = require('./routes');
const connectDb = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

app.use(cookieParser());
app.use(express.json());

app.use('/api/v1', mainRouter);

connectDb();

app.listen(PORT, () => {
    console.log(`app listening on port on : `, PORT)
})