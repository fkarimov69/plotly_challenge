
d3.json("samples.json").then(function(data){
    console.log(data);
    var samples=data.samples;
    var resultArray = samples.filter(sampleObj = sample => sampleObj.sample_values = sample);
    console.log(resultArray)
  var result = resultArray[0];
    var sampleValue = result.sample_values;
    var otuId = result.otu_ids;
    var otuLabels = result.otu_labels;

    
        otuId.sort(function(a, b){return b - a})
        var otuId1 = otuId.slice(0,10)

    console.log(otuId1);




var trace = {
    
    x: sampleValue,
    y: otuId1,
    type: "bar",
    text: otuLabels,
    orientation: 'h',
    width: 15,
    };

var data = [trace];
var layout = {
    title: "Plot",
    xaxis: {title: "Sample Values",
            range: [0,140]
            
                },
    yaxis: {
            range: [2700,3000],
                },
    autosize: false,
    width: 700,
    height: 500,
    bargap: 0.5
};

Plotly.newPlot("plot", data, layout);

d3.json("samples.json").then(function(data){
    console.log(data);
    var samples=data.samples;
    var resultArray = samples.filter(sampleObj = sample => sampleObj.sample_values = sample);
    console.log(resultArray)
    var result = resultArray[0];
    var sampleValue = result.sample_values;
    var otuId = result.otu_ids;
    var otuLabels = result.otu_labels;

    
        // otuId.sort(function(a, b){return b - a})
        // var otuId1 = otuId.slice(0,10)

    console.log(otuId);
var trace1 = {
    
    x: otuId,
    y: sampleValue,
    mode: 'markers',
    marker: {
        color: otuId,
        size: sampleValue
    }
    // text: otuLabels
   
    };
var data= [trace1];
var layout = {
        title: 'Marker Size',
        showlegend: false,
        height: 600,
        width: 600
      };
      
      Plotly.newPlot('plot', data, layout);
});
