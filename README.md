# Welcome to Flights Service(main one)

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
  
## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  
## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)

