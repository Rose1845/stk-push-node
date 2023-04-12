const { mpesaConfig } = require("../config");
const express = require("express");
const axios = require("axios");
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns
 */
module.exports = async function (req, res, next) {
  try {
    const { authHeader } = mpesaConfig;

    const url =
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    const response = await axios.get(url, {
      headers: {
        Authorization: authHeader,
      },
    });
    console.log(response.data);
    req.mpesa = response.data;
    return next();
  } catch (error) {
    return next(error);
  }
};
