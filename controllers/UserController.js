const userModel = require("../models/User");

module.exports.cerate = async function (req, res) {
  const body = req.body;
  let user = {
    email: body.email,
    pass: body.name,
  };
  try {
    const data = await userModel.findOne({ email: body.email }, { name: 1 });
    if (!data) {
      await userModel.create({
        email: body.email,
        name: body.name,
      });
      console.log("created");
    } else {
      console.log(data);
    }
  } catch {}
  return res.send("success");
};

module.exports.delete = async function (req, res) {
  try {
    const body = req.body;
    const data = await userModel.deleteOne({ email: body.email });
    console.log(data);
    console.log("deleted");
  } catch {}
  return res.send("success");
};

module.exports.update = async function (req, res) {
  try {
    const body = req.body;
    ``;
    const data = await userModel.findOne({ email: body.email });
    if (data) {
      data.name = body.name;
      await data.save();
      console.log("updated");
    }
  } catch {}
  return res.send("success");
};

module.exports.addCart = async function (req, res) {
  try {
    const body = req.body;

    let user = await userModel.findOne({ email: body.email }, { cart: 1 });

    if (user) {
      user.cart.push({ name: body.name });
      await user.save();
    } else {
      console.log("user not found for email :", req.body.email);
    }
  } catch (err) {
    console.log(err);
  }
  return res.status(200).send("success");
};
module.exports.remove = async function (req, res) {
  try {
    const body = req.body;

    let user = await userModel.findOne({ email: body.email }, { cart: 1 });

    if (user) {
      user.cart = user.cart.filter((e) => {
        return e.name != body.name;
      });
      await user.save();
      console.log("removed");
    } else {
      console.log("user not found for email :", req.body.email);
    }
  } catch (err) {
    console.log(err);
  }
  return res.status(200).send("success");
};

module.exports.log_in = async function (req, res) {
  try {
    let body = req.body;
    let user = await userModel.findOne(
      { email: body.email, name: body.name },
      { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 }
    );
    if (user) {
      res.status(200).send({
        message: "success",
        user,
      });
    } else {
      res.status(400).send({
        message: "User Not Found",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "success",
    });
  }
};
