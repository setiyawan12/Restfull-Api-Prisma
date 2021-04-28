const express = require("express");
const welcomeRouter = express.Router();

welcomeRouter.get("/", (_, res) => {
  const resObject = {
    message: "Welcome to MikroBooks",
    status: 200,
    createdBy: "Yayang Setiyawan",
    // Documentation: "https://documenter.getpostman.com/view/9637572/Tz5m8KJz"
  }
  res.status(200).json(resObject);
});

module.exports = welcomeRouter;