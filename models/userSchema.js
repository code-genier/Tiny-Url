require("dotenv").config();
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
const shortId = require("shortid");
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

var encKey = process.env.SOME_32BYTE_BASE64_STRING;
var sigKey = process.env.SOME_64BYTE_BASE64_STRING;
userSchema.plugin(encrypt, { secret : sigKey, encryptedFields: ['password'] });


module.exports = mongoose.model("userSchema", userSchema);
