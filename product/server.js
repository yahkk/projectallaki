require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productRouter = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/api/products", productRouter);

app.use(errorHandler);

const port = process.env.PORT || 8080;
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
