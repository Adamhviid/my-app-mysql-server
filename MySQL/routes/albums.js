import express from "express";
import axios from "axios";
import connection from "../MySQL_Connection.js";

const router = express.Router();

router.get("/search/albums/:artist", async (req, res) => {
  const { artist } = req.params;

  const query = "SELECT * FROM albums WHERE strArtist LIKE '%" + artist + "%'";

  connection().connect(function (err) {
    if (err) throw err;
    connection().query(query, async (err, result) => {
      if (err) throw err;

      if (result.length === 0) {
        const { data } = await axios.get(
          "http://localhost:3001/api/search/albums/" + artist
        );

        setTimeout(() => {
          data.album.map((album) => {
            const insertQuery = `INSERT INTO albums
                            (idAlbum, idArtist, idLabel, strAlbum, strAlbumStripped, strArtist, intYearReleased,
                            strStyle, strGenre, strLabel, strReleaseFormat, strAlbumThumb, strAlbumCDart)
                            VALUES
                            ("${album.idAlbum}", "${album.idArtist}", "${album.idLabel}", "${album.strAlbum}", 
                            "${album.strAlbumStripped}","${album.strArtist}", "${album.intYearReleased}",
                            "${album.strStyle}", "${album.strGenre}", "${album.strLabel}", "${album.strReleaseFormat}",
                            "${album.strAlbumThumb}", "${album.strAlbumCDart}")`;
            connection().query(insertQuery, (err) => {
              if (err) throw err;
            });
          });
        }, 5000);
        return res.json(data);
      } else {
        return res.json(result);
      }
    });
    connection().end();
  })
});

export default router;