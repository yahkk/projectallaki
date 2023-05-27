require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const orderRouter = require("./routes/orderRoutes");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

const connectDB = require("./db/connect");

app.use(express.json());
app.use(cors());

app.use("/api/orders", orderRouter);

app.use(errorHandler);

const port = process.env.PORT || 8081;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
