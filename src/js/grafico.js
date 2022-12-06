
google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(graf);

let options = {
    title: '',
    curveType: 'function',
    legend: { position: 'bottom' },
    colors: ['#185e00', '#ffcd00', '#d50908']
};

function graf() {
    // bom
    let bom1 = parseFloat(document.querySelector('.bom1').textContent);
    let bom2 = parseFloat(document.querySelector('.bom2').textContent);
    let bom3 = parseFloat(document.querySelector('.bom3').textContent);
    let bom4 = parseFloat(document.querySelector('.bom4').textContent);
    // medio
    let medio1 = parseFloat(document.querySelector('.medio1').textContent);
    let medio2 = parseFloat(document.querySelector('.medio2').textContent);
    let medio3 = parseFloat(document.querySelector('.medio3').textContent);
    let medio4 = parseFloat(document.querySelector('.medio4').textContent);
    // ruim
    let ruim1 = parseFloat(document.querySelector('.ruim1').textContent);
    let ruim2 = parseFloat(document.querySelector('.ruim2').textContent);
    let ruim3 = parseFloat(document.querySelector('.ruim3').textContent);
    let ruim4 = parseFloat(document.querySelector('.ruim4').textContent);

    var data = google.visualization.arrayToDataTable([
        ['Qtd de nº no Array',        'Bom',     'Medio',    'ruim'],
        ['1000',         bom1,      medio1,     ruim1],
        ['10.000',       bom2,      medio2,     ruim2],
        ['500.000',      bom3,      medio3,     ruim3],
        ['1.000.000',    bom4,      medio4,     ruim4]
    ]);

   
    var chart = new google.charts.Line(document.getElementById('grafico'));
    chart.draw(data, google.charts.Line.convertOptions(options));
}
