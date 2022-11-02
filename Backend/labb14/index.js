const  {PORT} = require('./config');
const fs = require('fs');
const path = require('path');

const server = require('http').createServer((req,res) => {
    
  let fileName = '';
    switch(req.url){
      case '/':
      case '/pages/index.html':
        fileName = 'index.html';
        res.statusCode = 200;
        break;
      case '/pages/about.html':
      case '/about':
        fileName = 'about.html';
        res.statusCode = 200;
        break;
      default:
        fileName = '404.html';
        res.statusCode = 404;
    }

    fs.readFile( path.join(__dirname, 'pages', fileName), (err, data) => {
        if (err){
          console.log(err);
          res.end();
        }
        res.end(data);
      })
});

server.listen( PORT , () => console.log(`server running on localhost:${PORT} `));