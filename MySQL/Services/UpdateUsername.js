import * as dotenv from 'dotenv'
dotenv.config()

import User from '../../Models/user.js';

export default async function UpdateUsername(userId, newUsername) {
  try {
    await User.update({
      username: newUsername
    }, {
      where: {
        id: userId
      }
    }).then(res => {
      return res.status(200).json(res);
    }
    ).catch(err => {
      return res.status(500).json(err);
    })
  } catch (err) {
    throw err
  }
}