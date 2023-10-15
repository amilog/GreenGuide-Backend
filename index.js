const express = require("express");
const app = express();
const db = require("./config/db");
const checkRouter = require("./routes/checkRoutes");
const userRouter = require("./routes/userRoutes");
const controller = require("./controllers/controller");
const cors = require("cors");
const port = 8000;

app.use(cors());
app.use(express.json());

db.connect();

app.get("/api/greenguide/", controller.start);
app.use("/api/greenguide/users", userRouter);
app.use("/api/greenguide/check", checkRouter);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:8000`);
  });