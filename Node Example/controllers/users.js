const AuthLogin = (req, res) => {
  try {
    console.log("post req", req?.body);
    const { body } = req;
    if (body?.email === "admin@gmail.com" && body?.password === "admin") {
      return res.send({
        message: "Successfully Login",
        success: true,
        user: body,
      });
    }
    return res.send({ message: "Invalid Email or Password", success: false });
  } catch (e) {
    console.log("e", e);
    return res.send({ message: e?.message, success: false });
  }
};
module.exports = {
  AuthLogin,
};
