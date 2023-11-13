const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const financialDataRoute = require('./routes/financialDataRoute');


const app = express();

//app middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
//app middlewares

//app routers
app.use("/api", financialDataRoute);
app.get("/", (req, res)=>{
  res.send("I am on")
})

const PORT = process.env.PORT || 4000;
mongoose
  .connect(
    "mongodb+srv://sazzadmahmud16301091:sazzadmahmud16301091@cluster0.3btvx.mongodb.net/test-db?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });