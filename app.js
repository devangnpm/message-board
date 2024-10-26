const express = require("express");
const messageRouter = require("./routes/messageRouter.js");
const path = require("path");


const app = express();

app.use(express.urlencoded({ extended: true }));

// Set view engine to EJS (if using EJS)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", messageRouter);

app.listen(3001);