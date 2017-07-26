//Tell google what do you want to load
//We want to load charts
//You need to specify what version you want to load and also any packages which you might want to include aswell
google.charts.load('current', {'packages':['corechart']});

//If everything is all good what do you want to do when you have loaded
//all the required packages
//Once it has all loaded we want to run the drawChart function
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	//What the chart needs is data
	//It is looking for a table of data which has collumns and rows
	//You need to create the table and specify what these are
	var data = new google.visualization.DataTable();
	//When creating your columns you have to tell it what type of data should be in this column and the column name
	data.addColumn('string', 'Car Make');
	data.addColumn('number', 'Count');
	//This is one way of how to add rows into your table
	//Adding them all at once using an array is good if you know exactly what your entries are
	//You wont be able to do this if there is dynamic data
	//The order you put them in must also line up with the order the columns are created
	data.addRows([
		['Pontiac', 21],
		['GMC', 45],
		['Mercedes-Benz', 57],
		['Toyota', 50],
		['Honda', 16]
	]);

	//Set what options you want for your map 
	//There are different options for all the different types of maps
	//Have a look through the google Charts API to see what options are avaiable
	var options = {
		'title':'How many cars in the show room',
		'width': 800,
		'height': 800
	}

	//We want to create a new instance of a chart
	//Here is where we specify what type of chart we want to load
	//We also need to tell it where to load the map. In the HTMl there is a blank div with an id of chart
	var chart = new google.visualization.PieChart(document.getElementById('chart'));
	//Load the chart with the data and options
	chart.draw(data, options);


}