import express from "express";
import bcrypt from "bcrypt";
import * as dotenv from 'dotenv'
dotenv.config()

import User from '../../Models/user.js';

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.create({
      email: email,
      password: hashedPassword,
      authorization: 2
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  } catch (err) {
    console.log(err);
  }
});

export default router;
