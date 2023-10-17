const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/task")

// Ruta para obtener todas las tareas
router.get("/", tasksController.getTasks);

// Ruta para agregar una nueva tarea
router.post("/", tasksController.addTask);

// Ruta para eliminar una tarea por su índice
router.delete("/:index", tasksController.deleteTask);

module.exports = router;