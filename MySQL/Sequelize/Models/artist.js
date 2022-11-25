import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

class Artist extends Model { }

Artist.init({
  idArtist: {
    type: DataTypes.STRING,
    allowNull: false
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
  sequelize,
  modelName: 'Artist'
});

Artist.sync();
