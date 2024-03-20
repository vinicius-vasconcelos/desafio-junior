const route = require('express').Router();
const { getByUsername } = require('../controllers/user');

route.get('/:username', getByUsername);

module.exports = route;
