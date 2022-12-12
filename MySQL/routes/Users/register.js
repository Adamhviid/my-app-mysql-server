/* import express from "express";
import connection from "../../MySQL_Connection.js";
import bcrypt from "bcrypt";
import * as dotenv from 'dotenv'
dotenv.config()

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const findUserQuery = `SELECT * FROM users WHERE email = '${email}'`;

    connection().query(findUserQuery, async (err, result) => {
      if (result.length > 0) {
        return res.status(409).send("Email is already in use");
      } else {
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);

        const insertUserQuery = `INSERT INTO users
                                (email, password, authorization)
                                VALUES 
                                ('${email}', '${encryptedPassword}', '2')`;

        connection().query(insertUserQuery, (err, result) => {
          res.status(201).send("User created successfully");
          if (err) throw err;
        });
      }
      if (err) throw err;
    });
  } catch (err) {
    throw err;
  }
});

export default router; */