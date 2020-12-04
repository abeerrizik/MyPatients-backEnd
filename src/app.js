const express = require("express");
const controllers = require("./controllers");

const cookieParser = require("cookie-parser");
const cors = require("cors");
//set app
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    preflightContinue: false,
  })
);

app.use(express.urlencoded({ extended: false }));

app.set("port", process.env.PORT || 4000);

//middleware

//set API routes
app.use(express.json());
app.use(cookieParser());
app.use(controllers);

module.exports = app;
