// const express = require("express") //ES5
import express from "express"; //ES6
import mongoose from "mongoose";
import dotenv from "dotenv";

import wilderRoutes from './routes/wilderRoutes';

dotenv.config();

mongoose
.connect(
    process.env.MONGO_URI,
{
    autoIndex: true,
}
)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((err) => console.log(err));

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 
  
app.use('/api/wilder', wilderRoutes);
    
app.listen(3000, () => console.log("Seveur lancé sur le port 3000"));
