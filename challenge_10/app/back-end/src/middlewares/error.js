const messageStatusMapping = {
  404: 'Usuário não encontrado',
  400: 'Requisição inválida',
  401: 'Não autorizado',
  403: 'Acesso proibido',
};

/**
 * Middleware para lidar com erros.
 * Este middleware é responsável por capturar e lidar com erros durante o processamento da requisição.
 * @param {Error} error - O erro capturado durante o processamento da requisição.
 * @param {Object} req - O objeto de requisição express.
 * @param {Object} res - O objeto de resposta express.
 * @param {Function} next - A próxima função de middleware na pilha.
 * @returns {Object} Um objeto de resposta express com um status HTTP e uma mensagem de erro correspondente ao erro capturado.
 */
const errorHandler = (error, req, res, next) => {
  if (error.response) {
    const { status } = error.response;
    const errorMessage = messageStatusMapping[status] || 'Erro desconhecido';
    return res.status(status).json({ error: errorMessage });
  } else {
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = errorHandler;
