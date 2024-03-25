const { fetchWithOctokit } = require("../helpers/fetchOctokit");

/**
 * Obtém dados de um usuário com base no nome de usuário.
 * @param {Object} req - O objeto de requisição express contendo os parâmetros da solicitação.
 * @param {Object} res - O objeto de resposta express para enviar a resposta da solicitação.
 * @param {Function} next - A próxima função de middleware na pilha.
 * @returns {Promise<void>} Uma promessa que é resolvida quando os dados do usuário são recuperados e enviados como resposta ou quando ocorre um erro e é passado para o próximo middleware.
 */
const getByUsername = async (req, res, next) => {
  const { username } = req.params;
  try {
    const data = await fetchWithOctokit(username);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { getByUsername }
