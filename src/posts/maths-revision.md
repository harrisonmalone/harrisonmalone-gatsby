---
title: "Maths Revision"
---

I spent a bunch of time today completing some [Code Wars](https://www.codewars.com/) challenges. I realized I need to revise some maths. I also realized that I need to practice solving algorithm type questions far more frequently.

I'll take you through a couple of the questions with some code snippets.

The [first challenge](https://www.codewars.com/kata/55b080eabb080cd6f8000035) involved taking in a string input and returning an array of characters that appear in the string an odd number of times. Seems simple enough (and it is) however the challenge would time out if the code wasn't optimized for time complicity. That's what kept happening to my implementation. It passed all of the tests but continuously timed out.   

I was using a complicated loop where I'd check if it was the `lastIndex` and if it wasn't I'd accumulate an object of total letters in the string.

It would come up something like this:

```js
{
  a: 2,
  W: 3
}
```

I'd then push the individual characters into my result array if they passed a simple modulo.

Time out after time out and I was pulling my hair out.

What I wasn't thinking of was using a `Set`. I guess I haven't had a real need to reach for sets but they're a perfect data structure for this question.

The answer I liked was this:

```js
const oddOneOut = (str) => {
  let chars = new Set()
  for (let c of str) {
    if (chars.has(c)) {
      chars.delete(c)
    }
    else {
      chars.add(c);
    }
  }
  return Array.from(chars)
}
```

We take in the string as an argument, make a new set, loop through our string characters and then check if the set has the particular character in it. We basically toggle between even and odd states where the even state will delete the character from the set. Finally we return an array instead of a set.

The [second challenge](https://www.codewars.com/kata/56d904db9963e9cf5000037d/javascript) was more of a brain teaser than a real code problem.

You received multiple test cases and needed to figure out what code would pass the tests.

Here's some of the cases you were given:

```js
testit(0,1)
// => 1
testit(1,2)
// => 3
testit(1,1)
// => 1
testit(1,3)
// => 3
```

See any patterns? I tried a bunch of maths operators but couldn't spot what I needed.

Turns out it was the bitwise OR:

```js
const testit = (a, b) => {
  return a | b
}
```

If we pass 10 and 20 as arguments the numbers are converted to binary (1010 and 10100) where we perform an OR

```txt
10100
01010
---
11110
---
```

and then we turn the binary back to the decimal 30.

```js
parseInt("11110", 2)
```

Super simple code but a good challenge.

I was humbled by the code I tried to write today!