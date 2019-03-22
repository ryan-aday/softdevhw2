
// Source: https://github.com/datasets/sea-level-rise
var data = [];

var years = [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014];
var values = [6.297493046, 6.310933553, 6.452568661, 6.62763131, 6.733920367, 6.865806069, 6.848689771, 6.920582014, 7.087460011,
          7.319697525, 7.488352718, 7.507932839, 7.644563144, 7.697420009, 7.70214715, 7.90736541, 8.04635409, 8.122972567,
          8.053065004, 8.457057629, 8.546648227, 8.663700393];

for (var index = 0; index < years.length; index++){
  data[index] = [years[index], values[index]];
};

var width = 420,
    height = 120;

var x = d3.scaleLinear()
    .domain([d3.min(years) - 1, d3.max(years) + 1])
    .range([0, width]);

var y = d3.scaleLinear()
    .domain([d3.min(values) - 1, d3.max(values) + 1])
    .range([0, height]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", height);

var plot = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", function(d) {
      return 'translate(' + x(d[0]) + ',' + y(d[1]) + ')';
     })
     .attr('text', function(d){return d[1];});

plot.append('rect')
  .attr('width', 4)
  .attr('height', 4);

var x_scale = d3.scaleLinear()
  .domain([d3.min(years), d3.max(years)])
  .range([0,width-10]);

var y_scale = d3.scaleLinear()
  .domain([d3.min(values), d3.max(values)])
  .range([0,height-10]);

var x_axis = d3.axisBottom()
  .scale(x_scale); //this be a fxn
  // .orient('left');

var y_axis = d3.axisLeft()
  .scale(y_scale);

chart.append('g')
  .attr('transform', 'translate(10,100)')
  .call(x_axis);

chart.append('g')
  .attr('transform', 'translate(10,0)')
  .call(y_axis);
