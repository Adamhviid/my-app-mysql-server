import { DataTypes } from 'sequelize';
import sequelize from '../ORM_connection.js';

const Album = sequelize.define("albums", {
  idAlbum: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  idArtist: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idLabel: {
    type: DataTypes.STRING,
  },
  strAlbum: {
    type: DataTypes.STRING,
    allowNull: false
  },
  strAlbumStripped: {
    type: DataTypes.STRING,
  },
  strArtist: {
    type: DataTypes.STRING,
    allowNull: false
  },
  intYearReleased: {
    type: DataTypes.STRING,
  },
  strStyle: {
    type: DataTypes.STRING,
  },
  strGenre: {
    type: DataTypes.STRING,
  },
  strLabel: {
    type: DataTypes.STRING,
  },
  strReleaseFormat: {
    type: DataTypes.STRING,
  },
  strAlbumThumb: {
    type: DataTypes.STRING,
  },
  strAlbumCDart: {
    type: DataTypes.STRING,
  },
  strDescriptionEN: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false
});

Album.sync().then(() => {
  console.log('Album table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

export default Album;