require("dotenv").config({ path: `${process.cwd()}/.env` });
const { verify } = require("jsonwebtoken");
const refreshToken = require("../token/refreshToken");

const validateToken = (req, res, next) => {
  try {
    // retrieve jwt from cookie
    let token = req.cookies.jwt;

    // if token doesn't exist throw error
    if (token === undefined) throw new Error("Jwt doesn't exist");

    // otherwise check if token expired
    verify(token, process.env.ACCESS_TOKEN_SECRET, async (error, user) => {
      if (error) {
        // if token has expired, call refresh token api to get new
        // no cookies in this api call,
        await refreshToken();
        next();
      } else {
        req.user = user;
        next();
      }
    });
  } catch (error) {
    res.status(403).json({
      fail: true,
      error: error.message,
    });
  }
};

validateToken.unless = require("express-unless");

module.exports = validateToken;
