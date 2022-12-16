import User from '../Models/user.js';

export default async function GetUser(userEmail) {
  try {
    await User.findOne({
      where: {
        email: userEmail
      }
    }).then(res => {
      return res;
    }
    ).catch(err => {
      return err;
    })
  } catch (err) {
    throw err
  }
}