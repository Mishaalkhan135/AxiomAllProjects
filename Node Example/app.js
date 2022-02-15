const express = require("express");
const cors = require("cors");
const { mongoose } = require("./config");
const app = express();
const { Users } = require("./models");
app.use(express.json());
app.use(cors());

console.log(Math.round(Math.random() * 100) + 1);
Users.findOneAndUpdate(
  { age: null },
  { age: Math.round(Math.random() * 100) + 1 }
)
  .then(() => console.log("success"))
  .catch((e) => console.log("e", e));

const PORT = 8080;
const db = mongoose.connection;

let address = {
  home: "7/15/gulistan",
  zipCode: 75100,
  city: "Karachi",
  province: "Sindh",
  country: "Pakistan",
};
Users.findOneAndUpdate({ age: 18 }, { address })
  .then(() => console.log("success"))
  .catch((e) => console.log("e", e));
db.on("error", (err) => {
  console.log("err", err);
});
db.on("open", async () => {
  console.log("Db Running!");
});

//Read Data And Dont Get Body
// app.get("/", (req, res) => {
//   try {
//     return res.send({ message: "Hello NodeJs", success: true });
//   } catch (e) {
//     return res.send({ message: e?.message, success: false });
//   }
// });
// //Create Data And Get Body
// app.post("/login", (req, res) => {
//   try {
//     console.log("post req", req?.body);
//     const { body } = req;
//     if (body?.email === "admin@gmail.com" && body?.password === "admin") {
//       return res.send({
//         message: "Successfully Login",
//         success: true,
//         user: body,
//       });
//     }
//     return res.send({ message: "Invalid Email or Password", success: false });
//   } catch (e) {
//     console.log("e", e);
//     return res.send({ message: e?.message, success: false });
//   }
// });
// //Update Data And Get Body
// app.put("/update", (req, res) => {
//   try {
//     console.log("put req", req?.body);
//     return res.send({ message: "Updated Successfully", success: true });
//   } catch (e) {
//     console.log("e", e);
//     return res.send({ message: e?.message, success: false });
//   }
// });
// //Delete Data And Get Body
// app.delete("/delete", (req, res) => {
//   try {
//     console.log("delete req", req?.body);
//     return res.send({ message: "Deleted Successfully", success: true });
//   } catch (e) {
//     console.log("e", e);
//     return res.send({ message: e?.message, success: false });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is runing on Port ${PORT}!`);
});

app.use("/auth", require("./routes"));

// let obj = {
//   message: "Hello Post",
//   success: true,
// };
// console.log("obj", obj);
// console.log("obj", JSON.stringify(obj));
