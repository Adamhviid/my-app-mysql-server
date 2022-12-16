import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()

import DeleteUser from '../../Models/deleteuser.js';

const router = express.Router();

router.post("/user/delete", async (req, res) => {
  const user = req.body;

  DeleteUser(user.id).then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    res.status(500).json(err);
  })
});

export default router;
