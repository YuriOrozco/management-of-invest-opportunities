const express = require('express');
const sequelize = require('./db/db');
const cors = require('cors');
const userRoutes = require('./routes/users.routes');
const ssoRoutes = require('./routes/auth.routes');
const PORT = 3001;

async function main() {
  try {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
    app.use(ssoRoutes);
    app.use(userRoutes);

    //SEQUELIZE
    //trata de sincronizar con la base de datos
    await sequelize.sync();
  } catch (error) {
    console.log('Error: ', error);
  }
}

main();
