const {Given, When, Then} = require("@cucumber/cucumber");
const rover = require('../../src/rover')
const {equal, deepEqual} = require("node:assert");

Given('the rover is facing {word}', function (orientation) {
  rover.orientation = orientation
});

Given('it is at {int},{int}', function (x, y) {
  rover.position = {x, y}
});

When('it receives {string}', function (instruction) {
  rover.handleInstruction(instruction)
});

Then('the rover should be facing {word}', function (expectedOrientation) {
  equal(rover.orientation, expectedOrientation)
});

Then('it should be at {int},{int}', function (x, y) {
  deepEqual(rover.position, {x, y})
});
