// from data.js
var tableData = data;

// My code starts here

// Select the filter table button that pushes the user's input
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  //Store available data in an object
  var table = d3.select("tbody");

  //Erase existing rows to get a black space again
  table.selectAll("tr").remove();
  table.selectAll("td").remove();

  //Save user's input in an object
  var inputElement = d3.select("#datetime");
  var inputDate = inputElement.property("value");

  //Create the table with the available information 

  data.forEach(function(tableData) {

    if(tableData.datetime == inputDate){
    
      var row = table.append("tr");
      Object.entries(tableData).forEach(function([key, value]) {
      
        var cell = row.append("td");
        cell.text(value);
      });
    }
  });
});
