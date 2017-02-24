## Short: Singly-Linked Lists

* I can store information (like values) in an array
  - it's easy to look up information, but hard to insert new elements (except at end)
  - I'm stuck with whatever length I initially specify

* If size of collection changes, I can create a singly-linked list as an alternative
  - consists of "nodes" - struct with data and pointer to next node
  - think of: data linked by pointers
  - trade-offs: lose random access

* How to create?
  - dynamically allocate space for node
  - make sure allocation *worked*
  - initialize val and next
  - return pointer to node

  - NB: ALWAYS KEEP TRACK OF FIRST ELEMENT!!! (MAYBE USE GLOBAL)

* How to search?
  - create "traversal pointer" to 1st node (duplicate)
  - compare val & move traversal pointer until found/end

* How to add values?
  - dynamically allocate space / check
  - put node at beginning of list
  - return pointer to new head

  - insert at end? O(n) / at beginning? O(1)

* How to delete whole thing?
  - recursion: if reach null, stop
  - else: delete rest, free curr

* How to delete single element?
  - messy...

## Short: Doubly-Linked Lists

* Use more memory than singly-linked list (extra field in each struct)
  - make deletion easier
  - you can move backwards through list

* How to insert a single node?
  - as above EXCEPT: modify previous head to point back to new head

* How to delete single node?
  - fix pointers of prev and next nodes
  - delete node

  - edge cases (first, last nodes) handled separately

* Linked lists: great (constant) insertion/deletion times, linear access


## Short: Stacks

* Last in, first out `struct`
  - Can be implemented using arrays or linked lists
  - two operations: push, pop

## Short: Queues

* First in, first out `struct`
  - operations: enqueue, dequeue

* Array implementation:
  - insert next item at ("first" + "size") % capacity
  - remove first: move first, decrease size, return value

* Implemented as doubly-linked list (singly-linked possible too)
  - to enqueue: allocate new node at END (tail)
  - to dequeue: take off first...

## Short: Hash Tables

  * Want pros of array & pros of linked list
    - insertion/deletion/lookup all tend toward Theta(1) (theta - average)
    - con: sorting doesn't work so great

  * combines two things:
    - hash function, returns hash code
    - array that stores data at location of hash code

  * collisions - how to store *both* data in array
    - method: linear probing - put data in next vacant slot
      - clustering problem: one collision makes more likely
      - space problem: we run out of room
    - method: chaining - array element is pointer to head of linked list
      - fixes clustering and space problems
      - insertion is great, lookup involves searching a (hopefully) *small* list

## Short: Tries

  * Tries combine arrays and pointers
    - use data as a "path" to find out whether it exists
    - two pieces of data guaranteed to have unique roadmaps
    - tradeoff: lots of MEMORY

  * To insert element, build path (example)
    - ```
    typedef struct _trie
    {
      char university[20];
      struct _trie* paths[10];
    }
    trie
    ```
    - root node probably globally defined, never modified/touched again
      - use COPY for traversal
      - consists of string and array of 10 null pointers
    - to insert/search:
      - travel down path, making new nodes as necessary
      - when you reach end, assign/check value
