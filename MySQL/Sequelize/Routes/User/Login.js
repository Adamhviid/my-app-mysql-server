import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config()

import User from '../../Models/user.js';

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("Email and password is required");
      return;
    }

    User.findOne({
      where: {
        email: email
      }
    }).then(async user => {
      console.log(user.id)
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (passwordCompare) {
        const token = jwt.sign(
          {
            id: user.id,
            email: email,
            authorization: user.authorization
          },
          `${process.env.JWT_TOKEN_SECRET}`,
          {
            expiresIn: "24h",
          }
        );
        user.token = token;
        console.log(user)
        res.status(200).json(user);
      } else {
        res.status(400).send("Invalid Credentials");
      }
    }).catch(err => {
      console.log(err)
    })
  } catch (err) {
    throw err
  }
});

export default router;