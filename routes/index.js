var express = require('express');
var router = express.Router();

///////////////////////////////////////////////////////// FIRST TEST


router.post('/addFirstName', function (req, res, next) {
  let firstname = req.body.firstname;

  res.json({ prenom: firstname });
});

///////////////////////////////////////////////////////// NEW WORD


router.post('/newWord', function(req, res, next){
  let mot = req.body.mot;

  var alphabet = ["a", "b", "c","d", "e", "f",
                  "g", "h", "i", "j", "k", "l", 
                  "m", "n", "o", "p", "q", "r", "s",
                  "t", "u", "v", "w", "x", "y", "z"];

  var nouveauMot = "";

  for(var i = 0; i < mot.length; i++){
    console.log(alphabet.indexOf(mot[i]))
    nouveauMot += alphabet[alphabet.indexOf(mot[i]) + 1];
  }

  res.json({newWord : nouveauMot})
})

///////////////////////////////////////////////////////// GREATER THAN B

router.post('/greater', function (req, res, next) {
  let a = req.body.a;
  let b = req.body.b;

  let greaterThanB = a.filter(numb => numb > b)

  const initialValue = 0;

  const sumWithInitial = greaterThanB.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );


  res.json({ sum: sumWithInitial })
})

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

///////////////////////////////////////////////////////// OCCURENCES

router.post("/occurrences", function(req, res, next){
  let a = req.body.a;
  let b = req.body.b;
  let c = [];

  c = a.filter( numb => numb !== b)

  res.json({c : c})
})

///////////////////////////////////////////////////////// Sort By B


router.post("/sortbyB", function (req, res, next) {
  let a = req.body.a;
  let d = [];

  if (a[0].b > a[1].b) {
    d.push(a[1], a[0])
  } else {
    d.push(a[0], a[1])
  }

  res.json({ c : d })
})

///////////////////////////////////////////////////////// Sort By B


router.post("/remplaceString", function (req, res, next) {
  let obj = req.body;

  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
    if(value === "" || value === " "){
      Object.defineProperty(obj, key, {
        value: null,
      });
    }
  }

  res.json(obj)
})

///////////////////////////////////////////////////////// times the key occurs within the array

router.post("/theKeyOccurs", (req, res, next) => {

  let array = req.body;

  const occurrences = array.reduce((acc, x) => {
    console.log({"acc" : acc[x]}, {"[x]" : acc[x]}, {"acc[x]" : acc[x]})

    acc[x] = ++acc[x] || 1;
    return acc;
  }, {});


  res.json(occurrences);
})

///////////////////////////////////////////////////////// ADDITION

router.post("/addition", (req, res, next) => {
  let array = req.body;

  var sum = array.reduce((acc, x) => {
    return acc + x;
  })

  res.json({sum : sum})
})

///////////////////////////////////////////////////////// SLICE

router.post("/nElementsOfA", (req, res, next) => {
  let array = req.body;
  let limit = req.body[1]

  var newArray = array.slice(-limit)

  res.json({ result: newArray })
})

///////////////////////////////////////////////////////// DATE

router.post("/numbersDays", (req, res, next) => {
  let date1 = new Date(req.body.date1)
  let date2 = new Date(req.body.date2)

  
  console.log((date1.getTime() - date2.getTime()) / 86400000)

  res.json({numbersDays : 10})
})




module.exports = router;
