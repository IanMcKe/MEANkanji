# A simple kanji app built using a MEAN stack
##### The website will select one question at a time (at random) from its database.  The user's goal is to correctly input the reading of the kanji written in red in hiragana.  It features a simple login system that doesn't require an email, only a distinct username.  It's also been developed with mobile in mind, so feel free to try it out on your phone!

##### Live version [here](https://meankanji.herokuapp.com)

#### By Ian McKenney

## Setup

* Clone the project repository using the link provided on Github
* Run `npm install` to install dependencies.
* Set up an instance of MongoDB ([Mac](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/), [Windows](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/), [Ubuntu](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)) on your machine.  (Make sure it says something about 'awaiting connections' in your shell)
* Change line 11 of app.js to match the port which your MongoDB instance is awaiting connections (currently it is set to the default Windows port).
* Run `npm start`
* Go to localhost:3000 in your browser.

## Technologies Used

HTML, CSS, Sass, Bourbon, Neat, MongoDB, Express, AngularJS, Angular Material, NodeJS, PassportJS
(Note: the angular-material.css file is customized to have all text-transform properties set to none instead of uppercase)

### Copyright (c)

Copyright (c) 2015 **Ian McKenney**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. Copyright Holder All Rights Reserved.
