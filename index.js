const express = require("express");
const indexRouter = require("./routes/index");
const path = require("path");

const app = express();

app.use(express.json());

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});