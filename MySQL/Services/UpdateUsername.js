import * as dotenv from 'dotenv'
dotenv.config()

import User from '../Models/user.js';

export default async function UpdateUsername(userId, newUsername) {
  try {
    await User.update({
      username: newUsername
    }, {
      where: {
        id: userId
      }
    }).then(res => {
      return res
    }
    ).catch(err => {
      return err
    })
  } catch (err) {
    throw err
  }
}