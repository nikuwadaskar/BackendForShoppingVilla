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
    const data = await userModel.findOne({ email: body.email });
    if (data) {
      data.name = "niketan";
      await data.save();
      console.log("updated");
    }
  } catch {}
  return res.send("success");
};
