require("dotenv").config();
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
const shortId = require("shortid");
const crypto = require("crypto");
shortId.generate();

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  datas: [
    {
      full: {
        type: String,
        required: true,
      },
      short: {
        type: String,
        required: true,
        default: shortId.generate,
      },
      clicks: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  ],
});


// userSchema.plugin(encrypt, { secrets: process.env.SECRET, encryptedFields: ['password'] });


module.exports = mongoose.model("userSchema", userSchema);
