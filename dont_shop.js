
$(document).ready(function(){
	$('#Calculate').on("click", function(){
		$('#downtown').append(downtown.hour());
		$('#capitol_hill').append(capitolHill.hour());
		$('#south_lake_union').append(southLakeUnion.hour());
		$('#wedgewood').append(wedgewood.hour());
		$('#ballard').append(ballard.hour());
		$('#results').append("<p>Downtown Total: "+downtown.day()+"<p>")
		$('#results').append("<p>Capitol Hill Total: "+capitolHill.day()+"<p>")
		$('#results').append("<p>South Lake Union Total: "+southLakeUnion.day()+"<p>")
		$('#results').append("<p>Wedgewood Total: "+wedgewood.day()+"<p>")
		$('#results').append("<p>Ballard Total: "+ballard.day()+"<p>")
	});
})


var Shop = function (location, minCust, maxCust, avgPerCust, hoursOfOp) {
	this.location = location;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.avgPerCust = avgPerCust;
	this.hoursOfOp = hoursOfOp;
	this.hour = function(){
		var hour = 0;
		var allHours = ""
		for (hour = 0; hour < this.hoursOfOp; hour++) {
			var randomNumberOfCustomers = Math.floor(Math.random() * (this.maxCust-this.minCust))+this.minCust;
			var donutsThisHour = Math.round(randomNumberOfCustomers *this.avgPerCust);
			var toAppend = "<td>"+donutsThisHour+"</td>";
			allHours += toAppend;
		};
		for (hour = this.hoursOfOp; hour < 24; hour++) {
			var toAppend = "<td></td>";
			allHours += toAppend;
		};
		return $(allHours);
	};
	this.day = function () {
		var hours = 0;
		var randomNumberOfCustomers = 0;
		var donutsNeededPerHour = 0;
		var totalDonutsNeeded = 0;
		while (hours <= this.hoursOfOp) {
			hours++;
			randomNumberOfCustomers = Math.floor(Math.random() * (this.maxCust-this.minCust))+this.minCust;
			donutsNeededPerHour = Math.round(randomNumberOfCustomers *this.avgPerCust);
			totalDonutsNeeded += donutsNeededPerHour;
		};
		return totalDonutsNeeded;
	}
}


var downtown = new Shop ("Downtown", 8, 43, 4.5, 8);
var capitolHill = new Shop ("Capitol Hill", 4, 37, 2, 24);
var southLakeUnion = new Shop ("South Lake Union", 9, 23, 6.33, 10);
var wedgewood = new Shop ("Wedgewood", 2, 28, 1.25, 7); 
var ballard = new Shop ("Ballard", 8, 58, 3.75, 10);


