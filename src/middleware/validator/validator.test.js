'use strict';

// this is one way to require the index.js file
const validator = require('.');
// const validator = require('./index');

describe('validator middleware', () => {
  let req = {};
  let res = {};
  //this mocks the next function
  let next = jest.fn(); // spy on next method
  test('throws an error if there is no name on the query string', () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith('invalid query');
  });
  test('moves to the next middleware if there is a name on the query string', () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
  }
  );
});


