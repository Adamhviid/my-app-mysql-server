import express from "express";
import connection from "../../MySQL_Connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config()

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("Email and password is required");
      return;
    }

    const findUserQuery = `SELECT * FROM users WHERE email = '${email}'`;

    connection().query(findUserQuery, async (err, result) => {
      if (result.length > 0) {
        const user = result[0];
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (passwordCompare) {

          const token = jwt.sign(
            {
              user_id: user.id,
              email: email
            },
            `${process.env.JWT_TOKEN_SECRET}`,
            {
              expiresIn: "24h",
            }
          );
          user.token = token;
          res.status(200).json(user);
        } else {
          res.status(400).send("Invalid Credentials");
        }
      }
      if (err) throw err;
    });
  } catch (err) {
    throw err
  }
});

export default router;
