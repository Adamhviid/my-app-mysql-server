import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import API from "./API/theAudioDb_API.js";
import artist from "./MySQL/routes/artists.js";
import album from "./MySQL/routes/albums.js";
import register from "./MySQL/routes/Users/Register.js";
import login from "./MySQL/routes/Users/Login.js";
import deleteAccount from "./MySQL/routes/Users/delete.js";
import getUser from "./MySQL/routes/Users/getUser.js";
import updateUsername from "./MySQL/routes/Users/updateUsername.js";

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
app.use('/auth', register)
app.use('/auth', login)
app.use('/auth', deleteAccount)
app.use('/auth', getUser)
app.use('/auth', updateUsername)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


