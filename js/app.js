'use strict';

var hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm '];
var sumTotal = ['Total '];
// All properties and values in each Object.
var allStores = [];
// All store names.
var locations = [];
// Sum of sales of all hours for each store.
var total = [];
// Sum of hourly sales for all stores.
var endSum = [];

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

function fillCells() {

  // Create table data with store location in first column.
  for (var r = 0; r < allStores.length; r++) {

    var tbody = document.getElementById('table-body');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = allStores[r].name;

    tr.appendChild(td);
    tbody.appendChild(tr);


    // Create sales data in following columns.
    for (var d = 0 ; d < allStores[r].TotalSales.length; d++) {

      var td2 = document.createElement('td');
      td2.textContent = allStores[r].TotalSales[d];

      var td3 = document.createElement('td');
      td3.textContent = total[r];

      tr.appendChild(td2);
      tbody.appendChild(tr);
    }


    // Add sum of each store to the end of the column.
    var sum = 0;
    for (var a = 0; a < allStores[r].TotalSales.length; a++) {
      sum += parseInt(allStores[r].TotalSales[a]);
    }

    total.push(sum);

    var sum1 = document.createElement('td');
    sum1.textContent = total[r];

    tr.appendChild(sum1);
    tbody.appendChild(tr);
  }
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
fillHead();
fillCells();
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
  // form.reset();
  // console.log('history of data: ' + data);
  // console.log(event);
}

function createTable() {





}

var form = document.getElementById('sales_form');
form.addEventListener('submit', formData);
formData();
console.log(allStores);
