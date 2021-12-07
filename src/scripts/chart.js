class Chart {

    constructor(xValues, yValues, xName, yName, title) {
        this.xValues = xValues;
        this.yValues = yValues;
        this.xName = xName;
        this.yName = yName;
        this.title = title;
    }

    render() {

            // set the dimensions and margins of the graph
        var margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleLinear()
        .domain([0,100])
        .range([ 0, width ]);
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

        // Add Y axis
        var y = d3.scaleLinear()
        .domain([0,100])
        .range([ height, 0 ]);
        svg.append("g")
        .call(d3.axisLeft(y));

        // Add the line
        svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )


    }

}

// module.exports = Chart;


const xfakeData = [1,2,3,4,5 ];
const yfakeData = [1,4,9,16,25];



let graph = new Chart(xfakeData, yfakeData, 'Days', 'APR', 'Strategy');



graph.render();




