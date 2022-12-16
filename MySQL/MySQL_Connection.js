import sequelize from 'sequelize';
import * as dotenv from 'dotenv'
dotenv.config()

const connection = new sequelize({
  host: 'localhost',
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: 'my-app-server',
  dialect: 'mysql',
});

export default connection;