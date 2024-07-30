const User = require("../Models/UserModel");

exports.addUser = async (req, res) => {
  //   email check
  let user = await User.findOne({
    email: req.body.email
  });
  if (user) {
    return res
      .status(400)
      .json({ error: "Email already used. please use another email" });
  }
  // add user
  let userToAdd = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  userToAdd = await userToAdd.save();
  if (!userToAdd) {
    return res.status(400).json({
      error: "Somethings went wrong"
    });
  }
  res.send(userToAdd);
};
// user details
exports.UserDetails = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return res.status(400).json({ error: "user not found" });
  }
  res.send(user);
};
