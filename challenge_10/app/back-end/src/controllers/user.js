const { fetchWithOctokit } = require("../helpers/fetchOctokit");


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
