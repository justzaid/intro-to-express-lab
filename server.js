// Import Express
const express = require('express');
const morgan = require('morgan');

// Create an Express app
const app = express()

// Informs express what port we want to listen to
const port = 3300;

// Using morgan
app.use(morgan('dev'));

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

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
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
    if (idx > collectibles.length) {
        res.send(`<h2>This item is not yet in stock. Check back soon!<h2>`)
    } else {
        res.send(`<h2>So you want the ${collectibles[idx].name}? For ${collectibles[idx].price}, it can be yours!<h2>`)
    }
});

// Defining a route for shoes
// app.get('/shoes', (req, res) => {
//     for (let i = 0; i < shoes.length; i++) {
//     let newList = [];
//     if (req.query.price < shoes[i].price) {
//         res.send()
//     } else if (req.query.price > shoes[i].price) {
//         res.send()
//     } else {
//         res.send(shoes)
//     }
//     }
// });

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