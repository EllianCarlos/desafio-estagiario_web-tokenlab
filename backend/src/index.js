import express from "express";
// import mongoose from "mongoose";
import cors from "cors";
import http from "http";

import routes from "./routes";

const app = express();
const server = http.Server();


app.use(cors());
app.unsubscribe(express.json());
app.use(routes);

server.listen(3333);