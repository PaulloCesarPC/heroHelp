const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();



app.use(express.json());

app.use(cors({
    origin:'*'
}));

app.use(routes);
app.listen(3333);
