var chart;
anychart.onDocumentReady(function () {
  var rawData = [
    { id: 'tragedy', name: 'Tragedy' },
    { id: 'comedy', name: 'Comedy' },
    { id: 'history', name: 'History' },
    { id: 'group4', name: 'Group 4' },

    { id: 'subgroup11', name: 'All\'s Well That Ends Well', parent: 'comedy', value: 1, date:'1601-1608' },
    { id: 'subgroup12', name: 'As You Like It', parent: 'comedy', value: 1, date:'1599' },
    { id: 'subgroup13', name: 'The Comedy of Errors', parent: 'comedy', value: 1, date:'1592-1594' },
    { id: 'subgroup14', name: 'Love\'s Labour\'s Lost', parent: 'comedy', value: 1, date:'1595-1596' },
    { id: 'subgroup15', name: 'Measure for Measure', parent: 'comedy', value: 1, date:'1604' },
    { id: 'subgroup16', name: 'The Merchant of Venice', parent: 'comedy', value: 1, date:'1596-1597' },
    { id: 'subgroup17', name: 'Merry Wives of Windsor', parent: 'comedy', value: 1, date:'1602' },
    { id: 'subgroup18', name: 'A Midsummer Night\'s Dream', parent: 'comedy', value: 1, date:'1594-1595' },
    { id: 'subgroup19', name: 'Much Ado about Nothing', parent: 'comedy', value: 1, date:'1598-1599' },
    { id: 'subgroup111', name: 'Taming of the Shrew', parent: 'comedy', value: 1, date:'1594' },
    { id: 'subgroup112', name: 'Tempest', parent: 'comedy', value: 1, date:'1610-1611' },
    { id: 'subgroup113', name: 'Twelfth Night', parent: 'comedy', value: 1, date:'1600-1601' },
    { id: 'subgroup114', name: 'Two Gentlemen of Verona', parent: 'comedy', value: 1, date:'unknown' },
    { id: 'subgroup115', name: 'The Winter\s Tale', parent: 'comedy', value: 1, date:'1610-1611' },

    { id: 'subgroup21', name: 'Antony and Cleopatra', parent: 'tragedy', value: 1, date:'1606-1608' },
    { id: 'subgroup22', name: 'Coriolanus', parent: 'tragedy', value: 1, date:'1607' },
    { id: 'subgroup23', name: 'Cymbeline', parent: 'tragedy', value: 1, date:'1611' },
    { id: 'subgroup24', name: 'Hamlet', parent: 'tragedy', value: 1, date:'1598-1601' },
    { id: 'subgroup25', name: 'Julius Caesar', parent: 'tragedy', value: 1, date:'1599' },
    { id: 'subgroup26', name: 'King Lear', parent: 'tragedy', value: 1, date:'1603-1606' },
    { id: 'subgroup27', name: 'Macbeth', parent: 'tragedy', value: 1, date:'1587' },
    { id: 'subgroup28', name: 'Othello', parent: 'tragedy', value: 1, date:'1603' },
    { id: 'subgroup29', name: 'Romeo and Juliet', parent: 'tragedy', value: 1, date:'1597' },
    { id: 'subgroup211', name: 'Timon of Athens', parent: 'tragedy', value: 1, date:'1607-1608' },
    { id: 'subgroup212', name: 'Titus Andronicus', parent: 'tragedy', value: 1, date:'1594' },
    { id: 'subgroup213', name: 'Troilus and Cressida', parent: 'tragedy', value: 1, date:'1602' },

    { id: 'subgroup31', name: 'Henry IV, Part I', parent: 'history', value: 1, date:'1596-1597' },
    { id: 'subgroup32', name: 'Henry IV, Part II', parent: 'history', value: 1, date:'1600' },
    { id: 'subgroup33', name: 'Henry V', parent: 'history', value: 1, date:'1599' },
    { id: 'subgroup34', name: 'Henry VI, Part II', parent: 'history', value: 1, date:'1590-1591' },
    { id: 'subgroup35', name: 'Henry VI, Part II', parent: 'history', value: 1, date:'1594' },
    { id: 'subgroup36', name: 'Henry VI, Part III', parent: 'history', value: 1, date:'1595' },
    { id: 'subgroup37', name: 'Henry VIII', parent: 'history', value: 1, date:'1613' },
    { id: 'subgroup38', name: 'King John', parent: 'history', value: 1, date:'1593-1596' },
    { id: 'subgroup39', name: 'Pericles', parent: 'history', value: 1, date:'1609' },
    { id: 'subgroup311', name: 'Richard II', parent: 'history', value: 1, date:'1595' },
    { id: 'subgroup312', name: 'Richard III', parent: 'history', value: 1, date:'1592-1593' }
  ];

  var treeData = anychart.data.tree(rawData, 'as-table');
  chart = anychart.circlePacking(treeData);
  // set chart theme

  chart.normal().labels().format(function () {
    return this.name + '\n' + '\n' + 'Number of plays: ' + this.item.numChildren();
  });

  chart.title().enabled(true).useHtml(true).text(
    '<span style = "color: #fff; font-size:20px;">Shakespeare\'s Plays by genre</span>'
  );


  chart.tooltip().titleFormat(function () {
    var rv = this.name;
    var parent = this.item.getParent();
    while (parent) {
      rv = parent.get('name') + ' → ' + rv;
      parent = parent.getParent();
    }
    return rv;
  });

  chart.tooltip().fontFamily('fantasy');

  // tooltip
  chart
  .tooltip()
  .useHtml(true)
  .titleFormat("<span style='font-weight:bold, font-family:fantasy'>{%name}</span>")
  .format("<span style='font-weight:bold, font-family:fantasy'>Date:</span><span>{%date}</span>");

  chart.palette(['#d81e05', '#558b2f', '#ffab00']);

  chart.background('#d8b597');
    
  chart.fill('#d8b597');

  chart.stroke(function () {
    return {
        thickness: 4,
        color: this.sourceColor
  };
});

  chart.container('bubble');
  chart.draw();
});