'use strict';

var allProducts = [];

var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'sweepers', 'tauntaun', 'unicorn', 'usb',
  'water-can', 'wine-glass'];

function Product(name) {
  this.name = name;
  this.path = 'img/' + this.name + '.jpg';
  this.votes = 0;
  // this.timesShown = 0;
  allProducts.push(this);
}

(function() {
  for(var i in productNames) {
    new Product(productNames[i]);
  }
})();

var tracker = {
  imagesEl: document.getElementById('images'),
  resultsEl: document.getElementById('results'),
  clickCount: 0,

  imageOne: document.createElement('img'),
  imageTwo: document.createElement('img'),
  imageThree: document.createElement('img'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * allProducts.length);
  },

  displayImages: function() {
    var idOne = this.getRandomIndex();
    var idTwo = this.getRandomIndex();
    var idThree = this.getRandomIndex();

    if(idOne === idTwo || idOne === idThree || idTwo === idThree) {
      this.displayImages();
      return;
    }

    this.imageOne.src = allProducts[idOne].path;
    this.imageTwo.src = allProducts[idTwo].path;
    this.imageThree.src = allProducts[idThree].path;

    this.imageOne.id = allProducts[idOne].name;
    this.imageTwo.id = allProducts[idTwo].name;
    this.imageThree.id = allProducts[idThree].name;

    this.imagesEl.appendChild(this.imageOne);
    this.imagesEl.appendChild(this.imageTwo);
    this.imagesEl.appendChild(this.imageThree);
  },

  onClick: function(event) {
    console.log(event.target);

    if(event.target.id === 'images') {
      console.log('didn\'t click an image');
      return;
    } else {
      tracker.clickCount++;

      for(var i in allProducts) {
        if(event.target.id === allProducts[i].name) {
          allProducts[i].votes++;
        }
      }


      tracker.displayImages();
    }
  }
};

tracker.imagesEl.addEventListener('click', tracker.onClick);
tracker.displayImages();

























// var allProducts = [];
//
// var productNames = ['bag', 'boots', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb',
//   'water-can', 'wine-glass'];
//
// // You just had to make us use this many pictures...
//
//
// function Product(name, path) {
//   this.name = name,
//   this.path = path,
//   this.clicked = 0;
//   this.viewed = 0;
//   allProducts.push(this);
// }
// // TODO: Build your constructor and necessary properties.
//
// for(var x = 0; x < productNames.length; x++) {
//   new Product(productNames[x], 'img/' + productNames[x] + '.jpg');
// }
//
// console.log('product names:', productNames);
//
//
// // TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?
//
// var productRank = {
//   // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
//   // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.
//
//   getRandomIndex: function(max) {
//     return Math.round(Math.random() * (max - 0)) + 0;
//   },
//
//   displayImages: function() {
//     var picture =  document.getElementsByClassName('threeImg');
//     var duplicate = [-1, -1, -1];
//
//     while(duplicate[0] === duplicate[1] || duplicate[0] === duplicate[2] || duplicate[1] === duplicate[2]) {
//       duplicate = [productRank.getRandomIndex(allProducts.length), productRank.getRandomIndex(allProducts.length), productRank.getRandomIndex(allProducts.length)];
//     }
//
//     for(var i = 0; i < 3; i++) {
//       picture[i].src = allProducts[duplicate[i]].path;
//       allProducts[duplicate[i]].timesShown++;
//     }
//   },
//
//   tallyClicks: function(elementId) {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   displayResults: function() {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   showButton: function() {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   onClick: function() {
//     // TODO: Hmm... what's going to happen here?
//   },
// };
//
// // productRank.imageEls.addEventListener('click', productRank.onClick);
// productRank.displayImages();
