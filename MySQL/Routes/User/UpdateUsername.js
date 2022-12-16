import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()

import User from '../../Models/user.js';

const router = express.Router();

router.post("/user/update", async (req, res) => {
  try {
    const { id, username } = req.body;

    await User.update({
      username: username
    }, {
      where: {
        id: id
      }
    }).then(res => {
      console.log(res)
    }
    ).catch(err => {
      console.log(err)
    })
  } catch (err) {
    throw err
  }
});

export default router;
