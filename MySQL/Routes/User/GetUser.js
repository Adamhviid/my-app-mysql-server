import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()

import User from '../../Models/user.js';
import verifyToken from '../../middleware/verifyToken.js'

const router = express.Router();

router.post("/user", verifyToken, async (req, res) => {
  try {
    const user = res.user;

    await User.findOne({
      where: {
        email: user.email
      }
    }).then(res => {
      res.status(200).json(res);
    }
    ).catch(err => {
      console.log(err)
    })
  } catch (err) {
    throw err
  }
});

export default router;
