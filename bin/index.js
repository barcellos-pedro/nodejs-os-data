#! /usr/bin/env node

const getData = require("../app");

getData().catch(console.error);
