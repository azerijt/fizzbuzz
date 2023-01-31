export default function fizzBuzz(n: number): string {
  let result = [];
  for (let i = 1; i <= Math.abs(n); i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  if (n < 0) {
    result = result.map((val) => {
      if (val === "Fizz" || val === "Buzz" || val === "FizzBuzz") {
        return val;
      } else {
        return `-${val}`;
      }
    });
  }

  return result.join(", ");
}




