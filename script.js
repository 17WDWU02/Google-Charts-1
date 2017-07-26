google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart(){

	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Car Make');
	data.addColumn('number', 'Count');
	data.addRows([
		['Pontiac', 21],
		['GMC', 45],
		['Mercedes-Benz', 57],
		['Toyota', 50],
		['Honda', 16]
	]);

	var options = {
		'title':'How many cars in the show room',
		'width': 800,
		'height': 800
	}

	var chart = new google.visualization.PieChart(document.getElementById('chart'));
	chart.draw(data, options);


}