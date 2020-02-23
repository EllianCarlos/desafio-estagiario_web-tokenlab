const express = require("express");
const cors = require("cors");
const http = require("http");

const routes = require("./routes");

const app = express();
const server = http.Server(app);

import "./database";

app.use(cors());
app.use(express.json());
app.use(routes);

app.post('/', (request, response) => {
    return response.json({
        'message':'Hello'
    });
});

server.listen(3333);