import Task from "../models/Task.js";
import express from "express";
import {
  fetchTasks,
  getTaskById,
  addTask,
  deleteTask,
  updateTask,
  //updateAllTask,
} from "../controllers/task.js";

const router = express.Router();

//ENPOINTS -- ROUTES

router.get("/", fetchTasks);

router.get("/:id", getTaskById);

router.post("/", addTask);

router.patch("/:id", updateTask);

//router.put("/:id", updateAllTask);

router.delete("/:id", deleteTask);

export default router;
