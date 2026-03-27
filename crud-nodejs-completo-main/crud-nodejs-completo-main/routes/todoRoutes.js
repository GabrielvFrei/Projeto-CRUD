const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Rotas da API de Tarefas

// GET /todos - Listar todas as tarefas
router.get('/', todoController.getTodos);

// GET /todos/:id - Buscar uma tarefa específica por ID
router.get('/:id', todoController.getTodoById);

// POST /todos - Criar uma nova tarefa
router.post('/', todoController.createTodo);

// PUT /todos/:id - Atualizar uma tarefa existente
router.put('/:id', todoController.updateTodo);

// DELETE /todos/:id - Deletar uma tarefa
router.delete('/:id', todoController.deleteTodo);

module.exports = router;