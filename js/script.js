var proteins = [
    "Chicken breast",
    "Chicken thigh",
    "Flounder",
    "Snapper",
    "Anchovies",
    "Haddock",
    "Trout",
    "Halibut",
    "Mackerel",
    "Sea bass",
    "Salmon steak",
    "Salmon fillet",
    "Prawns",
    "Sirloin Steak",
    "Rib eye steak",
    "Beef silverside",
    "Minced beef",
    "Beef ribs",
    "Rump roast",
    "Beef stew meat",
    "Pork loin",
    "Pork chop",
    "Pork ribs",
    "Baby back ribs",
    "Bacon",
    "Pork roast",
    "Lamb chops",
    "Lamb rack",
    "Venison steaks"
];

var vegetables = [
    "Asparagus",
    "Avocado",
    "Artichoke hearts",
    "Brussel sprouts",
    "Beetroot",
    "Carrots",
    "Celery",
    "Daikon",
    "Courgette",
    "Fennel root",
    "Kale",
    "Chard",
    "Dandelion greens",
    "Spinach",
    "Acorn squash",
    "Butternut squash",
    "Yam",
    "Sweet potato",
    "Pepper",
    "Red cabbage",
    "Green cabbage",
    "Chinese cabbage",
    "Cilantro",
    "Bok Choy",
    "Broccoli",
    "Cauliflower",
    "Cucumber"
];

var fats = [
  "Coconut oil",
  "Olive oil",
  "Macadamia oil",
  "Avocado oil",
  "Lard",
  "Ghee",
  "Grass-fed butter"
];

var spices = [
  "Allspice",
  "Basil",
  "Cardamom",
  "Cinnamon",
  "Celery Seed",
  "Dill",
  "Fenugreek",
  "Garlic",
  "Ginger",
  "Red Curry",
  "Green Curry",
  "Yellow Curry",
  "Oregano",
  "Coriander",
  "Nutmeg",
  "Rosemary",
  "Thyme",
  "Garam masala",
  "Bay leaf",
  "Salt",
  "Herbes de Provence",
  "Chilli powder",
  "Paprika",
  "Cumin",
  "Black Pepper",
  "Lavender",
  "Mustard"
];


function getRandomLength(x) {
  var max = Math.floor(x.length);
  return Math.floor(Math.random() * (max - 0)) + 0;
}

function imagesSearch(x) {
  return '<a href="https://duckduckgo.com/?q=' + x + '&t=h_&iar=images" title="Search for images of ' + x + '" class="ingredient">' + x + '</a>';
}

function generate() {
    var protein = imagesSearch(proteins[getRandomLength(proteins)]);
    var vegetable = imagesSearch(vegetables[getRandomLength(vegetables)]);
    var fat = imagesSearch(fats[getRandomLength(fats)]);
    var spice = imagesSearch(spices[getRandomLength(spices)]);
    var str = protein + ' with ' + vegetable + ' drizzled with ' + fat + ' and flavoured with ' + spice + '.';
    return str;
}

var amountOfResults = 3;

for(var i = 0; i < amountOfResults; i++) {
  $('.results').append('<li class="results__item">' + generate() + '</li>');
  setTimeout(function() {
    $('.results__item').addClass('animate');
  }, 200);
}

$('.generate-recipes-button').click(function() {
  $('.results').empty();

  for(var i = 0; i < amountOfResults; i++) {
    $('.results').append('<li class="results__item">' + generate() + '</li>');
    setTimeout(function() {
      $('.results__item').addClass('animate');
    }, 200);
  }
});
