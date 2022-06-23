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

// const algorithm = "aes-256-cbc";
// const key = process.env.SECRET;
// const iv = crypto.randomBytes(16);

// // const cipher = crypto.createCipheriv(algorithm, key, iv);

// const base64 = Buffer.from(iv, 'binary').toString('base64');
// const base32 = Buffer.from(iv, 'binary').toString('base32');
// userSchema.plugin(encrypt, { encryptionKey: base64, signingKey: base32, encryptedFields: ['password'] });


module.exports = mongoose.model("userSchema", userSchema);
