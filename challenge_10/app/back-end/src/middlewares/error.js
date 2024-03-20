const errorMessages = {
  404: 'Usuário não encontrado',
  400: 'Requisição inválida',
  401: 'Não autorizado',
  403: 'Acesso proibido',
};

const errorHandler = (error, req, res, next) => {
  if (error.response) {
    const { status } = error.response;
    const errorMessage = errorMessages[status] || 'Erro desconhecido';
    return res.status(status).json({ error: errorMessage });
  } else {
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = errorHandler;
