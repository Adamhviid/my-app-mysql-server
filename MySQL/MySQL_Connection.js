import { createConnection } from 'mysql';

function connection() {
  const con = createConnection({
    host: "localhost",
    user: "root",
    password: "Mysqlroot",
    database: 'my-app-server'
  });
  return con;
}

//test if connection is working
connection().connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL-server");

  const artistTable = `CREATE TABLE if not exists artists
                      (idArtist varchar(255), strArtist varchar(255), strArtistAlternate varchar(255), strLabel varchar(255), idLabel varchar(255),
                      intFormedYear varchar(255),intBornYear varchar(255),intDiedYear varchar(255), strDisbanded varchar(255), strStyle varchar(255), 
                      strGenre varchar(255), strMood varchar(255), strWebsite varchar(255), strBiographyEN varchar(255), 
                      strGender varchar(255), intMembers varchar(255), strCountry varchar(255), strCountryCode varchar(255), strArtistThumb varchar(255), 
                      strArtistLogo varchar(255), strArtistClearart varchar(255), strArtistWideThumb varchar(255), strArtistFanart varchar(255), 
                      strArtistFanart2 varchar(255), strArtistFanart3 varchar(255), strArtistBanner varchar(255), PRIMARY KEY (idArtist))`;

  const albumTable = `CREATE TABLE if not exists albums 
                      (idAlbum varchar(255), idArtist varchar(255), idLabel varchar(255), strAlbum varchar(255), strAlbumStripped varchar(255), strArtist varchar(255),
                      intYearReleased varchar(255), strStyle varchar(255), strGenre varchar(255), strLabel varchar(255), strReleaseFormat varchar(255), 
                      strAlbumThumb varchar(255), strAlbumCDart varchar(255), strDescriptionEN varchar(255), PRIMARY KEY (idAlbum))`;

  const authorizationTable = `CREATE TABLE if not exists authorizations
                              (id int(11) NOT NULL AUTO_INCREMENT, roles varchar(255), PRIMARY KEY (id));
                              `;

  const userTable = `CREATE TABLE if not exists users
                    (id int(11) NOT NULL AUTO_INCREMENT, email varchar(255), username varchar(255), password varchar(255), authorization varchar(225), PRIMARY KEY (id))`;

  const insertAuthorizationQuery = `INSERT INTO authorizations (roles) VALUES ('admin'), ('user')`;

  connection().query(artistTable, (err) => {
    if (err) throw err;
  });

  connection().query(albumTable, (err) => {
    if (err) throw err;
  });

  connection().query(authorizationTable, (err) => {
    if (err) throw err;
  });


  connection().query(userTable, (err) => {
    if (err) throw err;
  });

  connection().query(insertAuthorizationQuery, (err) => {
    if (err) throw err;
  });


  connection().end();
});

export default connection;