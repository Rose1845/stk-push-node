const express = require("express");
const logger = require("morgan");
const mpesaRoutes = require("../../routes/mpesa.routes");

/**
 *
 * @param {{ app:express.Application }} param0
 */
module.exports = function ({ app }) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(logger("dev"));
  app.use("/mpesa", mpesaRoutes);
  app.all("*", (req, res, next) => {
    return res.sendStatus(405);
  });
  app.use((error, req, res, next) => {
    return res.status(500).json(error.message);
  });
  return app
};
