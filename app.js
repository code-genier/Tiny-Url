require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("./models/userSchema.js");
// const shortUrl = require("./models/shortUrl");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://aayush1607:aayush1607@cluster0.ayeiopt.mongodb.net/userUrldb", {
  useNewUrlParser: true,
});

app.get("/", (req, res) => {
  res.render("home");
}); 

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

// app.post("/register", async (req, res) => {
//   userSchema.findOne({ email: req.body.useremail }, (e, foundUser) => {
//     if (e) {
//       console.log(e);
//     } else {
//       if (foundUser) {
//         res.render("areg");
//       }
//     }
//   });

//   await userSchema.create({
//     username: req.body.username,
//     email: req.body.useremail,
//     password: req.body.password,
//   });

//   userSchema.findOne({ email: req.body.useremail }, (e, foundUser) => {
//     if (e) {
//       console.log(e);
//     } else {
//       if (foundUser) {
//         if (foundUser.password === req.body.password) {
//           res.render("secrets", {
//             id: foundUser._id,
//             name: req.body.username,
//             userdata: foundUser.datas,
//           });
//         } else {
//           res.render("opps");
//         }
//       } else {
//         res.render("opps");
//       }
//     }
//   });
// });

// app.post("/login", async (req, res) => {
//   const userEmail = req.body.useremail;
//   const userPassword = req.body.password;

//   userSchema.findOne({ email: userEmail }, (e, foundUser) => {
//     if (e) {
//       console.log(e);
//     } else {
//       if (foundUser) {
//         // console.log(foundUser);
//         if (foundUser.password === userPassword) {
//           res.render("secrets", {
//             id: foundUser._id,
//             name: foundUser.username,
//             userdata: foundUser.datas,
//           });
//         }
//         else{
//           res.render('opps');
//         }
//       }
//       else{
//         res.render('opps');
//       }
//     }
//   });
// });

// app.post("/shortUrl", async (req, res) => {
//   const id = req.body.id;
//   //   console.log(id);
//   await userSchema.updateOne(
//     { _id: id },
//     { $push: { datas: { full: req.body.fullUrl } } }
//   );

//   userSchema.findOne({ _id: id }, (e, foundUser) => {
//     if (e) {
//       console.log(e);
//     } else {
//       if (foundUser) {
//         res.render("secrets", {
//           id: foundUser._id,
//           name: foundUser.username,
//           userdata: foundUser.datas,
//         });
//       }
//     }
//   });
// });

// app.post("/delete", async (req, res) => {
//   const deleteItem = req.body.deleteItem;
//   const userid = req.body.userid;
//   //   console.log(deleteItem);

//   await userSchema.updateOne(
//     { _id: userid },
//     { $pull: { datas: { _id: deleteItem } } }
//   );

//   userSchema.findOne({ _id: userid }, (e, foundUser) => {
//     if (e) {
//       console.log(e);
//     } else {
//       if (foundUser) {
//         //   console.log(userid);
//         // console.log(foundUser);
//         res.render("secrets", {
//           id: foundUser._id,
//           name: foundUser.username,
//           userdata: foundUser.datas,
//         });
//       }
//     }
//   });

//   //   console.log(userid);
//   //   console.log(deleteItem);
// });

// app.get("/:shortUrl", async (req, res) => {
//   const need = req.params.shortUrl;
//   var partsArray = need.split("?");

//   const id = partsArray[0];
//   const needUrl = partsArray[1];
//   let url;

//   const needUser = await userSchema.findOne({
//     _id: id,
//   });
//   if (needUser == null) {
//     console.log("not");
//     return res.render("opps");
//   }
//   await needUser.datas.forEach((itr) => {
//     if (itr.shorts === needUrl) {
//       url = itr.full;
//       itr.clicks++;
//       needUser.save();
//     }
//   });

//   res.redirect(url);
// });


let port = process.env.PORT;
if(port == null || port == ""){
  port = 1234;
}
app.listen(port);
