
import { port } from './config/ServerConfig.js'; 

import express from 'express';

const setupAndStartServer = async () => {
    const app = express();
    // const PORT = 3000;

    app.listen(port, () => {
        console.log(`Server started at ${port}`);
        // console.log(process.env);
    });
};

// You need to explicitly call your setupAndStartServer function to start the server.
setupAndStartServer();
