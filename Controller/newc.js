const User = require("../Models/new");

exports.addUser = async (req, res) => {
  let userToAdd = new User({
    username: req.body.username,
    email: req.body.email
  });
  userToAdd = await userToAdd.save();
  if (!userToAdd) {
    return res.status(400).json({ error: "wrong" });
  }
  res.send(userToAdd);
};

exports.userDetails = async (req, res) => {
  let userDetail = await User.findById(req.params.id);
  if (!userDetail) {
    return res.status(400).json({ error: "user not found" });
  }
  res.send(userDetail);
};
