import bcrypt from "bcrypt";
import * as dotenv from 'dotenv'
dotenv.config()

import User from '../../Models/user.js';

export default async function Register(userEmail, userPassword) {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    await User.create({
      email: userEmail,
      password: hashedPassword,
      authorization: 2
    })
    return res.status(201).send("User created successfully");
  } catch (err) {
    return res.status(500).json(err);
  }

}