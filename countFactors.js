/*
  This solution cuts the amount of iterations whenever a factor is found.
  For example:
    If 2 is a factor of n then there's no need to iterate any number between n/2 and n,
    then if 3 is a factor of n then we can apply the same principle and ignore any number between n/3 and n/2.
*/
const solution3 = (n) => {
  // 1 and n itself are always factors so we start at 2
  let numberOfFactors = 2

  // only need to iterate the first half of all possible numbers
  // because the smallest factor is 2 so the biggest factor is n/2
  // (excluding 1 and n)
  let max = n/2
  for (let number = 2; number < max; number++) {
    if (n % number === 0) {
      numberOfFactors+=2
      max = n/number
    }
  }

  return numberOfFactors
}

// timing and calling the 3rd solution
console.time('solution3')
console.log(solution3(process.argv.slice(2)[0]))
console.timeEnd('solution3')