
import express from 'express';
import bodyParser from 'body-parser';


import { port } from './config/ServerConfig.js'; 



const setupAndStartServer = async () => {

    //create the express object
    const app = express();
    // const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(port, () => {
        console.log(`Server started at ${port}`);
        // console.log(process.env);
    });
};

// You need to explicitly call your setupAndStartServer function to start the server.
setupAndStartServer();
