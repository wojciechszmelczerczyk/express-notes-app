require("dotenv").config();
const User = require("../models/User.js");
const createToken = require("../token/createToken.js");
const { verify } = require("jsonwebtoken");

const register = async (req, res) => {
  let { email, password, refreshToken = "" } = req.body;
  let errors;
  try {
    // create new user
    const newUser = await User.create({ email, password, refreshToken });
    // return new user
    res.json(newUser);
  } catch (err) {
    errors = err.message.split(", ");
    // return register errors
    res.status(400).json({ errors });
  }
};

const authenticate = async (req, res) => {
  const { email, password } = req.body;
  try {
    // compare input data and data from database
    const user = await User.login(email, password);

    // create refresh token
    const refreshToken = createToken(
      user._id,
      process.env.REFRESH_TOKEN_SECRET,
      process.env.REFRESH_TOKEN_EXP
    );

    // create access token
    const accessToken = createToken(
      user._id,
      process.env.ACCESS_TOKEN_SECRET,
      process.env.ACCESS_TOKEN_EXP
    );

    // update jwt in database with new refresh token
    await User.findOneAndUpdate({ email }, { refreshToken });

    // populate cookie with jwt
    res.status(201).json({ accessToken, refreshToken });

    // return jwt
  } catch (err) {
    res.status(400).json({ error: err.message });
    return err;
  }
};

const refreshToken = async (req, res) => {
  try {
    const authHeader = req.headers.rt;

    const rt = authHeader && authHeader.split(" ")[1];

    if (rt === undefined) return res.json("rt doesn't exist");

    const { id } = verify(rt, process.env.REFRESH_TOKEN_SECRET);

    let jwt = createToken(
      id,
      process.env.ACCESS_TOKEN_SECRET,
      process.env.ACCESS_TOKEN_EXP
    );

    res.json({ accessToken: jwt, rt });
  } catch (err) {
    res.json({
      fail: true,
      err: err.message,
    });
  }
};

const logout = async (req, res) => {
  const id = req.user.id;

  // reset cookie

  // invalidate RT in db
  await User.findOneAndUpdate({ _id: id }, { refreshToken: "" });

  res.status(200).json({ rtInvalidate: "rt deleted" });
};

const getCurrentUser = async (req, res) => {
  const id = req.user.id;

  const currentUser = await User.findOne({ _id: id });

  res.status(200).json(currentUser);
};

const updateUser = async (req, res) => {
  const { email } = req.body;

  const id = req.user.id;

  const updatedUser = await User.findOneAndUpdate({ _id: id }, { email });

  res.status(201).json({ updated_user: updatedUser });
};

module.exports = {
  register,
  authenticate,
  refreshToken,
  logout,
  getCurrentUser,
  updateUser,
};
