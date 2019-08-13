'use strict';

// Store: 1st and Pike

var PikeAnd1st = {
  minCustomer: 23,
  maxCustomer: 65+1,
  aveSale: 6.3,
  TotalSalesPike: [],
  randomCust: function (minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (maxCustomer-minCustomer)) + minCustomer;
  },
  generateSales: function() {
    for (var i = 1; i <= 15; i ++) {
      var simuSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSale);
      this.TotalSalesPike.push(simuSales);
    }
  },
};
PikeAnd1st.generateSales();

console.log('Store Data: ', PikeAnd1st);
console.log('Random Customer: ', PikeAnd1st.randomCust(PikeAnd1st.minCustomer, PikeAnd1st.maxCustomer));
console.log('Simulated Sales: ', PikeAnd1st.TotalSalesPike);


// ======================================================================
// Store: SeaTac Airport

var SeaTac = {
  minCustomer: 3,
  maxCustomer: 24+1,
  aveSale: 1.2,
  TotalSalesSeaTac: [],
  randomCust: function (minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (maxCustomer-minCustomer)) + minCustomer;
  },
  generateSales: function() {
    for (var i = 1; i <= 15; i ++) {
      var simuSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSale);
      this.TotalSalesSeaTac.push(simuSales);
    }
  },
};
SeaTac.generateSales();

console.log('Store Data: ', SeaTac);
console.log('Random Customer: ', SeaTac.randomCust(SeaTac.minCustomer, SeaTac.maxCustomer));
console.log('Simulated Sales: ', SeaTac.TotalSalesSeaTac);



// ======================================================================
// Store: Seattle Center

var SeaCenter = {
  minCustomer: 11,
  maxCustomer: 38+1,
  aveSale: 3.7,
  TotalSalesSeaCenter: [],
  randomCust: function (minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (maxCustomer-minCustomer)) + minCustomer;
  },
  generateSales: function() {
    for (var i = 1; i <= 15; i ++) {
      var simuSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSale);
      this.TotalSalesSeaCenter.push(simuSales);
    }
  },
};
SeaCenter.generateSales();

console.log('Store Data: ', SeaCenter);
console.log('Random Customer: ', SeaCenter.randomCust(SeaCenter.minCustomer, SeaCenter.maxCustomer));
console.log('Simulated Sales: ', SeaCenter.TotalSalesSeaCenter);



// ======================================================================
// Store: Capitol Hill

var CapitolHill = {
  minCustomer: 20,
  maxCustomer: 38+1,
  aveSale: 2.3,
  TotalSalesCapitolHill: [],
  randomCust: function (minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (maxCustomer-minCustomer)) + minCustomer;
  },
  generateSales: function() {
    for (var i = 1; i <= 15; i ++) {
      var simuSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSale);
      this.TotalSalesCapitolHill.push(simuSales);
    }
  },
};
CapitolHill.generateSales();

console.log('Store Data: ', CapitolHill);
console.log('Random Customer: ', CapitolHill.randomCust(CapitolHill.minCustomer, CapitolHill.maxCustomer));
console.log('Simulated Sales: ', CapitolHill.TotalSalesCapitolHill);



// ======================================================================
// Store: Alki

var Alki = {
  minCustomer: 2,
  maxCustomer: 16+1,
  aveSale: 4.6,
  TotalSalesAlki: [],
  randomCust: function (minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (maxCustomer-minCustomer)) + minCustomer;
  },
  generateSales: function() {
    for (var i = 1; i <= 15; i ++) {
      var simuSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSale);
      this.TotalSalesAlki.push(simuSales);
    }
  },
};
Alki.generateSales();

console.log('Store Data: ', Alki);
console.log('Random Customer: ', Alki.randomCust(Alki.minCustomer, Alki.maxCustomer));
console.log('Simulated Sales: ', Alki.TotalSalesAlki);



//Put store sales data into an array
var storeData = [PikeAnd1st.TotalSalesPike, SeaTac.TotalSalesSeaTac, SeaCenter.TotalSalesSeaCenter, CapitolHill.TotalSalesCapitolHill, Alki.TotalSalesAlki];

var stores = ['1st and Pike', 'SeaTac', 'Seattle Center', 'Capitol Hill', 'Alki'];

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

// Find Main. Find UL #list.
var elementMain = document.getElementById ('main');
var elementList = document.getElementById ('list');

for (var i=0; i < stores.length; i++) {

  // Add stores to LI. Add Sales Data to LI.
  var newStores = document.createElement('h3');
  var newStoreSales = document.createElement('li');

  // Set the Text Content to the Stores/ Sales Data.
  newStores.textContent = stores[i];
  newStoreSales.textContent = storeData[i];

  // Append LI as a Child to h2/UL.
  elementMain.appendChild(newStores);
  elementList.appendChild(newStoreSales);
  elementMain.appendChild(elementList);
}



//=======================================================================

// Put stores into an array
// var stores = ['1st and Pike', 'SeaTac', 'Seattle Center', 'Capitol Hill', 'Alki'];

// // Find Main
// var elementMain = document.getElementById ('main');

// for (var s=0; s < stores.length; s++) {

//   // Add stores to LI
//   var newStores = document.createElement('h2');

//   // Set the Text Content to the Sales Data
//   newStores.textContent = stores[s];

//   // Append LI as a Child to UL
//   elementMain.appendChild(newStores);
// }

// var elementList = document.getElementById ('list');

// // Store each of the sales data into LI
// var storeData = [PikeAnd1st.TotalSalesPike, SeaTac.TotalSalesSeaTac, SeaCenter.TotalSalesSeaCenter, CapitolHill.TotalSalesCapitolHill, Alki.TotalSalesAlki];

// for (var i=0; i < storeData.length; i++) {

//   // Add Sales Data to LI
//   var newStoreSales = document.createElement('li');

//   // Set the Text Content to the Sales Data
//   newStoreSales.textContent = storeData[i];

//   // Append LI as a Child to UL
//   elementList.appendChild(newStoreSales);
// }

// ======================================================================


//Find UL list

// Put stores into an array
// var stores = ['1st and Pike', 'SeaTac', 'Seattle Center', 'Capitol Hill', 'Alki'];

// // Find Main
// var elementMain = document.getElementById ('main');

// for (var s=0; s < stores.length; s++) {

//   // Add stores to LI
//   var newStores = document.createElement('h2');

//   // Set the Text Content to the Sales Data
//   newStores.textContent = stores[s];

//   // Append LI as a Child to UL
//   elementMain.appendChild(newStores);
// }


// // Find UL list
// var elementList = document.getElementById ('list');

// // Store each of the sales data into LI
// for (var i=0; i < PikeAnd1st.TotalSalesPike.length; i++) {

//   // Add Sales Data to LI
//   var newSalesPike = document.createElement('li');

//   // Set the Text Content to the Sales Data
//   newSalesPike.textContent = PikeAnd1st.TotalSalesPike[i];

//   // Append LI as a Child to UL
//   elementList.appendChild(newSalesPike);
// }

// // Find UL list2
// var elementList2 = document.getElementById ('list2');

// // Store each of the sales data into LI
// for (var p=0; p < SeaTac.TotalSalesSeaTac.length; p++) {

//   // Add Sales Data to LI
//   var newSalesSeaTac = document.createElement('li');

//   // Set the Text Content to the Sales Data
//   newSalesSeaTac.textContent = SeaTac.TotalSalesSeaTac[p];

//   // Append LI as a Child to UL
//   elementList2.appendChild(newSalesSeaTac);
// }

// // Find UL list3
// var elementList3 = document.getElementById ('list3');

// // Store each of the sales data into LI
// for (var h=0; h < SeaCenter.TotalSalesSeaCenter.length; h++) {

//   // Add Sales Data to LI
//   var newSalesSeaCenter = document.createElement('li');

//   // Set the Text Content to the Sales Data
//   newSalesSeaCenter.textContent = SeaCenter.TotalSalesSeaCenter[h];

//   // Append LI as a Child to UL
//   elementList3.appendChild(newSalesSeaCenter);
// }

// // Find UL list4
// var elementList4 = document.getElementById ('list4');

// // Store each of the sales data into LI
// for (var k=0; k < CapitolHill.TotalSalesCapitolHill.length; h++) {

//   // Add Sales Data to LI
//   var newSalesCapitolHill = document.createElement('li');

//   // Set the Text Content to the Sales Data
//   newSalesCapitolHill.textContent = CapitolHill.TotalSalesCapitolHill[k];

//   // Append LI as a Child to UL
//   elementList4.appendChild(newSalesCapitolHill);
// }

// // Find UL list5
// var elementList5 = document.getElementById ('list5');

// // Store each of the sales data into LI
// for (var j=0; j < Alki.TotalSalesAlki.length; j++) {

//   // Add Sales Data to LI
//   var newSalesAlki = document.createElement('li');

//   // Set the Text Content to the Sales Data
//   newSalesAlki.textContent = Alki.TotalSalesAlki[j];

//   // Append LI as a Child to UL
//   elementList5.appendChild(newSalesAlki);
// }
