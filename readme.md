# Express
#### Try At Least Once (JavaScript libraries and frameworks) > Back End Frameworks > Express

Official website: [https://expressjs.com/](https://expressjs.com "https://expressjs.com/")

Github repository: [https://github.com/expressjs/express](https://github.com/expressjs/express "https://github.com/expressjs/express")

------------
## What is the Express
Node.js framework has been strongly adopted among back-end developers because of its powerful features. The Express framework is built on top of the Node.js framework which makes development extremely faster with more scalability. It's designed to build single-page, multi-page, and hybrid web applications.

Remarkable advantages of Express.js:
- Easy HTTP methods to use
- Fast server-side programming
- Efficient routing mechanism
- Work fine with template engines

### Installation
Assuming you’ve already installed [Node.js](https://nodejs.org/ "Node.js"). Express gets installed via the Node Package Manager. Continue reading to install and write the first common "hello world" app with Express.

1. Make a directory that holds all our app files (for example **hello-app**)
2. open your command line or terminal from the hello-app folder and initialize the project with npm init command then ress enter/return button to accept the default values
`npm init` 
3. Install the Express with this command:
`npm install express --save`
4. Open **index.js** file and write these 5 line code then save it:
    ```javascript
    const express = require('express')
    const app = express()
    const port = 8000
    app.get('/', (req, res) => res.send('Hello World!'))
    app.listen(port, () => console.log(`Hello. I'm listening on port ${port}!`))
    ```
5. Run the app with node command:
`node index.js`
if everything will be accurate, you will get this message: **Hello. I'm listening on port 8000** on your command line or terminal
6. Open a browser and go to **localhost:8000**
7. Congratulations! You wrote your first Express app!

### Quick Example
**Simple Express routing app with Pug template engine**

Pug is a template engine for Node.js. A template engine allows us to inject data and then produce HTML. Now we're going to add new codes to the hello world app.
Read more about Pug and it's documentation [here](https://pugjs.org/api/getting-started.html "here").

- Install the Pug template engine with the Node Package Manager:
`npm install pug --save`
- Create **views** directory and **index.pug** file inside it
- Write the Pug template inside the **index.pug** with this content:
    ```
    html
    	head
    		title= title
    
    	body
    		h1 Hi dude. Welcome to this screen 
    
    		h3 Name: 
    		h2(style="color: red;")= name
    
    		h3 Your Age: 
    		h2(style="color: red;")= age
    ```

- Create **public** directory and **index.html** file inside it. This file contains our form inputs which they will send data to our app in the back.
	```html
	<!DOCTYPE html>
	<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>Try Express with Pug</title>

	</head>

	<body style="height: 100vh; display: flex; justify-content: center; align-items: center;">

		<h1>Simple Express Routing Example With Pug Template Engine</h1>
		<form style="text-align: center;" action="http://127.0.0.1:8000/get-name" method="GET">
			<input type="text" name="name" placeholder="Your Name: Adrian"> <br>
			<input type="text" name="lastname" placeholder="Your Lastname: Hammond"><br>
			<input type="text" name="birthyear" placeholder="Your Birthdate: 1997" pattern="\d*" maxlength="4"> <br>
			<input type="submit" value="Submit">
		</form>

		<a style="margin-top: 2rem; display: block; text-align: center;" href="https://pugjs.org/" target="_blank">
				read more about Pug, a template engine for Node.js
		</a>

	</body>

	</html>
	```
- Complete the **index.js** with setting of view engine to the pug and rest of the code:
	```javascript
	const express = require('express');
	const app = express();
	const port = 8000;

	app.use(express.static('public'));
	app.set('view engine', 'pug')

	app.get('index.html', function(req, res) {
		res.sendFile(__dirname + "/" + "index.html");
	})

	app.get('/get-name', function(req, res) {

		const fullName = req.query.name + " " + req.query.lastname;
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		const userAge = currentYear - req.query.birthyear;
		res.render('index', { title: 'Your Age', name: fullName, age: userAge })
	})

	app.listen(port, () => console.log(`Hello. I'm listening on port ${port}!`))
	```
