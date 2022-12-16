import User from '../Models/user.js';

export default async function DeleteUser(userId) {
  try {
    await User.destroy({
      where: {
        id: userId
      }
    }).then(res => {
      return "User deleted";
    }).catch(err => {
      return err;
    })
  } catch (err) {
    throw err;
  }
}