const express = require("express"),
	bodyParser = require("body-parser"),
	dotenv = require("dotenv").config(),
	appRouter = require("./src/routers/appRouter");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", appRouter);

app.listen(process.env.SERVER_PORT);

console.log(`App listening on ${process.env.SERVER_PORT}`);
