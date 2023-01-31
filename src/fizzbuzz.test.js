"use strict";
exports.__esModule = true;
var fizzbuzz_1 = require("./fizzbuzz");
describe("fizzbuzz", function () {
    it("returns the correct output for n = 15", function () {
        expect((0, fizzbuzz_1["default"])(15)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");
    });
});
