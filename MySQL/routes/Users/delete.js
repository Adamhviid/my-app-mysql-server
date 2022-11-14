import express from "express";
import connection from "../../MySQL_Connection.js";
import * as dotenv from 'dotenv'
dotenv.config()

const router = express.Router();

router.post("/user/delete", async (req, res) => {
  try {
    const user = req.body;
    const deleteUserQuery = `DELETE FROM users WHERE id=${user.id}`;

    connection().query(deleteUserQuery, async (err, result) => {

      if (err) throw err;
    });
  } catch (err) {
    throw err;
  }
});

export default router;
