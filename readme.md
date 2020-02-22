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