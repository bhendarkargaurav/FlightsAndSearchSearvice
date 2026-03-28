<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
// const {Airplane} = require('./models/index');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});
        }
    });
}

setupAndStartServer();
=======

import express from 'express';
import bodyParser from 'body-parser';


import { port } from './config/ServerConfig.js'; 


const setupAndStartServer = async () => {

    //create the express object
    const app = express();
    // const PORT = 3000;
    
    //setup bodyparser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(port, () => {
        console.log(`Server started at ${port}`);
        // console.log(process.env);
    });
};

// You need to explicitly call your setupAndStartServer function to start the server.
setupAndStartServer();
 
>>>>>>> de2cbe4548668ce376d5c04a100cfd13f33d8ec1
