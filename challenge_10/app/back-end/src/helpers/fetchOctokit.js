const { Octokit } = require('octokit');
require('dotenv').config();

/**
 * Obtém informações do usuário e seus repositórios do GitHub usando Octokit.
 * 
 * @param {string} username - O nome de usuário do GitHub para o qual obter informações.
 * @returns {Promise<{ login: string, name: string, bio: string, repositories: Repository[] }>} - Um objeto contendo as informações do usuário e uma matriz de seus repositórios.
 * @throws {object} - Um objeto de erro se houver algum problema durante a obtenção das informações.
 */
const fetchWithOctokit = async (username) => {
  try {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const { login, name, bio } = await getUserData(octokit, username);
    const repositoryArray = await getUserRepositories(octokit, username);
    return { login, name, bio, repositories: repositoryArray.map(mapRepositoryData) };
  } catch (error) {
    throw error;
  }
}

const getUserData = async (octokit, username) => {
  const response = await octokit.request('GET /users/{username}', { username });
  return response.data;
};

const getUserRepositories = async (octokit, username) => {
  const response = await octokit.paginate('GET /users/{username}/repos', { username, per_page: 100 });
  return response.data;
};

const mapRepositoryData = ({ name, description, language, stargazers_count: stars }) => ({
  name,
  description,
  language,
  stars,
});

module.exports = {
  fetchWithOctokit,
};
