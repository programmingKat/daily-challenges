const solution = () => {
  let express = require('express');
  let app = express(); 
  app.listen(process.env.PORT, process.env.HOST, () => console.log('yay'))

};