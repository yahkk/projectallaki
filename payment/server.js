require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const paymentRouter = require("./routes/paymentRoutes");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/api/payment", paymentRouter);

app.use(errorHandler);

const port = process.env.PORT || 8082;
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
