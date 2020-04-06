
function buildPlot() {
d3.json("samples.json").then(function(data){
console.log(data);
var sampleValue = data.dataset.sample_values;
var otuId = data.dataset.otu_ids;
var otuLabels = data.dataset.otu_labels;
console.log(sampleValue)
var trace = {
    
    x: sampleValue,
    y: otuId,
    type: "bar"
};

var data = [trace];
var layout = {
    title: "Plot"
};

Plotly.newPlot("plot", data, layout);




























});
};
buildPlot();