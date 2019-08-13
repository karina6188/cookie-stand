'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
var sumTotal = ['Total: '];

var locations = [];
var total = [];

// ======================================================================
// Store: 1st and Pike

var PikeAnd1st = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  aveSale: 6.3,
  TotalSales: [],
  randomCust: function (minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (maxCustomer-minCustomer)) + minCustomer + 1;
  },
  generateSales: function() {
    for (var i = 1; i <= 15; i ++) {
      var simuSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSale);
      this.TotalSales.push(simuSales);
    }
  },
};

// ======================================================================
// Store: SeaTac Airport

var SeaTac = {
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  aveSale: 1.2,
  TotalSales: [],
  randomCust: function (minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (maxCustomer-minCustomer)) + minCustomer + 1;
  },
  generateSales: function() {
    for (var i = 1; i <= 15; i ++) {
      var simuSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSale);
      this.TotalSales.push(simuSales);
    }
  },
};

// ======================================================================
// Store: Seattle Center

var SeaCenter = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  aveSale: 3.7,
  TotalSales: [],
  randomCust: function (minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (maxCustomer-minCustomer)) + minCustomer + 1;
  },
  generateSales: function() {
    for (var i = 1; i <= 15; i ++) {
      var simuSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSale);
      this.TotalSales.push(simuSales);
    }
  },
};

// ======================================================================
// Store: Capitol Hill

var CapitolHill = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  aveSale: 2.3,
  TotalSales: [],
  randomCust: function (minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (maxCustomer-minCustomer)) + minCustomer + 1;
  },
  generateSales: function() {
    for (var i = 1; i <= 15; i ++) {
      var simuSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSale);
      this.TotalSales.push(simuSales);
    }
  },
};

// ======================================================================
// Store: Alki

var Alki = {
  name: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  aveSale: 4.6,
  TotalSales: [],
  randomCust: function (minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (maxCustomer-minCustomer)) + minCustomer + 1;
  },
  generateSales: function() {
    for (var i = 1; i <= 15; i ++) {
      var simuSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSale);
      this.TotalSales.push(simuSales);
    }
  },
};

// ======================================================================
function render() {
  // Find the container (section with an id="locations")
  // Loop over the locations
  // <h3> with it's name
  // <ul>
  // Loop over the [hours] and make an <li> with the hour and the projection from location [cookies]

  var section = document.getElementById('locations');

  for (var i = 0 ; i < locations.length; i++) {

    var title = document.createElement('h3');
    title.textContent = locations[i].name;
    section.appendChild(title);

    var list = document.createElement('ul');

    for (var p = 0 ; p < hours.length; p++) {
      var projection = hours[p] + locations[i].TotalSales[p];
      var li = document.createElement('li');
      li.textContent = projection;
      // list created element of 'ul', so we appendChild to ul first (ul > li).
      list.appendChild(li);
    }

    var sum = 0;
    for (var s = 0; s < locations[i].TotalSales.length; s++) {
      sum += parseInt(locations[i].TotalSales[s]);
      total.push(sum);
    }

    var addTotal = document.createElement('li');
    var TotalSum = sumTotal + sum;
    addTotal.textContent = TotalSum;
    list.appendChild(addTotal);

    // Then we append what we just appended ul to section, so section.append list (section > ul > li).
    section.appendChild(list);
  }
}

function initialize () {
  PikeAnd1st.generateSales();
  SeaTac.generateSales();
  SeaCenter.generateSales();
  CapitolHill.generateSales();
  Alki.generateSales();

  locations.push(PikeAnd1st);
  locations.push(SeaTac);
  locations.push(SeaCenter);
  locations.push(CapitolHill);
  locations.push(Alki);
}

initialize();
render();