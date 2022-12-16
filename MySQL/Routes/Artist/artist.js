import express from "express";
import axios from "axios";

import Artist from "../../Models/artist.js";

const router = express.Router();

router.get("/search/artist/:artist", async (req, res) => {
  const { artist } = req.params;

  await Artist.findOne({
    where: { strArtist: artist }
  }).then(async (result) => {
    if (result === null || result.length === 0) {
      const { data } = await axios.get(
        "http://localhost:3001/api/search/artist/" + artist
      );
      await Artist.create({
        idArtist: data.idArtist,
        strArtist: data.strArtist,
        strArtistAlternate: data.strArtistAlternate,
        strLabel: data.strLabel,
        idLabel: data.idLabel,
        intFormedYear: data.intFormedYear,
        intBornYear: data.intBornYear,
        intDiedYear: data.intDiedYear,
        strDisbanded: data.strDisbanded,
        strStyle: data.strStyle,
        strGenre: data.strGenre,
        strMood: data.strMood,
        strWebsite: data.strWebsite,
        strGender: data.strGender,
        intMembers: data.intMembers,
        strCountry: data.strCountry,
        strCountryCode: data.strCountryCode,
        strArtistThumb: data.strArtistThumb,
        strArtistLogo: data.strArtistLogo,
        strArtistClearart: data.strArtistClearart,
        strArtistWideThumb: data.strArtistWideThumb,
        strArtistFanart: data.strArtistFanart,
        strArtistFanart2: data.strArtistFanart2,
        strArtistFanart3: data.strArtistFanart3,
        strArtistBanner: data.strArtistBanner,
      }).then(async () => {
        await Artist.findOne({
          where: { strArtist: artist }
        }).then(async (result) => {
          return res.send(result);
        })
      })
    } else {
      return res.send(result);
    }
  }).catch((err) => {
    console.log(err);
  })
})


export default router;