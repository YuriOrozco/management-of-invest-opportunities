const express = require('express');
const sequelize = require('./db/db');
const user = require('./models/User');

async function main() {
  try {
    //trata de sincronizar conn la base de datos
    await sequelize.sync();
    const app = express();
    const PORT = 3001;
    console.log(`Server is listening on port ${PORT}`);
    app.listen(PORT);
  } catch (error) {
    console.log('Error: ', error);
  }
}

main();
