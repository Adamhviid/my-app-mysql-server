import { DataTypes } from "sequelize";
import sequelize from "../MySQL_connection.js"

const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  authorization: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  timestamps: false
});

User.sync().then(() => {
  console.log('User table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

export default User;