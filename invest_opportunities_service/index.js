const express = require('express');
const sequelize = require('./db/db');
const user = require('./models/User');
const PORT = 3001;

async function main() {
  try {
    const app = express();
    app.listen(PORT, ()=>{
      console.log(`Server is listening on port ${PORT}`)
    });

    //SEQUELIZE
     //trata de sincronizar con la base de datos
     await sequelize.sync();
  } catch (error) {
    console.log('Error: ', error);
  }
}

main();
