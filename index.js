const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
const port = 4000;

mongoose.connect("mongodb://127.0.0.1/web64-final-test");

const orderModel = require("./models/order.schema");
const inventoryModel = require("./models/inventory.schema");
const userModel = require("./models/user.schema");
const validateToken = require("./middlewares/validateToken");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

//2 + 3
app.get("/inventory", async (req, res) => {
  try {
    //const result = await inventoryModel.find()
    const result = await inventoryModel.find({ instock: { $lt: 100 } });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

//4
app.post("/login", async (req, res) => {
  try {
    const findUser = await userModel.findOne({
      username: `${req.body.username}`,
      password: `${req.body.password}`,
    });
    if (findUser) {
      const token = jwt.sign(
        { username: `${findUser.username}`, id: `${findUser._id}` },
        "secret_code"
      );
      findUser.token = token;
      findUser.save();
      res.send({ findUser: findUser, token: token });
    }
  } catch (error) {
    console.log(error);
  }
});

//5
app.get("/resource", validateToken, async (req, res) => {
  try {
    const result = await orderModel.find();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

//6
app.get("/getorder/:id", async (req, res) => {
  try {
    const result = await orderModel.findById(Number(req.params.id));
    res.send(result);
  } catch (error) {
    console.log();
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
