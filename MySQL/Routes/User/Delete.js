import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()

import User from '../../Models/user.js';

const router = express.Router();

router.post("/user/delete", async (req, res) => {
  try {
    const user = req.body;

    await User.destroy({
      where: {
        id: user.id
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  } catch (err) {
    throw err;
  }
});

export default router;
