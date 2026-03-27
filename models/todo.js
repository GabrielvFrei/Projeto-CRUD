const db = require('../config/database');

// Buscar todas as tarefas
const getAllTodos = (callback) => {
    db.query('SELECT * FROM todos ORDER BY created_at DESC', callback);
};

// Buscar tarefa por ID
const getTodoById = (id, callback) => {
    db.query('SELECT * FROM todos WHERE id = ?', [id], callback);
};

// Criar nova tarefa
const createTodo = (todo, callback) => {
    const { title, description, completed } = todo;
    db.query(
        'INSERT INTO todos (title, description, completed) VALUES (?, ?, ?)',
        [title, description, completed || false],
        callback
    );
};

// Atualizar tarefa
const updateTodo = (id, todo, callback) => {
    const { title, description, completed } = todo;
    db.query(
        'UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ?',
        [title, description, completed, id],
        callback
    );
};

// Deletar tarefa
const deleteTodo = (id, callback) => {
    db.query('DELETE FROM todos WHERE id = ?', [id], callback);
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};