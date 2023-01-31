export default function fizzBuzz(n: number): string {
  let result = [];
  for (let i = 1; i <= Math.abs(n); i++) {
    let value: string;
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        value = "FizzBuzz";
        break;
      case i % 3 === 0:
        value = "Fizz";
        break;
      case i % 5 === 0:
        value = "Buzz";
        break;
      default:
        value = (n > 0 ? i : -i).toString();
    }
    result.push(value);
  }

  return result.join(", ");
}




