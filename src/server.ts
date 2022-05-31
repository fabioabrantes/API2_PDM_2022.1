import "reflect-metadata";
import express from "express";
import path from "path";
import cors from 'cors';
import "express-async-errors";

import "./database";
import {router} from './routes';
import {exceptionsHandle} from './middleware/exceptionsHandle';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(exceptionsHandle);


app.listen(3000, ()=>{
  console.log("server online on port 3000");
})