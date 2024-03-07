# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- create a `.env` file inthe root directory and add the following environment variable
    - `PORT = 3000`

- inside the `src/config` folder create a new file `config.json` and  then add the following 

```
  "development": {
    "username": <YOUR_DB_LOGIN>,
    "password": <YOUE_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```  

- once you added your config as listed above, go to the src folder from your terminal and execute ` npx sequelize db:create`