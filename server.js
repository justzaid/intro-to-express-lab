// Import Express
const express = require('express');

// Create an Express app
const app = express()

// Informs express what port we want to listen to
const port = 3300;




// Random Number Generator
function randNum(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


// Data Arrays
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];



// Define routes here:
app.get('/', (req, res) => {
    res.send('<h2>Hello World!</h2>');
  });

// Defining a route for homepage
app.get('/home', (req, res) => {
    res.send('<h2>Home Page</h2>');
});

// Defining a route for name
app.get('/greetings', (req, res) => {
    res.send(`<h2>Hello</h2>`);
});

// Defining a route for collectibles
app.get('/collectibles/:idxParam', (req, res) => {
    const idx = req.params.idxParam;
    res.send(`<h2>Hola<h2>`)
});

// Defining a route for number roll
app.get('/number/:rollParam', (req, res) => {
    const num2 = req.params.rollParam;
    res.send(`<h2>${randNum(0, num2)}</h2>`);
});

// Defining a route for greeting the person's name
app.get('/greetings/:personName', (req, res) => {
    const name = req.params.personName;
    res.send(`<h2>Hello there, ${name}!</h2>`);
});


// Listen for requests on port 3000
app.listen(3300, () => {
    console.log(`Listening on port ${3300}`)
  })