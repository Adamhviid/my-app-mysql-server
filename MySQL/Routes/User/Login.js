import express from "express";
import Login from "../../Services/Login.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("Email and password is required");
      return;
    }
    Login(email, password)
      .then((result) => {
        res.status(200).json(result);
      }
      ).catch((err) => {
        res.status(500).json(err);
      })
  } catch (err) {
    console.log(err);
  }
});
export default router;