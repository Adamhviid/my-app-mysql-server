import express from "express";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv'
dotenv.config()

import User from '../Models/user.js';

const router = express.Router();

router.post("/register", async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    /* const user =  */await User.create({
      id: uuidv4(),
      email: email,
      password: hashedPassword,
      authorization: 2
    });
    /*     await user.save(); */
    res.status(201).send();

  } catch (err) {
    console.log(err);
  }
});

export default router;
