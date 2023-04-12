const settings = require("../app/settings/index");
const express = require("express");

module.exports = settings({ app: express() });
