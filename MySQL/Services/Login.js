import User from '../Models/user.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config()

export default async function Login(userEmail, userPassword) {
  User.findOne({
    where: {
      email: userEmail
    }
  }).then(async user => {
    if (user) {
      const passwordCompare = await bcrypt.compare(userPassword, user.password);
      console.log("passwordCompare: " + passwordCompare)
      if (passwordCompare) {
        const token = jwt.sign(
          {
            user_id: user.id,
            email: user.email,
            authorization: user.authorization
          },
          `${process.env.JWT_TOKEN_SECRET}`,
          {
            expiresIn: "24h",
          }
        );
        user.token = token;
        return user;
      } else {
        return "Invalid Credentials";
      }
    } else {
      console.log("Invalid Credentials")
      return "Invalid Credentials";
    }
  }).catch(err => {
    return err;
  })
}