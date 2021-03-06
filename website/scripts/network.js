


anychart.data.loadJsonFile("../data/character_links.json", function (data) {
    // create a chart from the loaded data according to specific play
    let play_focus = "A Midsummer Night's Dream";

    // create a chart from the loaded data
    play = PlayOfInterest(data, play_focus);
    var chart = anychart.graph(play);

    // set the over gap of edges
    chart.interactivity().hoverGap(30);

    //anable scroll on mouse wheel
    //chart.interactivity().scrollOnMouseWheel(true);

    chart.interactivity().zoomOnMouseWheel(false);

    // set size of the chart
    chart.bounds(0, 0, '100%', '100%'); 
    
    // set the title
    chart.title("Network Graph showing the links between characters in the play " + "'" + play_focus + "'");

    // enable edge arrows and set arrow size
    /*var arrows = chart.edges().arrows();
    arrows.enabled(true);
    arrows.size(10);*/

    // enable the labels of nodes
    var label_nodes = chart.nodes().labels();
    label_nodes.enabled(true);
    // configure the labels of nodes
    label_nodes.format("{%id}");
    label_nodes.fontSize(12);
    label_nodes.fontWeight(600);

    // enable the labels of edges
    var label_edges = chart.edges().labels();
    label_edges.enabled(true); 
    // configure the labels of nodes
    label_edges.format("{%label}");
    label_edges.fontSize(12);
    label_edges.fontWeight(500);

    //configure tooltips of edges
    chart.edges().tooltip().useHtml(true);
    chart.edges().tooltip().format("<span style='font-weight:bold; font-family:fantasy'>{%from} to {%to}</span><br><span style='font-family:fantasy'>{%label}</span>");

    //configure tooltips of nodes
    chart.nodes().tooltip().useHtml(true);
    chart.nodes().tooltip().format("<span style='font-weight:bold; font-family:fantasy'>Name: </span><span style='font-family:fantasy'>&nbsp;&nbsp;&nbsp;{%id}</span><br><br><span style='font-weight:bold; font-family:fantasy'>Role: </span><span style= 'font-family:fantasy'>&nbsp;&nbsp;&nbsp;{%role}</span><br><br><span style='font-weight:bold; font-family:fantasy'>Description: </span><br><br><span style= 'font-family:fantasy'>{%description}</span>");

    // set the size of nodes
    chart.nodes().normal().height(25);
    chart.nodes().hovered().height(45);
    chart.nodes().selected().height(45);

    // set the fill of nodes
    chart.nodes().normal().fill("{%fill}");
    chart.nodes().hovered().fill("{%fill}");
    chart.nodes().selected().fill("{%fill}");

    // set the background
    //chart.background().fill("rgb(245, 197, 209)");
    
    // set the shape of the nodes
    chart.nodes().hovered().shape("star5");
    chart.nodes().selected().shape("star5");

    // set the stroke of nodes

    chart.nodes().normal().stroke("blue");
    chart.nodes().hovered().stroke("#333333", 3);
    chart.nodes().selected().stroke("#333333", 3);

    // draw the chart
    chart.container("graph").draw();

    function PlayOfInterest (data, play_of_interest) {
        let play = {};

        let nodes = [];
        for (let n in data["nodes"]) {

            if (data["nodes"][n]["play_name"] == play_of_interest) {
                nodes.push(data["nodes"][n]);
            }
            play["nodes"] = nodes;
        }

        let edges = [];
        for (let e in data["edges"]) {
            
            if (data["edges"][e]["play_name"] == play_of_interest) {
                edges.push(data["edges"][e]);
            }
            play["edges"] = edges;
        }
        console.log(play);
        return play;
    }

    //_________________________________________________________________________//

    // initialize possible play's selection
    var allPlays = ["A Midsummer Night's Dream", "Hamlet", "Julius Caesar", "King Lear", "Macbeth", "Othello", "Romeo and Juliet", "The Merchant of Venice"];

    // Initialize the button
    var dropdownButton = d3.select("#networkselection").append('select');

    // add options to the button
    dropdownButton.selectAll('myOptions')
                            .data(allPlays)
                        .enter()
                            .append("option")
                        .text(function (d) { return d;}) // text showed in the menu
                        .attr("value", function (d) { return d;}); // corresponding value returned by the button

        
    // function that update the chart
    function updateChart(selectedPlay) {
        // chart with the new data
        chart.data(PlayOfInterest(data, selectedPlay));
        chart.title("Network Graph showing the links between characters in the play " + "'" + selectedPlay + "'");
    }

    // when the button is changed, run the updateChart function
    dropdownButton.on("change", function(d) {
        // recover the option that has been chosen
        var selectedPlay = d3.select(this).property("value");

        // run the updateChart function with this selected play
        updateChart(selectedPlay);
    }); 
    
});