import express from "express";
import UpdateUsername from "../../Services/UpdateUsername.js";

const router = express.Router();

router.post("/user/update", async (req, res) => {
  const { id, username } = req.body;

  UpdateUsername(id, username).then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    res.status(500).json(err);
  })
});

export default router;
