'use strict';

module.exports = exports = {};

exports.CoffeeBeans = function(roast, beanSource) {
  this.roast = roast;
  this.beanSource = beanSource;
};

exports.CoffeeDrink = function(roast, beanSource) {
  exports.CoffeeBeans.call(this, roast, beanSource);
  this.haveBeenBrewed = true;
};

exports.Dog = function() {
  this.bio = [];
  this.updateBio = function() {
    Array.prototype.push.apply(this.bio, arguments);
  };
};
