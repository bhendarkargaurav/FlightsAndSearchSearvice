const express = require ('express');
const { PORT } = require('./config/ServerConfig');

const setupAndStartServer = async () => {
const app = express();
// const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
    // console.log(process.env);
});
}
setupAndStartServer();
console.log("Gaurav");