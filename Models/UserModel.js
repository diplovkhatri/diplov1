const mongoose = require("mongoose");
const uuid1 = require("uuidv1");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    hashed_password: {
      type: String,
      required: true
    },
    salt: String
  },
  { timestamps: true }
);
// virtual fields
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuid1();
    this.hashed_password = this.encryptPassword(this._password);
  })
  .get(function () {
    return this._password;
  });

// methods
userSchema.methods = {
  encryptPassword: function (password) {
    if (password == null) {
      return "";
    }
    try {
      return (this.hashed_password = crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex"));
    } catch {
      return "";
    }
  },
  authenticate: function (password) {
    return this.hashed_password === this.encryptPassword(password);
  }
};

module.exports = mongoose.model("User", userSchema);
