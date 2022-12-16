/* import express from "express";
import connection from "../../MySQL_Connection.js";
import * as dotenv from 'dotenv'
dotenv.config()

const router = express.Router();

router.post("/user/update", async (req, res) => {
  try {
    const { id, username } = req.body;

    const updateUserQuery = `UPDATE users SET username = '${username}' WHERE id = '${id}'`;

    connection().query(updateUserQuery, async (err) => {
      if (err) throw err;
    });
  } catch (err) {
    throw err
  }
});

export default router;
 */