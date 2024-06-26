const express = require("express");
const app = express();
const mongoose = require("mongoose");
const contactRouter = require("./routes/contactRoutes.js");
const skillsRouter = require("./routes/skillsRoutes.js");
const languageRouter = require("./routes/languageRoutes.js")
require("dotenv").config();
const cors = require("cors")


app.get("/", (req, res) => {
  res.send("Plus de larmes dans le corps plus de larmes dans la machine");
});
app.use(cors())
app.use(express.json())
app.use(contactRouter)
app.use(skillsRouter)
app.use(languageRouter)


// PORT //
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_DB_LINK)
  .then(() => {
    console.log("Connecting to the DB");
    app.listen(PORT, () => console.log(`Listening here http://localhost:${PORT}`));
  })
  .catch((err) => console.log(err));
  

