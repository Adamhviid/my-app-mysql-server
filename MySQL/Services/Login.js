import User from '../Models/user.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config()

export default async function Login(userEmail, userPassword) {
  try {
    User.findOne({
      where: {
        email: userEmail
      }
    }).then(async user => {
      const passwordCompare = await bcrypt.compare(userPassword, user.password);
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
        return res.status(200).json(user);
      } else {
        return res.status(400).send("Invalid Credentials");
      }
    }).catch(err => {
      return res.status(500).json(err);
    })
  } catch (err) {
    throw err
  }
}