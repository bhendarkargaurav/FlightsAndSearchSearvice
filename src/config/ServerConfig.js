// ServerConfig.js
// const port = 3001; // Your desired port

// export { port };


// ServerConfig.js
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

export { port };






