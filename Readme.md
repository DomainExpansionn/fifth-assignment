1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans :- getElementById finds an unique element from the Document object by an ID assigned to that element by the developer.
getElementsByClassName returns an array-like object where each index contains an html element that contains the same class name. 
querySelector gets the first element from the DOM that was assigned with that class name or ID.
querySelectorAll returns all the elements that were assigned with a certain class name.

2.How do you create and insert a new element into the DOM?
Ans :- To create : document.createElement("element-name")
To insert : there are different methods i.e. appendChild(), prepend(), append()

3.What is Event Bubbling and how does it work?
Ans :- It's a way for events to travel through the DOM. The event first starts from the target element and then moves upward like parent to grandparent to great grand parent all the way to document.
It works in such a way where we click on target element.
The event first gets triggered on that target. 
Then it moves up (like a bubble in water) to the parent.
Then to it's parent, then it's parent all the way up to document.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans :- When an event listener is attached to a parent element, with event delegation we can manage events for it's child also.
It is useful because, very less event listeners are needed. so, we can get better performance.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans :- preventDefault() stops the default behavior of an element. i.e a with preventDefault() on a submit button makes it work like a normal button.
 stopPropagation() stops the event from bubbling. It doesn't stop their default behavior.