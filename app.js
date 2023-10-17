const express = require("express");
const app = express();
require("dotenv").config({ path: "./variables.env" });
const tasksRoutes = require("./routes/tasksRoutes");
const morgan = require("morgan");
const { AppError, globalErrorHandler } = require("./utils/appError");

// Middleware para analizar datos JSON en el cuerpo de las solicitudes
app.use(express.json());

// Middleware para configurar el registro de solicitudes HTTP
app.use(morgan("combined"));

app.use("/api/tasks", tasksRoutes);

app.all("*", (req, res, next) => {
    const error =  new AppError("La ruta no se ha encontrado o ha cambiado", 300);
    next(error);
});

app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`);
});