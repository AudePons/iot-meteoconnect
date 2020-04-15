require("dotenv").config();
const express = require("express");
const app = express();
const apiRouter = require("./api/api.router");

const { insertDevicesData } = require("./config/fill.database");
insertDevicesData();
setInterval(insertDevicesData, 60*1000);

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/api/", apiRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on port: ", process.env.APP_PORT);
});
