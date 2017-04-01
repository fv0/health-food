var proteins = {
  en: [
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
  ],
  de: [
    "Hühnchenbrust",
    "Hühnerkeule",
    "Flunder",
    "Schnapper",
    "Sardelle",
    "Schellfisch",
    "Forelle",
    "Heilbutt",
    "Makrele",
    "Seebarsch",
    "Lachsfilet",
    "Garnelen",
    "Lendensteak",
    "Ribeye-Steak",
    "Unterschale",
    "Hackfleisch",
    "Rinderrippchen",
    "Rostbraten",
    "Rindergulasch",
    "Schweinelende",
    "Schweinekotelett",
    "Schweinerippchen",
    "Schweinebraten",
    "Speck",
    "Lammkoteletts",
    "Lammkarree",
    "Hirschsteak"
  ]
};

var vegetables = {
  en: [
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
    "Red Pepper",
    "Green Pepper",
    "Yellow Pepper",
    "Red cabbage",
    "Green cabbage",
    "Chinese cabbage",
    "Cilantro",
    "Bok Choy",
    "Broccoli",
    "Cauliflower",
    "Cucumber",
    "Leek",
    "green beans",
    "eggplant"
  ],
  de: [
    "Spargel",
    "Avocado",
    "Artischocke",
    "Rosenkohl",
    "roter Beete",
    "Karotten",
    "Sellerie",
    "Daikon",
    "Zucchini",
    "Fenchel",
    "Grünkohl",
    "Mangold",
    "Löwenzahngemüse",
    "Spinat",
    "Eichelkürbis",
    "Butternut-Kürbis",
    "Yamswurzel",
    "Süßkartoffel",
    "roter Paprika",
    "grüner Paprika",
    "gelber Paprika",
    "Chinakohl",
    "Koriander",
    "Bok Choy",
    "Brokkoli",
    "Blumenkohl",
    "Gurke",
    "Lauch",
    "grünen Bohnen",
    "Aubergine"
  ]
};

var fats = {
  en: [
    "Coconut oil",
    "Olive oil",
    "Macadamia oil",
    "Avocado oil",
    "Lard",
    "Ghee",
    "Grass-fed butter"
  ],
  de: [
    "Kokosöl",
    "Olivenöl",
    "Macadamiaöl",
    "Avocadoöl",
    "Schweineschmalz",
    "Ghee",
    "Grasbutter"
  ]
};

var spices = {
  en: [
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
    "Bay leaf",
    "Herbes de Provence",
    "Chilli powder",
    "Paprika",
    "Cumin",
    "Black Pepper",
    "Lavender",
    "Mustard"
  ],
  de: [
    "Piment",
    "Basilikum",
    "Kardamom",
    "Zimt",
    "Selleriesamen",
    "Dill",
    "Bockshornklee",
    "Knoblauch",
    "rotem Curry",
    "grünem Curry",
    "gelbem Curry",
    "Oregano",
    "Koriander",
    "Muskatnuss",
    "Rosmarin",
    "Thymian",
    "Lorbeerblatt",
    "Kräutern der Provence",
    "Chilli",
    "Paprikapulver",
    "Kurkuma",
    "schwarzem Pfeffer",
    "Lavendel",
    "Senf"
  ]
};


function getRandomLength(x) {
  var max = Math.floor(x.length);
  return Math.floor(Math.random() * (max - 0)) + 0;
}

function imagesSearch(x) {
  return '<a href="https://duckduckgo.com/?q=' + x + '&t=h_&iar=images" title="Search for images of ' + x + '" class="ingredient">' + x + '</a>';
}

function generate() {
  if ( $('html').attr('lang') == 'en' ) { // English translation
    var protein = imagesSearch(proteins.en[getRandomLength(proteins.en)]);
    var vegetable = imagesSearch(vegetables.en[getRandomLength(vegetables.en)]);
    var fat = imagesSearch(fats.en[getRandomLength(fats.en)]);
    var spice = imagesSearch(spices.en[getRandomLength(spices.en)]);
    var str = protein + ' with ' + vegetable + ' drizzled with ' + fat + ' and flavoured with ' + spice + '.';
  }
  else if ( $('html').attr('lang') == 'de' ) { // German translation
    var protein = imagesSearch(proteins.de[getRandomLength(proteins.de)]);
    var vegetable = imagesSearch(vegetables.de[getRandomLength(vegetables.de)]);
    var fat = imagesSearch(fats.de[getRandomLength(fats.de)]);
    var spice = imagesSearch(spices.de[getRandomLength(spices.de)]);
    var str = protein + ' mit ' + vegetable + ' beträufelt mit ' + fat + ' und verfeinert mit ' + spice + '.';
  }
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
