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
