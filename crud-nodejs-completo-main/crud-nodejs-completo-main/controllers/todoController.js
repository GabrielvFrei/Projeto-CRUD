const Todo = require('../models/todo');

// Buscar todas as tarefas
const getTodos = (req, res) => {
    Todo.getAllTodos((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Buscar tarefa por ID
const getTodoById = (req, res) => {
    const { id } = req.params;
    
    Todo.getTodoById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        res.json(results[0]);
    });
};

// Criar nova tarefa
const createTodo = (req, res) => {
    const { title, description, completed } = req.body;
    
    // Validação: título é obrigatório
    if (!title) {
        return res.status(400).json({ error: 'O título é obrigatório' });
    }
    
    Todo.createTodo({ title, description, completed }, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ 
            id: result.insertId,
            message: 'Tarefa criada com sucesso' 
        });
    });
};

// Atualizar tarefa
const updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    
    Todo.updateTodo(id, { title, description, completed }, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        res.json({ message: 'Tarefa atualizada com sucesso' });
    });
};

// Deletar tarefa
const deleteTodo = (req, res) => {
    const { id } = req.params;
    
    Todo.deleteTodo(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        res.json({ message: 'Tarefa deletada com sucesso' });
    });
};

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};