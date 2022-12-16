import User from '../../Models/user.js';

export default async function GetUser(userEmail) {
  try {
    await User.findOne({
      where: {
        email: userEmail
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