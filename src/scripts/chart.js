export class Chart {

    constructor(yValues, xName, yName, title) {
        this.yValues = yValues;
        this.xName = xName;
        this.yName = yName;
        this.title = title;
    }

    render() {
        // one source claims the array below is how d3 takes values
        //set dimensions of the graph by subtracting the margins from the dimensions of the canvas
        var margin = {top: 10, right: 20, bottom: 30, left: 50};
            width = 600 - margin.left - margin.right;
            height = 400 - margin.top - margin.bottom;

        // create an svg to be the canvas element, append it and set attributes
        var svg = d3.select("#chart")
                    .append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .attr("border","2px solid red")
                    .append("g") // creates am element on the canvas for the actual graph
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        var x = d3.scaleTime()
                      .domain([0,100])
                      .range([ 0, width ]);
            
        svg.append("g")
               .attr("transform", "translate(0," + height +")")
               .call(d3.axisBottom(x));

        
        var y = d3.scaleLinear()
               .domain([-100,500])
               .range([ height, 0 ]);
     
        svg.append("g")
               .call(d3.axisLeft(y));

        // svg.select("path")
        //     .attr("class", "line")
        //     .data(this.yValues)
        //     .append("path")
        //     .style("fill", "none")
        //     .style("stroke-width", 1)
        //     .style("stroke", "red")



    }

}








