import User from '../Models/user.js';

export default async function DeleteUser(userId) {
  try {
    await User.destroy({
      where: {
        id: userId
      }
    }).then(res => {
      return res.status(200).json(res);
    }).catch(err => {
      return res.status(500).json(err);
    })
  } catch (err) {
    throw err;
  }
}