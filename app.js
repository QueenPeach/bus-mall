'use strict';

var allProducts = [];

var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweepers', 'tauntaun', 'unicorn', 'usb',
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

  render: function() {
    var resultsEl = document.getElementById('results');
    var listEl = document.createElement('ul');
    listEl.textContent = 'Results';
    resultsEl.appendChild(listEl);
    for(var x = 0; x < allProducts.length; x++) {
      listEl = document.createElement('li');
      listEl.textContent = allProducts[x].votes + ' votes for ' + allProducts[x].name;
      resultsEl.appendChild(listEl);
    }
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


    if (tracker.clickCount <15){
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
    } else {
      if (tracker.clickCount === 15) {
        tracker.render();
        tracker.imagesEl.removeEventListener('click', tracker.onClick);
      }
    }
  }
};

tracker.imagesEl.addEventListener('click', tracker.onClick);
tracker.displayImages();
