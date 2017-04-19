'use strict';

const assert = require('assert');
const callApply = require('../lib/call-apply.js');
let newCoffeeDrink = new callApply.CoffeeDrink('light', 'Argentina');
let newDog = new callApply.Dog('Fido', 'dauchsand', 'brown');
let newDogArray = newDog.updateBio([1, 2, 3]);

console.log('callApply.js: ', callApply);

describe('call-apply.js', function() {
  describe('CoffeeDrink', function() {
    it('should return an object', function() {
      console.log('typeof newCoffeeDrink: ', typeof newCoffeeDrink);
      console.log(newCoffeeDrink);
      assert.equal(typeof newCoffeeDrink, 'object');
    });
    it('should have a haveBeenBrewed property that is true', function() {
      assert.equal(newCoffeeDrink.haveBeenBrewed, true);
    });
  });
});

describe('call-apply.js', function() {
  describe('Dog', function() {
    it('should return an object', function() {
      console.log('typeof newDog: ', typeof newDog);
      console.log('newDog: ', newDog);
      assert.equal(typeof newDog, 'object');
    });
    it('should return an array', function() {
      assert.equal(Array.isArray(newDog.bio), true);
    });
  });
});
