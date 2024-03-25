const express = require('express');
const sequelize = require('./db/db');
//const user = require('./models/User');
//const investment = require('./models/Investment');
const routes = require('./routes/users.routes')
const PORT = 3001;

async function main() {
  try {
    const app = express();
    app.use(express.json());

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
    app.use(routes);

    //SEQUELIZE
    //trata de sincronizar con la base de datos
    await sequelize.sync();
  } catch (error) {
    console.log('Error: ', error);
  }
}

main();
