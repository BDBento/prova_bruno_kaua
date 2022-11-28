let options = {
    title: '',
    curveType: 'function',
    legend: { position: 'bottom' },
    colors: ['#185e00', '#ffcd00', '#d50908']
};

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(graf);

function graf() {
    // bom
    let num1 = document.querySelector('.bom1').textContent;
    let bom1 = parseFloat(num1);
    let num2 = document.querySelector('.bom2').textContent;
    let bom2 = parseFloat(num2);
    let num3 = document.querySelector('.bom3').textContent;
    let bom3 = parseFloat(num3);
    let num4 = document.querySelector('.bom4').textContent;
    let bom4 = parseFloat(num4);
    // medio
    let num5 = document.querySelector('.medio1').textContent;
    let medio1 = parseFloat(num5);
    let num6 = document.querySelector('.medio2').textContent;
    let medio2 = parseFloat(num6);
    let num7 = document.querySelector('.medio3').textContent;
    let medio3 = parseFloat(num7);
    let num8 = document.querySelector('.medio4').textContent;
    let medio4 = parseFloat(num8);
    // ruim
    let num9 = document.querySelector('.ruim1').textContent;
    let ruim1 = parseFloat(num9);
    let num10 = document.querySelector('.ruim2').textContent;
    let ruim2 = parseFloat(num10);
    let num11 = document.querySelector('.ruim3').textContent;
    let ruim3 = parseFloat(num11);
    let num12 = document.querySelector('.ruim4').textContent;
    let ruim4 = parseFloat(num12);

    var data = google.visualization.arrayToDataTable([
        ['Year',        'Bom',     'Medio',    'ruim'],
        ['1000',         bom1,      medio1,     ruim1],
        ['10.000',       bom2,      medio2,     ruim2],
        ['500.000',      bom3,      medio3,     ruim3],
        ['1.000.000',    bom4,      medio4,     ruim4]
    ]);

    var chart = new google.visualization.LineChart(document.getElementById('grafico'));

    chart.draw(data, options);
}
