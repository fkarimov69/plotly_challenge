
function makePlots(sample) {





d3.json("samples.json").then(function(data){
    // console.log(data);
    var samples=data.samples;
    var resultArray = samples.filter(sampleObj = sample => sampleObj.sample_values = sample);
    // console.log(resultArray)
  var result = resultArray[0];
    var sampleValue = result.sample_values;
    var otuID = result.otu_ids;
    var otuLabels = result.otu_labels;

    
        // otuId.sort(function(a, b){return b - a})
        // var otuId1 = otuId.slice(0,10)
        var otu_ids = result.otu_ids
        var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse()
        // console.log(yticks);
    // console.log(otuId);




var trace = {
    
    x: sampleValue,
    y: yticks,
    type: "bar",
    text: otuLabels,
    orientation: 'h',
    
    };

var data = [trace];
var layout = {
    title: "Top 10 Bacteria Cultures Found",
    margin: { t: 30, l: 150 },
  
};

Plotly.newPlot("bar", data, layout);
});
d3.json("samples.json").then(function(data){
    // console.log(data);
    var samples=data.samples;
    var resultArray = samples.filter(sampleObj = sample => sampleObj.sample_values = sample);
    // console.log(resultArray)
  var result = resultArray[0];
    var sampleValue = result.sample_values;
    var otuId = result.otu_ids;
    var otuLabels = result.otu_labels;

    // console.log(otuId);
var trace1 = {
    
    x: otuId,
    y: sampleValue,
    text: otuLabels,
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
};
function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");
  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    makePlots(firstSample);
    buildMetadata(firstSample);
  });
}


    function buildMetadata(sample) {
      console.log(sample)
    d3.json("samples.json").then(function(data) {
      // console.log(data);
      var metadata = data.metadata;
      // console.log(metadata);
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      console.log(result)
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
      // Use `Object.entries` to add each key and value pair to the panel
    
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    
    });
  };

  init();

  function optionChanged(newSample) {
    console.log("box cha",newSample);
    makePlots(newSample)
    buildMetadata(newSample)

}





















// // });
// // };
// // buildPlot();