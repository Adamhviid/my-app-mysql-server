/* import express from "express";
import axios from "axios";
import connection from "../MySQL_Connection.js";

const router = express.Router();

router.get("/search/artist/:artist", async (req, res) => {
  const { artist } = req.params;

  const query = 'SELECT * FROM artists WHERE strArtist LIKE "%' + artist + '%"';

  connection().connect(function (err) {
    if (err) throw err;
    connection().query(query, async (err, result) => {
      if (err) throw err;

      if (result.length === 0) {
        const { data } = await axios.get(
          "http://localhost:3001/api/search/artist/" + artist
        );

        const insertQuery = `INSERT INTO artists 
                            (idArtist, strArtist, strArtistAlternate, strLabel, idLabel, intFormedYear, intBornYear, intDiedYear, strDisbanded, 
                            strStyle, strGenre, strMood, strWebsite, strGender, intMembers, strCountry, strCountryCode, 
                            strArtistThumb, strArtistLogo, strArtistClearart, strArtistWideThumb, strArtistFanart, strArtistFanart2, 
                            strArtistFanart3, strArtistBanner) 
                            VALUES
                            ("${data.idArtist}", "${data.strArtist}", "${data.strArtistAlternate}", "${data.strLabel}", "${data.idLabel}", 
                            "${data.intFormedYear}", "${data.intBornYear}", ${data.intDiedYear}, "${data.strDisbanded}", "${data.strStyle}", 
                            "${data.strGenre}", "${data.strMood}", "${data.strWebsite}", "${data.strGender}", 
                            "${data.intMembers}", "${data.strCountry}", "${data.strCountryCode}", "${data.strArtistThumb}", "${data.strArtistLogo}", 
                            "${data.strArtistClearart}", "${data.strArtistWideThumb}", "${data.strArtistFanart}", "${data.strArtistFanart2}", 
                            "${data.strArtistFanart3}", "${data.strArtistBanner}")`;

        connection().query(insertQuery, (err) => {
          if (err) throw err;
        });
        return res.json(data[0]);
      } else {
        return res.json(result[0]);
      }
    });
    connection().end();
  });
});

export default router; */