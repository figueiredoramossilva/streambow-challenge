/*
  This solution iterates over n - 2 numbers.

  1 and n are always factors of n so there's no need to iterate them.

  Can be improved by cutting the amount of numbers to iterate.
*/
const solution1 = (n) => {
  // 1 and n itself are always factors so we start at 2
  let numberOfFactors = 2

  // iterate over every number between 1 and n
  for (let number = 2; number < n; number++) {
    if (n % number === 0) {
      numberOfFactors++
    }
  }

  return numberOfFactors
}

// timing and calling the 1st solution
console.time('solution1')
console.log(solution1(process.argv.slice(2)[0]))
console.timeEnd('solution1')