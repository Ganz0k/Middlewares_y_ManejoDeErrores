const { AppError } = require("../utils/appError");

const tasks = [];

const getTasks = (req, res) => {
    res.status(200).json(tasks);
};

const addTask = (req, res) => {
    const { nombre, email } = req.body;

    if (!nombre || !email) {
        throw new AppError("Faltan campos obligatorios", 500);
    }

    const expresionRegular = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!expresionRegular.test(email)) {
        throw new AppError("Correo inválido", 500);
    }

    const task = { nombre: nombre, email: email };

    tasks.push(task);
    res.status(200).json(task);
};

const deleteTask = (req, res) => {
    const index = req.params.index;
    console.log(index);
    
    if (index >= 0 && index < tasks.length) {
        const deletedTask = tasks.splice(index, 1);
        res.status(200).json(deletedTask);
    } else {
        throw new AppError("Tarea no econtrada", 404);
    }
};

module.exports = { getTasks, addTask, deleteTask };