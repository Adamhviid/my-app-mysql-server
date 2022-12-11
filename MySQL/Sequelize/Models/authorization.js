import { DataTypes } from 'sequelize';
import sequelize from '../ORM_connection.js';

const Authorization = sequelize.define("authorizations", {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
  },
  role: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false
});

Authorization.sync().then(() => {
  console.log('Authorization table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

export default Authorization;