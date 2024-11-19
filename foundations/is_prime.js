const isPrime = (number) => {
  if (number <= 1) return false;
  let rangeEnd = Math.ceil(Math.sqrt(number));

  for (let rangeStart = 2; rangeStart < rangeEnd; rangeStart++) {
    if (number % rangeStart === 0) return false;
  }
  return true;
};

let thisisNotPrime1 = 63;
let thisisNotPrime2 = 64;
let thisisPrime = 61;

console.log(isPrime(thisisPrime));
