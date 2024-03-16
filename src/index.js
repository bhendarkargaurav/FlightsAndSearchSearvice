const express = require ('express');
const { PORT } = require('./config/ServerConfig');
const bodyParser = require('body-parser');

const setupAndStartServer = async () => {
const app = express();
// const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
    // console.log(process.env);
});
}
setupAndStartServer();
console.log("Gaurav");