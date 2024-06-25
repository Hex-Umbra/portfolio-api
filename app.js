const express = require("express");
const app = express();
const mongoose = require("mongoose");
const contactRouter = require("./routes/contactRoutes.js");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Plus de larmes dans le corps\n Plus de larmes dans la machine");
});
app.use(express.json())
app.use(contactRouter)

// PORT //
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_DB_LINK)
  .then(() => {
    console.log("Connecting to the DB");
    app.listen(PORT, () => console.log(`Listening here http://localhost:${PORT}`));
  })
  .catch((err) => console.log(err));
  

