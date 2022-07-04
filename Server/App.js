const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const adminsRouter = require("./Routes/admins");
const usersRouter = require("./Routes/users");

// Initializing express application
const app = express();

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("couldn't connect to data base because   ", err));

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

app.use('/',usersRouter)
app.use('/admin',adminsRouter);


const port = process.env.PORT;

const server = app.listen(port, () =>
  console.log(`Server is running on PORT ${port}`)
);
