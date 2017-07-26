//This time we are loading the data through an array which we are creating at the start of the project.
var array = [
	{
	  Year: "2012",
	  Sales: 1506,
	  Expenses: 1249,
	  Profit: 1826
	}, {
	  Year: "2013",
	  Sales: 345,
	  Expenses: 544,
	  Profit: 1955
	}, {
	  Year: "2014",
	  Sales: 1017,
	  Expenses: 181,
	  Profit: 967
	}, {
	  Year: "2015",
	  Sales: 1534,
	  Expenses: 258,
	  Profit: 399
	}, {
	  Year: "2016",
	  Sales: 1242,
	  Expenses: 1980,
	  Profit: 109
	}
]


//You will load everything the same way as the previous chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Sales');
	data.addColumn('number', 'Expenses');
	data.addColumn('number', 'Profits')
	//Instead of data.addRows we will be looping over the array and adding just a single row for each iteration
	for (var i = 0; i < array.length; i++) {
		data.addRow([
			array[i].Year, 
			array[i].Sales,
			array[i].Expenses,
			array[i].Profit
			])
	};

	//For your options you can also add animations to add abit of 'flare' to your chart
	var options = {
		title: 'Company Annual Spend',
		bars: 'horizontal',
		animation: {
			startup: true,
			duration: 1000,
			easing: 'out'
		}
	};

	var chart = new google.visualization.BarChart(document.getElementById('chart'));
	chart.draw(data, options);

}


















