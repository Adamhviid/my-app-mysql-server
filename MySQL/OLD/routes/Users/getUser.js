/* import express from "express";
import connection from "../../MySQL_Connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config()

import verifyToken from '../../middleware/verifyToken.js'

const router = express.Router();

router.post("/user", verifyToken, async (req, res) => {
  try {
    const user = res.user;
    const findUserQuery = `SELECT * FROM users WHERE email = '${user.email}'`;

    connection().query(findUserQuery, async (err, result) => {
      const user = result[0];
      res.status(200).json(user);
      if (err) throw err;
    });
  } catch (err) {
    throw err
  }
});

export default router;
 */