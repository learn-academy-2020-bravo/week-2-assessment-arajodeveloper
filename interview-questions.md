# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer: to copy the constructor of the parent class

  Researched answer: super is used to call the constructor, methods and properties of parent class. You may also use the super keyword in the sub class when you want to invoke a method from the parent class when you have overridden it in the subclass



2. What is a virtual DOM?

  Your answer: it allows to manipulate pages inside of the react app.

  Researched answer: The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: import React, export the App and render() & function()??????

  Researched answer: class, extends React.Component{}, render(), return() with tag to print "Hello World"



4. What is JSX?

  Your answer: HTML like used in javascript in react app

  Researched answer: JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code.


5. What is state in React?

  Your answer: it is to store/update the current or upcoming state you want for your component

  Researched answer: React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I do not know

  Researched answer: hoisting means a variable can be declared after it has been used; a variable can be used before it has been declared. I am assuming this hoisting is convenient for developers unlike C where the variable must be declared strictly.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods: Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.
- API: Application Programming Interface-a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API. When you use an application on your mobile phone, the application connects to the Internet and sends data to a server. The server then retrieves that data, interprets it, performs the necessary actions and sends it back to your phone. The application then interprets that data and presents you with the information you wanted in a readable way. This is what an API is - all of this happens via API.

- event.preventDefault(): The preventDefault() method is used to prevent the browser from executing the default action of the selected element. It can prevent the user from processing the request by clicking the link. For example, this can be useful when:
Clicking on a "Submit" button, prevent it from submitting a form
Clicking on a link, prevent the link from following the URL

- DOM events: A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.When a user clicks the mouse
When a web page has loaded
When an image has been loaded
When the mouse moves over an element
When an input field is changed
When an HTML form is submitted
When a user strokes a key


- http verbs: The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently.
- MVC: Stands for "Model-View-Controller." MVC is an application design model comprised of three interconnected parts. They include the model (data), the view (user interface), and the controller (processes that handle input).
