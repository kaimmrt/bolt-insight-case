const express = require('express');
const helmet = require('helmet');
const cors = require('cors')
const config = require('./config');
const loaders = require('./loaders');
const { PostRoutes } = require('./routes');

config();
loaders();

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(express.urlencoded({ extended: true }))

app.listen(process.env.APP_PORT, () => {
    console.log("Sunucu ayağa kalktı...");
    app.use('/post', PostRoutes);
})