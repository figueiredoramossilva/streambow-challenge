# STREAMBOW CHALLENGE

Code written in javascript (Node.js)

### Challenge

```
A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.
For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).
Write a function:

  class Solution { public int solution(int N); }

that, given a positive integer N, returns the number of its factors.

For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.

Write an efficient algorithm for the following assumptions:
  • N is an integer within the range [1..2,147,483,647].
```

For this challenge I worked from a 1st solution and optimized it into the final/third solution.
Tested for 24, 5040 and 2100000000

### Running the code

Before running the code make sure you're in this directory.

To run the code:

```
node countFactors.js <NUMBER>
```

To run earlier solutions:

```
node solution1.js <NUMBER>
node solution2.js <NUMBER>
```

### Comments

If this function was called multiple times we could use memoization to prevent the value to be calculated more than once.
