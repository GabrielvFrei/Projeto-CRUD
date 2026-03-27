const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todoRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/todos", todoRoutes);
app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.json({ message: "API CRUD de Tarefas funcionando!" });
});

app.listen(PORT, () => {
    console.log(`íº€ Servidor rodando em http://localhost:${PORT}`);
});
