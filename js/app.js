'use strict';

var hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm '];
var sumTotal = ['Total '];
// All properties and values in each Object.
var allStores = [];
// Sum of hourly sales for all stores.
var endSum = [];

// ======================================================================
// Constructor Object : Store


function Store(name, minCustomer, maxCustomer, aveSales) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.aveSales = aveSales;
  this.TotalSales = [];
  this.randomCust = function(minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer + 1;
  };
  this.generateSales = function() {
    for (var i = 1; i <= 15; i ++) {
      var simuSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSales);
      this.TotalSales.push(simuSales);
    }
  };
  this.fillCells = function() {
    // Create table data with store location in first column.
    var sum = 0;

    var tbody = document.getElementById('table-body');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = this.name;

    tr.appendChild(td);


    // Create sales data in following columns.
    for (var d = 0 ; d < this.TotalSales.length; d++) {

      var td2 = document.createElement('td');
      td2.textContent = this.TotalSales[d];

      tr.appendChild(td2);
    }

    tbody.appendChild(tr);

    // Add sum of each store to the end of the column.
    for (var a = 0; a < this.TotalSales.length; a++) {
      sum += parseInt(this.TotalSales[a]);
    }

    var sum1 = document.createElement('td');
    sum1.textContent = sum;

    tr.appendChild(sum1);
    tbody.appendChild(tr);
  };

  allStores.push(this);
  this.generateSales();
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 387, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


// ======================================================================
// Use the same route of Section > table then create route of > table > then to tr > td. Fill in cells with array of Sales for each store.

function fillHead() {

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

  var th2 = document.createElement('th');
  th2.textContent = sumTotal;

  tr.appendChild(th2);

  thead.appendChild(tr);
  table.appendChild(thead);
}

function fillEndSum() {

  // Grab all the hourly sales from each store, and sum all the stores' hourly sales hour by hour.
  var tbody = document.getElementById('table-body');
  var endTr = document.createElement('tr');

  var emptySpace = document.createElement('td');
  emptySpace.textContent = 'Total Sales per Hour';
  endTr.appendChild(emptySpace);
  tbody.appendChild(endTr);

  for (var e = 0; e < hours.length-1; e++) {
    var hourSales = document.createElement('td');

    var sumEnd = 0;
    for (var m = 0; m < allStores.length; m++) {
      sumEnd += parseInt(allStores[m].TotalSales[e]);
    }

    endSum.push(sumEnd);

    hourSales.textContent = endSum[e];
    endTr.appendChild(hourSales);
    tbody.appendChild(endTr);
  }


  // Add sum of hourly sales for all the stores to last row of the table.
  endSum.unshift(' ');
}

function initialize () {
  for (var f = 0; f < allStores.length; f++) {
    allStores[f].fillCells();
  }
}

initialize();
fillHead();
fillEndSum();


// ======================================================================
// Create a form to take input on store locations and sales per hour for the new store.


function formData(event) {
  event.preventDefault();
  var store = event.target.store.value;
  var minCustomer = event.target.minCustomer.value;
  var maxCustomer = event.target.maxCustomer.value;
  var aveSales = event.target.aveSales.value;

  new Store(store, minCustomer, maxCustomer, aveSales);

  // createTable();
  // allStores[allStores.length - 1].fillCells();
  // fillEndSum();
  form.reset();
}


var form = document.getElementById('sales_form');
form.addEventListener('submit', formData);


