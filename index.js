const server = require('./api/server.js');

// const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on https://guarded-lake-21552.herokuapp.com/ ***\n`);
});
