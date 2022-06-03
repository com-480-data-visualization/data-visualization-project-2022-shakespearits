

anychart.data.loadJsonFile(
    '../../data/words_plays.json',
    function (data) {
      var dataSet = anychart.data.set(data);
      var colors = anychart.scales
        .ordinalColor()
        .colors(['#26959f', '#f18126', '#3b8ad8', '#60727b', '#e24b26']);

      // create tag cloud
      var chart = anychart.tagCloud();

      // set chart title
      chart
        .title('')
        // set data with settings
        .data(dataSet)
        // set color scale
        .colorScale(colors)
        // set array of angles, by which words will be placed
        .angles([-90, 0, 90]);

      // get the color range
      var colorRange = chart.colorRange();
      // enabled color range
      colorRange
        .enabled(true)
        // sets color line size
        .colorLineSize(15);

      // set container id for the chart
      chart.container("graph");
      // initiate chart drawing
      chart.draw();

      // save normal fill function to variable
      var normalFillFunction = chart.normal().fill();
      // save hover fill function to variable
      var hoveredFillFunction = chart.hovered().fill();

      // create custom interactivity to hover colorRange
      chart.listen('pointsHover', function (e) {
        if (e.actualTarget === colorRange) {
          // if points exist
          if (e.points.length) {
            // set settings for normal state
            chart.normal({
              fill: 'black 0.1'
            });
            // set settings for hovered state
            chart.hovered({
              // get fill color ratio by its number and set fill to hovered state
              fill: chart
                .colorScale()
                .valueToColor(e.point.get('category'))
            });
          } else {
            // set function for normal state
            chart.normal({
              fill: normalFillFunction
            });
            // set function for hovered state
            chart.hovered({
              fill: hoveredFillFunction
            });
          }
        }
      });
    }
);

      var allPlays = ["A Midsummer Night's Dream", "Hamlet", "Julius Caesar", "King Lear", "Macbeth", "Othello", "Romeo and Juliet", "The Merchant of Venice"];

      // Initialize the button
      var dropdownButton = d3.select("#playerselection").append('select');

      // add options to the button
      dropdownButton.selectAll('myOptions')
                              .data(allPlays)
                          .enter()
                              .append("option")
                          .text(function (d) { return d;}) // text showed in the menu
                          .attr("value", function (d) { return d;}); // corresponding value returned by the button
