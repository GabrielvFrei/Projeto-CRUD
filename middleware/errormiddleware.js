// Middleware para tratamento de erros
const errorHandler = (err, req, res, next) => {
    // Log do erro no console para debug
    console.error('Erro:', err.stack);
    
    // Resposta para o cliente
    res.status(500).json({ 
        error: 'Algo deu errado!',
        message: err.message 
    });
};

module.exports = errorHandler;