---
title: "Power of Three"
date: "2020-02-08"
---

I attacked another nice little [Code Wars](https://www.codewars.com) challenge a couple of days ago. This one I had less trouble solving than what I saw in the previous post but had an interesting alternative answer at the end.

This is [the challenge](https://www.codewars.com/kata/55fd2d567d94ac3bc9000064) and I'll explain the basic setup.

You're given a triangle of consecutive odd numbers

```
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```

and you need calculate the sum of the given row index. So given the index 3 as an argument you'd need to perform this calculation 

```
7 + 9 + 11 = 27
```

and return 27 out of the function.

Generally when I'm attacking these types of challenges I'll write out some pseudo-code. This is what I jotted down: 

```js
rowSumOddNumbers(3)
// => 27

// make this data structure
// [[1], [3,5], [7,9,11]]
// the maximum length of the array must be 3
// we need to increment odd numbers only
// we need to check the length of the arrays that we create, if they're === to a counter that we set we need to create a new array and append numbers into that new array
```

I managed to get this done with a `while` loop and some counters. The data structure I mentioned above in my pseudo-code was specifically what I was striving for.

```js
const rowSumOddNumbers = (n) => {
  const data = []
  let innerArr = []
  let count = 1
  let len = 1
  while (data.length < n) {
    innerArr.push(count)
    count += 2
    if (innerArr.length === len) {
      data.push(innerArr)
      len += 1
      innerArr = []
    }
  }
  return data[n - 1].reduce((acc, cv) => acc += cv) 
}
```

Up front I define some variables; my array that I'll return and the inner arrays contained within it. I also define a `count` variable which will increment odd numbers (starting at 1) and a `len` variable that will simply keep track of the shape of my triangle.

The while loop starts and my condition is for it to keep running until my return array is the same length as `n`.

I'll push the count value into the first `innerArr` before incrementing the count by 2 so it goes from 1 to 3. 

I perform a conditional statement where I'm checking to see if the `innerArr` length is equal to the `len` variable which tracks the shape of my triangle. This returns true the first iteration of the whole loop but will be false the next time the while loop goes around. 

In the first loop with push `[1]` into the data array. We then increment our `len` variable by only 1 as the next row of the triangle needs to be 2 and reassign the `innerArr` to be an empty array.

This logic will create my pseudo-code data structure and then with a simple `[n - 1]` we pass in the correct index to access the values we need to sum. I use `.reduce` to do the summing and return that single number value.

There's lots going on here and it took me some time to write the code.

But step back for a second and look at the question again.

Here's the sum of return values that apply to the first 5 rows of the triangle.

```
1 8 27 64 125
```

Notice any patterns? It's as simple as: 

```js
n ** 3
```

Damn that would have saved me a bunch of time and code!

My lesson is to always look for patterns in these types of logic questions. There's bound to be some math that is applicable. 