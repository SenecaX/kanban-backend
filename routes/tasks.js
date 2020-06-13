const express = require("express");
const tasksController = require("../controllers/tasks");

//router initialization
const router = express.Router();

//crud
//create post
router.post("/createTask", tasksController.createTask);

//read get
router.get("/getTask/:id", tasksController.getTask);

//update patch
router.patch("/updateTask/:id", tasksController.updateTask);

//delete delete
router.delete("/deleteTask/:id", tasksController.deleteTask);

module.exports = router;
