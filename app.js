'use strict';

var allProducts = [];

var productNames = ['bag', 'boots', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb',
  'water-can', 'wine-glass'];

// You just had to make us use this many pictures...


function Product(name, path) {
  this.name = name,
  this.path = path,
  this.clicked = 0;
  this.viewed = 0;
  allProducts.push(this);
}
// TODO: Build your constructor and necessary properties.

for(var x = 0; x < productNames.length; x++) {
  new Product(productNames[x], 'img/' + productNames[x] + '.jpg');
}

console.log('product names:', productNames);


// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function(max) {
    return Math.round(Math.random() * (max - 0)) + 0;
  },

  displayImages: function() {
    var picture =  document.getElementsByClassName('threeImg');
    var duplicate = [-1, -1, -1];

    while(duplicate[0] === duplicate[1] || duplicate[0] === duplicate[2] || duplicate[1] === duplicate[2]) {
      duplicate = [productRank.getRandomIndex(allProducts.length), productRank.getRandomIndex(allProducts.length), productRank.getRandomIndex(allProducts.length)];
    }

    for(var i = 0; i < 3; i++) {
      picture[i].src = allProducts[duplicate[i]].path;
      allProducts[duplicate[i]].timesShown++;
    }
  },

  tallyClicks: function(elementId) {
    // TODO: Hmm... what's going to happen here?
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },

  onClick: function() {
    // TODO: Hmm... what's going to happen here?
  },
};

// productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();
