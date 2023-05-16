'use strict';

const first = (req, res, next) => {
  console.log('first middleware');
  //next is a function that will call the next middleware
  //if we don't call next, the request will hang
  //next ('feed it anything to cause an error')
  //next called with no arguments will go to the next middleware
  next();
};

module.exports = first;

