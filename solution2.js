/*
  This solution only iterates over n/2 - 1 numbers.

  Cuts the number of max iterations to n/2 - 1
  because the smallest factor is 2 so the biggest factor is n/2.

  Can be improved by cutting conditionally the amount of numbers to iterate.
*/
const solution2 = (n) => {
  // 1 and n itself are always factors so we start at 2
  let numberOfFactors = 2

  // only need to iterate the first half of all possible numbers
  // (excluding 1)
  const max = n/2
  for (let number = 2; number <= max; number++) {
    if (n % number === 0) {
      numberOfFactors++
    }
  }

  return numberOfFactors
}

// timing and calling the 2nd solution
console.time('solution2')
console.log(solution2(process.argv.slice(2)[0]))
console.timeEnd('solution2')