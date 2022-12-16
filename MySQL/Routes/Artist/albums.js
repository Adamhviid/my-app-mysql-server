import express from "express";
import axios from "axios";

import Album from "../../Models/album.js";

const router = express.Router();

router.get("/search/albums/:artist", async (req, res) => {
  const { artist } = req.params;

  await Album.findAll({
    where: { strArtist: artist }
  }).then(async (result) => {
    if (result === null || result.length === 0) {

      const { data } = await axios.get(
        "http://localhost:3001/api/search/albums/" + artist
      );

      data.album.map(async (album) => {
        await Album.create({
          idAlbum: album.idAlbum,
          idArtist: album.idArtist,
          idLabel: album.idLabel,
          strAlbum: album.strAlbum,
          strAlbumStripped: album.strAlbumStripped,
          strArtist: album.strArtist,
          intYearReleased: album.intYearReleased,
          strStyle: album.strStyle,
          strGenre: album.strGenre,
          strLabel: album.strLabel,
          strReleaseFormat: album.strReleaseFormat,
          strAlbumThumb: album.strAlbumThumb,
          strAlbumCDart: album.strAlbumCDart
        })
        Album.findAll({
          where: { strArtist: artist }
        }).then(async (result) => {
          console.log("No albums found for " + artist);
          return res.send(result);
        })
      });
    } else {
      console.log("Albums found for " + artist);
      return res.send(result);
    }
  }).catch((err) => {
    console.log(err);
  })
});

export default router;