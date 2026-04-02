//@ts-check
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

const {
  getConsoleSink,
  getLogger,
  configureSync,
} = require("@logtape/logtape");
const { prettyFormatter } = require("@logtape/pretty");
const usersController = require("./controllers/userControllers");

configureSync({
  sinks: { console: getConsoleSink({ formatter: prettyFormatter }) },
  loggers: [{ category: "hoots", lowestLevel: "debug", sinks: ["console"] }],
});

const logger = getLogger(["hoots", "server"]);

mongoose.set("debug", true);
if (!process.env.MONGODB_URI) {
  throw new Error("missing MONGODB_URI");
}
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  // console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  logger.info`Connected to MongoDB ${mongoose.connection.name}.`;
});

app.use(morgan("dev"));
app.use(express.json());

// Routes go here
app.use("/api/users", usersController);

app.listen(3000, () => {
  console.log("The express app is ready!");
});
