const productsModal = require("../models/Products");

module.exports.cerate = async function (req, res) {
  const body = req.body;
  let user = {
    email: body.email,
    pass: body.name,
  };
  try {
    const data = await productsModal.findOne({ email: body.email }, { name: 1 });
    if (!data) {
      await productsModal.create({
        email: body.email,
        name: body.name,
      });
      console.log("created");
    } else {
      console.log(data);
    }
  } catch (err) {
console.log(err);
  }
  return res.send("success");
};

module.exports.delete = async function (req, res) {
  try {
    const body = req.body;
    const data = await productsModal.deleteOne({ email: body.email });
    console.log(data);
    console.log("deleted");
  } catch {}
  return res.send("success");
};

module.exports.update = async function (req, res) {
  try {
    const body = req.body;
    const data = await productsModal.findOne({ email: body.email });
    if (data) {
      data.name = "niketan";
      await data.save();
      console.log("updated");
    }
  } catch {}
  return res.send("success");
};
