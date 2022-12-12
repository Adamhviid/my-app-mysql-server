import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  host: 'localhost',
  username: "root",
  password: "Mysqlroot",
  database: 'my-app-server',
  dialect: 'mysql',
});

export default sequelize;