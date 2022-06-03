

anychart.data.loadJsonFile(
    "../data/words_plays.json",
    function (data) {
      var dataSet = [{"player":"Hamlet","x":"man","value":34,"category":"noun"},{"player":"Hamlet","x":"king","value":33,"category":"noun"},{"player":"Hamlet","x":"mother","value":31,"category":"noun"},{"player":"Hamlet","x":"sir","value":30,"category":"noun"},{"player":"Hamlet","x":"father","value":20,"category":"noun"},{"player":"Hamlet","x":"night","value":19,"category":"noun"},{"player":"Hamlet","x":"time","value":18,"category":"noun"},{"player":"Hamlet","x":"love","value":16,"category":"noun"},{"player":"Hamlet","x":"soul","value":16,"category":"noun"},{"player":"Hamlet","x":"nature","value":14,"category":"noun"},{"player":"Hamlet","x":"heart","value":14,"category":"noun"},{"player":"Hamlet","x":"play","value":14,"category":"noun"},{"player":"Hamlet","x":"earth","value":13,"category":"noun"},{"player":"Hamlet","x":"life","value":13,"category":"noun"},{"player":"Hamlet","x":"eyes","value":12,"category":"noun"},{"player":"Hamlet","x":"players","value":12,"category":"noun"},{"player":"Hamlet","x":"matter","value":11,"category":"noun"},{"player":"Hamlet","x":"death","value":10,"category":"noun"},{"player":"Hamlet","x":"thing","value":10,"category":"noun"},{"player":"Hamlet","x":"friends","value":10,"category":"noun"},{"player":"Hamlet","x":"world","value":9,"category":"noun"},{"player":"Hamlet","x":"fellow","value":9,"category":"noun"},{"player":"Hamlet","x":"speech","value":9,"category":"noun"},{"player":"Hamlet","x":"uncle","value":8,"category":"noun"},{"player":"Hamlet","x":"tongue","value":8,"category":"noun"},{"player":"Hamlet","x":"men","value":8,"category":"noun"},{"player":"Hamlet","x":"word","value":8,"category":"noun"},{"player":"Hamlet","x":"face","value":7,"category":"noun"},{"player":"Hamlet","x":"reason","value":7,"category":"noun"},{"player":"Hamlet","x":"spirit","value":7,"category":"noun"},{"player":"Hamlet","x":"grace","value":7,"category":"noun"},{"player":"Hamlet","x":"hands","value":7,"category":"noun"},{"player":"Hamlet","x":"murder","value":7,"category":"noun"},{"player":"Hamlet","x":"villain","value":7,"category":"noun"},{"player":"Hamlet","x":"rest","value":7,"category":"noun"},{"player":"Hamlet","x":"let","value":46,"category":"verb"},{"player":"Hamlet","x":"come","value":44,"category":"verb"},{"player":"Hamlet","x":"shall","value":43,"category":"verb"},{"player":"Hamlet","x":"know","value":30,"category":"verb"},{"player":"Hamlet","x":"speak","value":21,"category":"verb"},{"player":"Hamlet","x":"look","value":17,"category":"verb"},{"player":"Hamlet","x":"hold","value":15,"category":"verb"},{"player":"Hamlet","x":"hear","value":14,"category":"verb"},{"player":"Hamlet","x":"tell","value":14,"category":"verb"},{"player":"Hamlet","x":"follow","value":13,"category":"verb"},{"player":"Hamlet","x":"set","value":13,"category":"verb"},{"player":"Hamlet","x":"think","value":12,"category":"verb"},{"player":"Hamlet","x":"play","value":11,"category":"verb"},{"player":"Hamlet","x":"pray","value":10,"category":"verb"},{"player":"Hamlet","x":"makes","value":10,"category":"verb"},{"player":"Hamlet","x":"live","value":10,"category":"verb"},{"player":"Hamlet","x":"remember","value":7,"category":"verb"},{"player":"Hamlet","x":"comes","value":7,"category":"verb"},{"player":"Hamlet","x":"sleep","value":7,"category":"verb"},{"player":"Hamlet","x":"seen","value":6,"category":"verb"},{"player":"Hamlet","x":"saw","value":6,"category":"verb"},{"player":"Hamlet","x":"bear","value":6,"category":"verb"},{"player":"Hamlet","x":"heard","value":6,"category":"verb"},{"player":"Hamlet","x":"goes","value":6,"category":"verb"},{"player":"Hamlet","x":"use","value":6,"category":"verb"},{"player":"Hamlet","x":"find","value":6,"category":"verb"},{"player":"Hamlet","x":"leave","value":6,"category":"verb"},{"player":"Hamlet","x":"drink","value":5,"category":"verb"},{"player":"Hamlet","x":"sent","value":5,"category":"verb"},{"player":"Hamlet","x":"loved","value":5,"category":"verb"},{"player":"Hamlet","x":"stand","value":5,"category":"verb"},{"player":"Hamlet","x":"takes","value":4,"category":"verb"},{"player":"Hamlet","x":"marry","value":4,"category":"verb"},{"player":"Hamlet","x":"grow","value":4,"category":"verb"},{"player":"Hamlet","x":"swear","value":4,"category":"verb"},{"player":"Hamlet","x":"like","value":36,"category":"pos"},{"player":"Hamlet","x":"good","value":35,"category":"pos"},{"player":"Hamlet","x":"well","value":34,"category":"pos"},{"player":"Hamlet","x":"play","value":25,"category":"pos"},{"player":"Hamlet","x":"heaven","value":23,"category":"pos"},{"player":"Hamlet","x":"god","value":21,"category":"pos"},{"player":"Hamlet","x":"love","value":18,"category":"pos"},{"player":"Hamlet","x":"heart","value":14,"category":"pos"},{"player":"Hamlet","x":"matter","value":12,"category":"pos"},{"player":"Hamlet","x":"fair","value":12,"category":"pos"},{"player":"Hamlet","x":"welcome","value":11,"category":"pos"},{"player":"Hamlet","x":"pray","value":10,"category":"pos"},{"player":"Hamlet","x":"friends","value":10,"category":"pos"},{"player":"Hamlet","x":"dear","value":9,"category":"pos"},{"player":"Hamlet","x":"excellent","value":8,"category":"pos"},{"player":"Hamlet","x":"no","value":62,"category":"neg"},{"player":"Hamlet","x":"villain","value":11,"category":"neg"},{"player":"Hamlet","x":"poor","value":10,"category":"neg"},{"player":"Hamlet","x":"death","value":10,"category":"neg"},{"player":"Hamlet","x":"dead","value":9,"category":"neg"},{"player":"Hamlet","x":"madness","value":8,"category":"neg"},{"player":"Hamlet","x":"hell","value":7,"category":"neg"},{"player":"Hamlet","x":"murder","value":7,"category":"neg"},{"player":"Hamlet","x":"leave","value":7,"category":"neg"},{"player":"Hamlet","x":"ghost","value":6,"category":"neg"},{"player":"Hamlet","x":"grave","value":6,"category":"neg"},{"player":"Hamlet","x":"devil","value":6,"category":"neg"},{"player":"Hamlet","x":"revenge","value":5,"category":"neg"},{"player":"Hamlet","x":"damned","value":5,"category":"neg"},{"player":"Hamlet","x":"bad","value":5,"category":"neg"}]

      var colors = anychart.scales
        .ordinalColor()
        .colors(['#e65100', '#ffab00', '#558b2f', '#d81e05']);

      // create tag cloud
      var chart = anychart.tagCloud();

      // set chart title
      chart
        .title('Hamlet')
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
