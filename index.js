import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import API from "./API/theAudioDb_API.js";

//old imports
/* import artist from "./MySQL/routes/artists.js";
import album from "./MySQL/routes/albums.js";
import register from "./MySQL/routes/Users/Register.js"; 
import login from "./MySQL/routes/Users/Login.js";
import deleteAccount from "./MySQL/routes/Users/delete.js";
import getUser from "./MySQL/routes/Users/getUser.js";
import updateUsername from "./MySQL/routes/Users/updateUsername.js"; */

//sequelize imports
import sequelize from "./MySQL/MySQL_connection.js";
import album from "./MySQL/Routes/Artist/albums.js";
import artist from "./MySQL/Routes/Artist/artist.js";
import authorization from "./MySQL/Models/authorization.js";
import register from "./MySQL/Routes/User/Register.js";
import login from "./MySQL/Routes/User/Login.js";
import getUser from "./MySQL/Routes/User/getUser.js";
import updateUsername from "./MySQL/Routes/User/UpdateUsername.js";
import deleteAccount from "./MySQL/Routes/User/DeleteUser.js";

const PORT = process.env.PORT || 3001;
const app = express();

const corsOptions = {
  origin: PORT,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
}

try {
  await sequelize.authenticate();
  console.log('Sequelize connection has been established successfully.');
  authorization.findAndCountAll()
    .then(result => {
      if (result.count == 0) {
        authorization.create({
          id: 1,
          role: "admin"
        })
        authorization.create({
          id: 2,
          role: "user"
        })
      }
    })
    .catch(err => {
      throw err;
    });
} catch (error) {
  console.error('Unable to connect to the database:', error);
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


