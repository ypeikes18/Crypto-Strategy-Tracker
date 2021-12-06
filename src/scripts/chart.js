class Chart {

    constructor(xValues, yValues, xName, yName) {
        this.xValues = xValues;
        this.yValues = yValues;
        this.xName = xName;
        this.yName = yName;

    }

    render() {
        const width = 500;
        const height = 400;
        
        let svgContainer = d3
            .select("body").append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid red");

        let xScale = d3.scaleLinear()
                       .domain([0,100])
                       .range([0, width]);

        let yScale = d3.scaleLinear()
                       .domain([0,100])
                       .range([0, height]);
    }

}

module.exports = Chart;

const xfakeData = [1,2,3,4,5 ];
const yfakeData = [1,4,9,16,25];