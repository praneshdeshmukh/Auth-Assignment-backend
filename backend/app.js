const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./userRoutes/userRoute.js');

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5500",
    credentials: true
}))
app.use(cookieParser())

app.use('/', userRouter)

// for any other route : 
// app.use('*', (req,res) => {
//     res.status(400).send('404 page not found')
// })

module.exports = app;
