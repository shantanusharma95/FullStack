# FullStack
Beginning at the most basic of full stack development - and gradually adding and exploring more features. The code will include -
  * HTML and CSS
  * JavaScript
  * jQuery (Basically a large JavaScript library, making things easier and more manageable)
  * Python
  * [Django](https://www.djangoproject.com/) (Python based open-source web framework)
Below is a short summary of each directory in this repo. Each directory contains files related to a single application.

1. #### SampleSignUp
   Contains a very basic application, showing a sample sign up page, which re-directs to a 'thank you' page on successful detail submission.

2. #### TicTacToe
   This is a tic tac toe game replica. Created with basic html and css - but here I have used DOM in the .js file, to interact with the HTML elements.
 
   DOM (document object model) is like an interface that allows JavaScript to work with the HTML and CSS elements
   
3. #### FourDots
   This is a 2 player-game, where the player filling 4 horizontal or vertical dots consecutively, wins.
   
   Here I have used more of jQuery - jQuery is a huge JavaScript library, which makes it easier to interact with the HTML tags/code!
   The functionality of this game can be achieved in more easier ways though!
   
4. #### ToDo App
   This is a basic to-do list, created using JavaScript, HTML and CSS.
   
   User can:
   * add a new list item
   * remove an item
   * mark an item as complete
   * clear entire list
   
   The list lasts for the current session, and is not saved in DB or file.

5. #### GenderAPI
   This is a simple web page calling a gender predicting API, where I pass the name of the user (taken as an input) and display the gender and probability of the same
   as received in response.
   
   I have made use of **async** function to enable the use of **await** making an asynchronous function work like a synchronous one.
   You can read more about why **async** and **await** form a good pair on [this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).
   
6. #### Blog
   This project is developed with Python, using the Django framework and the built-in SQL installation it comes with.
   
   A user can create a blog post, publish it or save as draft. Other users can also drop/delete comments on blog posts. This is a basic blog project in a nutshell.
   
   Django is a Model-Template-View based framework, and I have included all the files created by me and the pre-existing files modified by me, which are generated when you first
   set up a basic Django application.
   

