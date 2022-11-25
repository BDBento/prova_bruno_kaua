let options = {
    title: '',
    curveType: 'function',
    legend: { position: 'bottom' },
    colors: ['#185e00', '#ffcd00', '#d50908']
};

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(bubblegraf);
google.charts.setOnLoadCallback(selectiongraf);

function bubblegraf() {
    var data = google.visualization.arrayToDataTable([
        ['Year',        'Bom',           'Medio',      'riuim'],
        ['1000',         0.000172 ,      0.0130364,     0.0302035],
        ['10.000',       0.0077947,      1.2210467,     0.0302035],
        ['500.000',      0.046261,       ,             0],
        ['1.000.000',    0,              ,             0]
    ]);

    var chart = new google.visualization.LineChart(document.getElementById('bubble_grafico'));

    chart.draw(data, options);
}

function selectiongraf() {
    var data = google.visualization.arrayToDataTable([
        ['Year',        'Bom',           'Medio',      'riuim'],
        ['1000',         0.0395172 ,      0.0345794,     0.0021276],
        ['10.000',       0.1438769,      0.3685115,     0.1964097],
        ['500.000',      271.8567817,   2411.6839104,   543.8211861],
        ['1.000.000',    0,              ,             0]
    ]);

    var chart = new google.visualization.LineChart(document.getElementById('selection_grafico'));

    chart.draw(data, options);
}