const PORT = 5000;

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const movieroutes = require("./routes/movies");

app.use(express.json());

app.use(movieroutes);

mongoose.connect("mongodb://localhost:27017/cinema-solo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
