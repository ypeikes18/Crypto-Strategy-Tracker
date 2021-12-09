export default class Chart {

    constructor(data, xName, yName, title) {
        this.data = data;
        this.xName = xName;
        this.yName = yName;
        this.title = title;
    }

    render() {
        // one source claims the array below is how d3 takes values
        //set dimensions of the graph by subtracting the margins from the dimensions of the canvas
        var margin = {top: 10, right: 20, bottom: 30, left: 80};
        var width = 900 - margin.left - margin.right;
        var height = 400 - margin.top - margin.bottom;

        // create an svg to be the canvas element, append it and set attributes
        var svg = d3.select("#chart")
                    .append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .attr("border","2px solid red")
                    .append("g") // creates am element on the canvas for the actual graph
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        
        

        const x = d3.scaleTime()
                    .domain(d3.extent(this.data, d => d.Date))
                    //   .domain([0,100])
                      .range([ 0, width ]);
            
        svg.append("g")
               .attr("transform", "translate(0," + height +")")
               .call(d3.axisBottom(x));

        const test = d3.extent(this.data, d => d.USD_total_volume);

        window.test = test;
        window.data = this.data;
          
        var y = d3.scaleLinear()
                  
                  .domain(d3.extent(this.data, d => d.USD_total_volume))
                //   .domain([0,100])
                  .range([ height, 0 ]);
     
        svg.append("g")
               .call(d3.axisLeft(y));

        
        //creates the functions for extracting the data from each object and assiging to x or y
        const xValue = d => d.Date;
        const yValue = d => d.USD_total_volume;
        
        // creates a line object by passing both of the above functions
        const lineMaker = d3.line()
                    .x(xValue)
                    .y(yValue);

        svg.append("path")
            .datum(this.data)
            .attr('d',lineMaker)
            .attr("transform", "translate(" + 100 + "," + 100 + ")")
            .style("fill", "none")
            .style("stroke-width", 1)
            .style("stroke", "red")

    

    }

    defaultData(){

    }

}







