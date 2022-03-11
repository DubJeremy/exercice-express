// const express = require("express") //ES5
import express from "express"; //ES6
import mongoose from "mongoose";
import dotenv from "dotenv";

import wilderRoutes from './routes/wilderRoutes';

dotenv.config();
const PORT = process.env.PORT || PORT;

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

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
  

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 
  
app.use('/api/wilder', wilderRoutes);
    
app.listen(PORT, () => console.log(`Seveur lancé sur le port ${PORT}`));
