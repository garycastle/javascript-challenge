// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody');

tableData.forEach(item => {
    var tr = tbody.append('tr');
    tr.append('td').text(item.datetime);
    tr.append('td').text(item.city);
    tr.append('td').text(item.state);
    tr.append('td').text(item.country);
    tr.append('td').text(item.shape);
    tr.append('td').text(item.durationMinutes);
    tr.append('td').text(item.comments);
});

var button = d3.select('#filter-btn');

button.on('click', function() {

    var dateInput = d3.select('#date-filter');
    var dateValue = dateInput.property('value');
    var stateInput = d3.select('#state-filter');
    var stateValue = stateInput.property('value');
    var cityInput = d3.select('#city-filter');
    var cityValue = cityInput.property('value');

    var filtered = tableData.filter(item => item.datetime === dateValue)
    console.log(filtered);
    tbody.html(``);
    filtered.forEach( item => {
        var tr = tbody.append('tr');
        tr.append('td').text(item.datetime);
        tr.append('td').text(item.city);
        tr.append('td').text(item.state);
        tr.append('td').text(item.country);
        tr.append('td').text(item.shape);
        tr.append('td').text(item.durationMinutes);
        tr.append('td').text(item.comments);
    });
});