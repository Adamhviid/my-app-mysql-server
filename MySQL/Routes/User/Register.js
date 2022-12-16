import express from "express";
import Register from "../../Services/Register.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    res.status(400).send("All input is required");
  } else {
    Register(email, password).then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      res.status(500).json(err);
    })
  };
});

export default router;
