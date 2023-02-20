---
slug: leetcode-drag-racing-in-janet
prefix: blog/
title: Leetcode Drag Racing in Janet
tags: [project, janet]
last_updated: 2023-02-20
---

# Leetcode Drag Racing in Janet

Every now and then you just need to compare a dozen almost-identical iterations of the solution to a basic toy programming problem to figure out what's faster or slower in your language of choice.

<!--truncate-->

- The Leetcode problem 
- Racing methodology 
	- `spork/test`'s `timeit` function 
	- Two tests: one that should return true and one that should return false
- My naive approach to solving this problem (`label` + `return`)
	- Explanation 
	- Advantages 
- Other approaches 
	- Use a variable 
		- Doesn't return early 
	- Use a `loop`
		- Not easy to reason about 
	- Use recursion 
		- A terrible idea in Janet!
		- Gradual optimization 
- Permutations 
	- Using `array/slice` to avoid redundant calculations 
		- Explanation 
		- Assessment 
			- Offset by the cost of calling `array/slice`! 
	- Using `zero?` vs `= 0` 
		- Explanation 
		- Assessment 
			- `zero?` is objectively slower by around a third (but sometimes the overall impact is closer to half!)
			- It is implemented in terms of `= 0` under the hood, but with a call to `compare` first 
- Table of results and Analysis 
	- My naive solution is actually pretty performant 
- Lessons learned 
	- Function calls are expensive in Janet 
		- Suspected reason for this: C instantiates a new object and allocates memory for every function call 
	- `= 0` is much more efficient than `zero?`
	- Recursion is not well-optimized in Janet 