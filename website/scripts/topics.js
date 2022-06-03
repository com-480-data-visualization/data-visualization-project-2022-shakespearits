width = 1000;
height = 500;

margin = {
    top: 0,
    right: 100,
    bottom: 10,
    left: 100
};

//////// Read csv file ////////
d3.csv('../data/topics_per_player_per_act.csv').then((data) => {

    // list all the plays in the dataset
    var allPlays = [...new Set(data.map(d => d.Play))]; 

    // create a dropdown button with those plays
    var dropdownButton = d3.select("#play_selection").append('select');
    dropdownButton.selectAll('myOptions')
        .data(allPlays)
        .enter()
        .append("option")
        .text(function (d) { return d;})
        .attr("value", function (d) { return d;});

    // play by default
    let playName = "Othello";

    //////// Create scales ////////
    let xDomain = data.filter(function(d){ return d.Play == playName}).map(d => d.Act_Scene);
    const xScale = d3.scalePoint()
        .domain(xDomain)
        .range([margin.left, width - margin.right - margin.left - 100]);

    const rScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([0, 50]);

    const topicColors = [
        {topic: 'love', color: '#d81e05'},
        {topic: 'family', color: '#558b2f'},
        {topic: 'war', color: 'black'},
        {topic: 'power', color: '#ffab00'}
    ];

    const colorScale = d3.scaleOrdinal()
        .domain(['love', 'family', 'war', 'power'])
        .range(['#d81e05', '#c5e1a5', 'black', '#ffab00']);


    //////// Create plot ////////
    playBeeswarmPlot(playName);


    function playBeeswarmPlot(playName) {

        d3.select("svg").remove();

        var svg = d3.select('#beeswarmchart')
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g").attr("class", "top-container");

        topicLegend = svg.selectAll('g')
            .data(topicColors).enter()
            .select('g')
                // translate each group to the right based on its index
                 .attr('transform', (d,i) => 'translate(' + (100 * i) + ',0)')
        topicLegend.selectAll('circle')
                 .data(topicColors)
                 .join('circle')
                 .attr('r', 20)
                 .attr('cx', 10)
                 .attr('cy', 40)
                 .attr('fill', (d) => d.color)

        let xDomain = data.filter(function(d){ return d.Play == playName}).map(d => d.Act_Scene);
        const xScale = d3.scalePoint()
        .domain(xDomain)
        .range([margin.left, width - margin.bottom]);

        xAxis = d3.axisBottom(xScale)

        // render x axis
        axis = svg.append('g')
            .attr('class', 'beeswarm-xAxis')
            .attr('transform', `translate(0,${height-margin.bottom*5})`)
            .call(xAxis)
                //.select('.domain').remove()
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("transform", "rotate(-25)")

        // scale the topic values (radius of the circle)
        data.forEach(d => d.r = rScale(d.value))

        // recompute force simulation
        const simulation = d3.forceSimulation(data.filter(function(d){ return d.Play == playName}))
            .force('x', d3.forceX().strength(0.2).x(d => xScale(d.Act_Scene)) )
            .force('y', d3.forceY().strength(0.05).y(margin.top + height / 2) )
            .force('collide', d3.forceCollide().radius(d => d.r + 1 ).strength(1) )
    
        // update the chart
        const g = svg.selectAll('g.node')
            .data(simulation.nodes())
            .join('g')
            .attr('class', 'node')
            .call( g => g
                .append('circle')
                .attr('r', d => d.r)
                .style('fill', d => colorScale(d.Category))
                .style('opacity', 0.80)
            )
            .call( g => g
                .append('circle')
                    .attr('r', d => d.r - 1)
                    .style('stroke', d => colorScale(d.Category))
                    .attr('stroke-width', 3)
                    .style('fill', 'none')
                    .style('opacity', 1)
            )
            .call( g => g
                .on("mouseover", function(d) { 
                //console.log(d.Player, d.Act_Scene, d.value, d.Sentence); 
                //d = d.srcElement.__data__
                //Move the tooltip to the right location
                tooltipActScene.text(`Act ${d.Act} | Scene ${d.Scene}`);
                tooltipPlayer.text(d.Player);
                tooltipTopic.text("Topic expression: " + Math.round(d.value));
                tooltipSentence.text("One sentence: " + d.Play);
                //Find the largest title
                var maxSize = Math.max(document.getElementById("tooltipActScene").getComputedTextLength(), 
                    document.getElementById("tooltipPlayer").getComputedTextLength(), 
                    document.getElementById("tooltipTopic").getComputedTextLength(),
                    document.getElementById("tooltipSentence").getComputedTextLength());
                /*tooltipBackground
                    .transition().duration(100)
                    .attr("x", -0.5 * maxSize*1.2)
                    .attr("width", maxSize*1.2)*/
                tooltipContainer
                    .transition().duration(200)
                    .attr("transform", "translate(" + d.x + "," + (d.y + 40) + ")")
                    .style("opacity", 0.8);
                })
            )

            g.on("mouseout", function(d) {
                //Hide the tooltip
                tooltipContainer
                    .transition().duration(200)
                    .style("opacity", 0);
            });

        simulation.on("tick", () => g.attr('transform', d => `translate(${d.x},${d.y})`) )

        //////// Add Tooltip ////////
        var tooltipContainer = svg.append("g")
        .attr("class", "tooltip-container")
        .attr("transform", "translate(" + 0 + "," + 0 + ")")
        .style("opacity", 0);

        var tooltipBackground = tooltipContainer.append("rect")
            .attr("class", "tooltip-background")
            .attr("x", 0)
            .attr("y", -28)
            .attr("width", 0)
            .attr("height", 100);

        var tooltipActScene = tooltipContainer.append("text")
            .attr("class", "tooltip-act-scene")
            .attr("id", "tooltipActScene")
            .attr('color', 'blue')
            .attr("y", -4)
            .text("");

        var tooltipPlayer = tooltipContainer.append("text")
            .attr("class", "tooltip-player")
            .attr("id", "tooltipPlayer")
            .attr("y", 17)
            .text("");

        var tooltipTopic = tooltipContainer.append("text")
            .attr("class", "tooltip-topic")
            .attr("id", "tooltipTopic")
            .attr("y", 42)
            .text("");
            
        var tooltipSentence = tooltipContainer.append("text")
            .attr("class", "tooltip-sentence")
            .attr("id", "tooltipSentence")
            .attr("y", 55)
            .text("");
    }

    //////// Listen to the dropdown button ////////
    dropdownButton.on("change", function(d) {
        var playName = d3.select(this).property("value");
        playBeeswarmPlot(playName);
    });

    //////// Legends ////////
    const topicLegendData = [
        {topic: 'love', color: '#d81e05'},
        {topic: 'family', color: '#558b2f'},
        {topic: 'war', color: 'black'},
        {topic: 'power', color: '#ffab00'}
    ];
 /*
    var legendSVG = d3.select('#topicLegend')
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const topicLegend = d3.select(legendSVG)
        .selectAll('g')
        .data(topicLegendData).enter()
        .select('g')
            // translate each group to the right based on its index
             .attr('transform', (d,i) => 'translate(' + (100 * i) + ',0)')

    topicLegend.selectAll('circle')
        .data(topicLegendData)
        .join('circle')
            .attr('r', 20)
            .attr('cx', 10)
            .attr('cy', 40)
            .attr('fill', (d) => d.color) */
  


    
}); //end d3.csv
