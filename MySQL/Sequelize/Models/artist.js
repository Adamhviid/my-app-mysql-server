import { DataTypes } from "sequelize";
import sequelize from "../ORM_connection.js";

const Artist = sequelize.define("artists", {
  idArtist: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  strArtist: {
    type: DataTypes.STRING,
    allowNull: false
  },
  strArtistAlternate: {
    type: DataTypes.STRING,
  },
  strLabel: {
    type: DataTypes.STRING,
  },
  idLabel: {
    type: DataTypes.STRING,
  },
  intFormedYear: {
    type: DataTypes.STRING,
  },
  intBornYear: {
    type: DataTypes.STRING,
  },
  intDiedYear: {
    type: DataTypes.STRING,
  },
  strDisbanded: {
    type: DataTypes.STRING,
  },
  strStyle: {
    type: DataTypes.STRING,
  },
  strGenre: {
    type: DataTypes.STRING,
  },
  strMood: {
    type: DataTypes.STRING,
  },
  strWebsite: {
    type: DataTypes.STRING,
  },
  strGender: {
    type: DataTypes.STRING,
  },
  intMembers: {
    type: DataTypes.STRING,
  },
  strCountry: {
    type: DataTypes.STRING,
  },
  strCountryCode: {
    type: DataTypes.STRING,
  },
  strArtistThumb: {
    type: DataTypes.STRING,
  },
  strArtistLogo: {
    type: DataTypes.STRING,
  },
  strArtistClearart: {
    type: DataTypes.STRING,
  },
  strArtistWideThumb: {
    type: DataTypes.STRING,
  },
  strArtistFanart: {
    type: DataTypes.STRING,
  },
  strArtistFanart2: {
    type: DataTypes.STRING,
  },
  strArtistFanart3: {
    type: DataTypes.STRING,
  },
  strArtistBanner: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false
});

Artist.sync().then(() => {
  console.log('Artist table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

export default Artist;