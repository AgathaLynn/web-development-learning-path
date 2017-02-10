# Progress Log
---
## Wednesday, 8 February 2017

**Today's Progress**:
* Worked through You-Dont-Know-JS Book 5, Chapter 1.
* Completed "Game of Fifteen" homework assignment from CS50 Week 3
* Solved "The Last Crusade" from CodinGame Classic Puzzles - Medium

**Thoughts**:
The CS50 assignment was fairly straightforward to implement - Manipulating *strings* in C still feels strange to me, but this assignment didn't involve too much of that. The YDKJS reading explains chunking and concurrency in a way that I *think* I can finally understand, and that kind of makes me want to go back and take another look at some of the FCC frontend projects that use APIs to get data.  

**Link(s) to work**:
The idea for (and format of) this log is taken from the [100 Days Of Code](https://github.com/Kallaway/100-days-of-code/blob/master/log.md) challenge. Other than that, nothing today.

## Thursday, 9 February 2017

**Today's Progress**:
* Worked through You-Dont-Know-JS Book 5, Chapter 1
* Solved "Scrabble" from CodinGame Classic Puzzles - Medium
* Began watching lecture from CS50 Week 4 (first 55 minutes)

**Thoughts**:
The CodinGame puzzle took a lot longer than it should have, but I got a bit of practice working with objects, and spent a *long* time trying to find a bug in my solution: turns out that if you pass a string into match (e.g. `str.match('a')`), it converts the string `a` to a regular expression and only looks for the *first* match. If you want to find *all* the 'a's, you need to use the RegExp constructor with the 'g' flag. Silly syntax problem... but I guess I'll remember that one better going forward.   
The part of the CS50 lecture that I watched had mainly to do with pointers... and explained some of (maybe all?) the asterisks I was getting so confused about during the last couple of homework assignments.

**Link(s) to work**:
None today.
