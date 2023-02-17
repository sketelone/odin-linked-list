# Linked List

Creates a class for a singly linked list implemented in Javascript using recursion. Unit-testing done with Jest.

The linked list is implemented as a nested object with the form:

linkedList = {value: "A", nextNode: 
                {value: "B", nextNode:
                  ...
                    {value: "Z", nextNode: null}
                  ...
                }
             }

# Methods
append(value) - adds new node containing value to the end of the list <br />
prepend(value) - adds a new node containing value to the start of the list <br />
size() - returns the total number of nodes in the list <br />
head() - returns the first node in the list <br />
tail() - returns the last node in the list <br />
at(index) - returns the node at the given index or false if index exceeds length of list <br />
pop() - removes the last element from the list <br />
contains(value) - returns true if the passed in value is in the list and otherwise returns false <br />
find(value) - returns the index of the node containing value, or false if not found <br />
toString() - returns linked list as a string in the format: ( value ) -> ( value ) -> ( value ) -> null <br />
insertAt(value, index) - inserts a new node with the provided value at the given index or false if index exceeds length of list <br />
removeAt(index) - removes the node at the given index or false if the list is empty or if index exceeds length of list <br />
