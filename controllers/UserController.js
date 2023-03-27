const userModel = require("../models/User");
const crypto = require("crypto");

const algorithm = "aes-256-cbc";
// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);
// secret key generate 32 bytes of random data
const SecurityKey = crypto.randomBytes(32);
// the cipher function
const cipher = crypto.createCipheriv(algorithm, SecurityKey, initVector);

module.exports.cerate = async function (req, res) {
  const body = req.body;
  let user = {
    email: body.email,
    pass: body.name,
  };
  // console.log(body);
  try {
    // const data = await userModel.findOne({ email: body.email });
    console.log(user);

    if (user) {
      let encryptedData = cipher.update(body.password, "utf-8", "hex");
      encryptedData += cipher.final("hex");
      console.log("Encrypted message: " + encryptedData);
      // await userModel.create({
      //   email: body.email.toLowerCase(), // sanitize: convert email to lowercase
      //   name: body.name,
      //   password: encryptedPassword,
      // });

      // // Create token
      // const token = jwt.sign({ user_id: user._id, email }, "niku", {
      //   expiresIn: "2h",
      // });
      // // save user token
      // user.token = token;

      // return new user
      console.log("created");
      return res.status(201).json(user);
    } else {
      console.log(data);
      return res.send("success");
    }
  } catch {
    return res.send("success");
  }
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
