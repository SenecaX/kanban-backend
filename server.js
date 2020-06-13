const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");
const mongoose = require("mongoose");

app.use(express.json());

app.use("/api/tasks", tasksRoutes);

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

//db connection
mongoose
  .connect(
    "mongodb+srv://admin:admin@kanban-qb1vl.mongodb.net/kanban?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("http://localhost:5000");
    });
  })
  .catch(err => {
    console.log(err);
  });
