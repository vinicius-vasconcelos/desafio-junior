const server = require('./app');
const PORT = process.env.PORT || 3003;

server.listen(PORT, () => console.log('Server running...'));