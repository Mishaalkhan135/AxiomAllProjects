const bcrypt = require("bcryptjs");
const { Users } = require("../models");

const salt = bcrypt.genSaltSync(10);

const AuthLogin = (req, res) => {
  try {
    console.log("post req", req?.body);
    const { body } = req;
    if (!body?.email || !body?.password) {
      return res.send({ success: false, message: "Please fill all values" });
    }

    Users.findOne({ email: body?.email }, async (err, response) => {
      if (err || !response) {
        return res.send({
          message: "Invalid Email or Password",
          success: false,
        });
      }
      let isAuthenticated = bcrypt.compareSync(
        body?.password,
        response?.password
      );
      if (isAuthenticated) {
        let user = await Users.findById(response?.id, { __v: 0, password: 0 });
        return res.send({
          message: "Successfully Login",
          success: true,
          user,
        });
      }

      return res.send({
        message: "Invalid Email or Password",
        success: false,
      });
    });

    // if (body?.email === "admin@gmail.com" && body?.password === "admin") {
    //   return res.send({
    //     message: "Successfully Login",
    //     success: true,
    //     user: body,
    //   });
    // }
    // return res.send({ message: "Invalid Email or Password", success: false });
  } catch (e) {
    console.log("e", e);
    return res.send({ message: e?.message, success: false });
  }
};
const Register = (req, res) => {
  try {
    const { body } = req;
    if (!body?.email || !body?.userName || !body?.password) {
      return res.send({ success: false, message: "Please fill all values" });
    }
    body.password = bcrypt.hashSync(body?.password, salt);
    let user = new Users(body);
    user
      .save()
      .then(() => {
        return res.send({ success: true });
      })
      .catch((e) => {
        console.log("e", e);
        return res.send({ success: false, message: e?.message });
      });
  } catch (e) {}
};

module.exports = {
  AuthLogin,
  Register,
};
