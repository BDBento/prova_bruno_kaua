google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(graf);

let options = {
    chart: {
        title: '',
        subtitle: ''
      },
        height: 600,
      vAxes: {
        
        x: {
          0: {side: 'top'},
          scaleType: 'log',

        }
      }
};

function graf() {
    // Bubble Sort(melhorado)
    let bom2 = parseFloat(document.querySelector('.bubble .bom2').textContent);
    let bom3 = parseFloat(document.querySelector('.bubble .bom3').textContent);
    let bom1 = parseFloat(document.querySelector('.bubble .bom1').textContent);
    let bom4 = parseFloat(document.querySelector('.bubble .bom4').textContent);
    // SelectionSort
    let bom11 = parseFloat(document.querySelector('.select .bom1').textContent);
    let bom21 = parseFloat(document.querySelector('.select .bom2').textContent);
    let bom31 = parseFloat(document.querySelector('.select .bom3').textContent);
    let bom41 = parseFloat(document.querySelector('.select .bom4').textContent);
    // InsertionSort
    let bom12 = parseFloat(document.querySelector('.insert .bom1').textContent);
    let bom22 = parseFloat(document.querySelector('.insert .bom2').textContent);
    let bom32 = parseFloat(document.querySelector('.insert .bom3').textContent);
    let bom42 = parseFloat(document.querySelector('.insert .bom4').textContent);
    // merge
    let bom13 = parseFloat(document.querySelector('.merg .bom1').textContent);
    let bom23 = parseFloat(document.querySelector('.merg .bom2').textContent);
    let bom33 = parseFloat(document.querySelector('.merg .bom3').textContent);
    let bom43 = parseFloat(document.querySelector('.merg .bom4').textContent);
    // quick
    let bom14 = parseFloat(document.querySelector('.quic .bom1').textContent);
    let bom24 = parseFloat(document.querySelector('.quic .bom2').textContent);
    let bom34 = parseFloat(document.querySelector('.quic .bom3').textContent);
    let bom44 = parseFloat(document.querySelector('.quic .bom4').textContent);
    //heap
    let bom15 = parseFloat(document.querySelector('.hea .bom1').textContent);
    let bom25 = parseFloat(document.querySelector('.hea .bom2').textContent);
    let bom35 = parseFloat(document.querySelector('.hea .bom3').textContent);
    let bom45 = parseFloat(document.querySelector('.hea .bom4').textContent);
    //ShellSort
    let bom16 = parseFloat(document.querySelector('.shel .bom1').textContent);
    let bom26 = parseFloat(document.querySelector('.shel .bom2').textContent);
    let bom36 = parseFloat(document.querySelector('.shel .bom3').textContent);
    let bom46 = parseFloat(document.querySelector('.shel .bom4').textContent);
    //CoktailSort
    let bom17 = parseFloat(document.querySelector('.cok .bom1').textContent);
    let bom27 = parseFloat(document.querySelector('.cok .bom2').textContent);
    let bom37 = parseFloat(document.querySelector('.cok .bom3').textContent);
    let bom47 = parseFloat(document.querySelector('.cok .bom4').textContent);
    //GnomeSort
    let bom18 = parseFloat(document.querySelector('.gnom .bom1').textContent);
    let bom28 = parseFloat(document.querySelector('.gnom .bom2').textContent);
    let bom38 = parseFloat(document.querySelector('.gnom .bom3').textContent);
    let bom48 = parseFloat(document.querySelector('.gnom .bom4').textContent);
    //CombSort
    let bom19 = parseFloat(document.querySelector('.comb .bom1').textContent);
    let bom29 = parseFloat(document.querySelector('.comb .bom2').textContent);
    let bom39 = parseFloat(document.querySelector('.comb .bom3').textContent);
    let bom49 = parseFloat(document.querySelector('.comb .bom4').textContent);

    
    var data = new google.visualization.DataTable();
      data.addColumn('number', 'interacoes');
      data.addColumn('number', 'Bubble Sort(melhorado)');
      data.addColumn('number', 'SelectionSort');
      data.addColumn('number', 'InsertionSort');
      data.addColumn('number', 'MergeSort');
      data.addColumn('number', 'QuickSort');
      data.addColumn('number', 'HeapSort');
      data.addColumn('number', 'ShellSort');
      data.addColumn('number', 'CoktailSort');
      data.addColumn('number', 'GnomeSort');
      data.addColumn('number', 'CombSort');

      data.addRows([
        [1000,     bom1, bom11, bom12 , bom13, bom14, bom15, bom16, bom17, bom18, bom19],
        [10000,    bom2, bom21, bom22 , bom23, bom24, bom25, bom26, bom27, bom28, bom29],
        [500000,   bom3, bom31, bom32 , bom33, bom34, bom35, bom36, bom37, bom38, bom39],
        [1000000 , bom4, bom41, bom42 , bom43, bom44, bom45, bom46, bom47, bom48, bom49]
    ]);

    var chart = new google.charts.Line(document.getElementById('grafico-bom'));
    chart.draw(data, google.charts.Line.convertOptions(options));
}
