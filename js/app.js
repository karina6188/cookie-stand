'use strict';

var hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm '];

var sumTotal = ['Total: '];

// All values in each Object.
var allStores = [];
var locations = [];

// Sum of sales of all hours for each store.
var total = [];

console.log(total);

// ======================================================================
// Constructor Object : Store


function Store(name, minCustomer, maxCustomer, aveSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.aveSale = aveSale;
  this.TotalSales = [];
  this.randomCust = function(minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer + 1;
  };
  this.generateSales = function() {
    for (var i = 1; i <= 15; i ++) {
      var simuSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSale);
      this.TotalSales.push(simuSales);
    }
  };
  allStores.push(this);
}


var PikeAnd1st = new Store('1st and Pike', 23, 65, 6.3);
var SeaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var SeaCenter = new Store('Seattle Center', 11, 387, 3.7);
var CapitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);



// ======================================================================
// Use the same route of Section > table then create route of > table > then to tr > td. Fill in cells with array of Sales for each store.

function fillCells () {

  var table = document.getElementById('table-locations');

  // Create elements going down from table > thead > tr > th then use for loop to put hours in table head.

  var thead = document.createElement('thead');
  var tr = document.createElement('tr');

  hours.unshift(' ');

  for (var h = 0 ; h < hours.length; h++) {
    var th = document.createElement('th');
    th.textContent = hours[h];
    tr.appendChild(th);
  }

  thead.appendChild(tr);
  table.appendChild(thead);


  // Create table data with store location in first column then sales data in following columns.
  for (var r = 0; r < allStores.length; r++) {

    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = allStores[r].name;

    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);

    for (var d = 0 ; d < allStores[r].TotalSales.length; d++) {

      var td2 = document.createElement('td');
      td2.textContent = allStores[r].TotalSales[d];

      var sum = 0;
      sum += parseInt(allStores[r].TotalSales[d]);
      total.push(sum);

      var td3 = document.createElement('td');
      td3.textContent = total[r];

      tr.appendChild(td2);
      tbody.appendChild(tr);
      table.appendChild(tbody);
    }
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
fillCells();
