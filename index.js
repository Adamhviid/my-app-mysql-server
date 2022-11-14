import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import API from "./API/theAudioDb_API.js";
import artist from "./MySQL/routes/artists.js";
import album from "./MySQL/routes/albums.js";

const PORT = process.env.PORT || 3001;
const app = express();

const corsOptions = {
  origin: PORT,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api", API);
app.use('/db', artist)
app.use('/db', album)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


