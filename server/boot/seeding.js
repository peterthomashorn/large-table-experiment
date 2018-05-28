'use strict';

var path = require('path');
var app = require(path.resolve(__dirname, '../server'));
var faker = require('faker');

module.exports = function generateAddresses() {
  for (var index = 0; index < 1000; index++) {
    var address = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      street: faker.address.streetName(),
      number: faker.random.number({min: 1, max: 400}),
      postalcode: faker.address.zipCode(),
      city: faker.address.city(),
      country: faker.address.country()
    };

    app.models.Address.create(address, function (err, model) {
      if (err) throw err;
    });
  }
};
