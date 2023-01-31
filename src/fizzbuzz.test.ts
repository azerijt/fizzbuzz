import fizzbuzz from './fizzbuzz';

describe("fizzbuzz", () => {
  it("returns the correct output for n = 15", () => {
    expect(fizzbuzz(15)).toEqual(
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz"
    );
  });
});

describe("fizzbuzz", () => {
  it("returns the correct output for negative n = -5", () => {
    expect(fizzbuzz(-5)).toEqual(
      "-1, -2, Fizz, -4, Buzz"
    );
  });
});

fizzbuzz(-15)