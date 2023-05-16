'use strict';

//ToDo: create a middleware

module.exports = (req, res, next) => {
  //if I want to know the path exists, I can use this
  if(req.params.helloQuery === 'helloQuery'){
    next();
  } else {
    next('invalid path');
  }
};
