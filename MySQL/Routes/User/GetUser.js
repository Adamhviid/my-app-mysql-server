import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()

import GetUser from '../../Services/GetUser.js'
import verifyToken from '../../Middleware/verifyToken.js'

const router = express.Router();

router.post("/user", verifyToken, async (res) => {
  const user = res.user;

  GetUser(user.email).then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    res.status(500).json(err);
  })
});

export default router;
