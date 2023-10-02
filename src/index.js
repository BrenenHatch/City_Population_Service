const server = require('./server');

const port = process.env.PORT || 5555;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});