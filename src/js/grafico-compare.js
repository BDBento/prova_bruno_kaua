google.charts.load('current', {'packages':['line']}),
google.charts.setOnLoadCallback(graf_b),
google.charts.setOnLoadCallback(graf_m);
google.charts.setOnLoadCallback(graf_r);

let options = {
    chart: {
        title: 'Comparacoes',
        subtitle: 'Tempo de execucao(em segundos) VS Qtd de nº no array'
      },
        height: 500,
      vAxes: {
        
        x: {
          0: {side: 'top'},
          scaleType: 'log',

        }
      }
};
function graf_b() {
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
    let bom19 = parseFloat(document.querySelector('.combo .bom1').textContent);
    let bom29 = parseFloat(document.querySelector('.combo .bom2').textContent);
    let bom39 = parseFloat(document.querySelector('.combo .bom3').textContent);
    let bom49 = parseFloat(document.querySelector('.combo .bom4').textContent);


      var data = google.visualization.arrayToDataTable([[
        'Qtd de nº no array',
        'Bubble Sort(melhorado)',
        'SelectionSort',
        'InsertionSort',
        'MergeSort',
        'QuickSort',
        'HeapSort',
        'ShellSort',
        'CoktailSort',
        'GnomeSort',
        'CombSort'
        ],
        ['1000',     bom1, bom11, bom12 , bom13, bom14, bom15, bom16, bom17, bom18, bom19],
        ['10000',    bom2, bom21, bom22 , bom23, bom24, bom25, bom26, bom27, bom28, bom29],
        ['500000',   bom3, bom31, bom32 , bom33, bom34, bom35, bom36, bom37, bom38, bom39],
        ['1000000' , bom4, bom41, bom42 , bom43, bom44, bom45, bom46, bom47, bom48, bom49]
    ]);

    var chart = new google.charts.Line(document.getElementById('grafico-bom'));
    chart.draw(data, google.charts.Line.convertOptions(options));
}
function graf_m() {
  // Bubble Sort(melhorado)
let medio2 = parseFloat(document.querySelector('.bubble .medio2').textContent);
let medio3 = parseFloat(document.querySelector('.bubble .medio3').textContent);
let medio1 = parseFloat(document.querySelector('.bubble .medio1').textContent);
let medio4 = parseFloat(document.querySelector('.bubble .medio4').textContent);
// SelectionSort
let medio11 = parseFloat(document.querySelector('.select .medio1').textContent);
let medio21 = parseFloat(document.querySelector('.select .medio2').textContent);
let medio31 = parseFloat(document.querySelector('.select .medio3').textContent);
let medio41 = parseFloat(document.querySelector('.select .medio4').textContent);
// InsertionSort
let medio12 = parseFloat(document.querySelector('.insert .medio1').textContent);
let medio22 = parseFloat(document.querySelector('.insert .medio2').textContent);
let medio32 = parseFloat(document.querySelector('.insert .medio3').textContent);
let medio42 = parseFloat(document.querySelector('.insert .medio4').textContent);
// merge
let medio13 = parseFloat(document.querySelector('.merg .medio1').textContent);
let medio23 = parseFloat(document.querySelector('.merg .medio2').textContent);
let medio33 = parseFloat(document.querySelector('.merg .medio3').textContent);
let medio43 = parseFloat(document.querySelector('.merg .medio4').textContent);
// quick
let medio14 = parseFloat(document.querySelector('.quic .medio1').textContent);
let medio24 = parseFloat(document.querySelector('.quic .medio2').textContent);
let medio34 = parseFloat(document.querySelector('.quic .medio3').textContent);
let medio44 = parseFloat(document.querySelector('.quic .medio4').textContent);
//heap
let medio15 = parseFloat(document.querySelector('.hea .medio1').textContent);
let medio25 = parseFloat(document.querySelector('.hea .medio2').textContent);
let medio35 = parseFloat(document.querySelector('.hea .medio3').textContent);
let medio45 = parseFloat(document.querySelector('.hea .medio4').textContent);
//ShellSort
let medio16 = parseFloat(document.querySelector('.shel .medio1').textContent);
let medio26 = parseFloat(document.querySelector('.shel .medio2').textContent);
let medio36 = parseFloat(document.querySelector('.shel .medio3').textContent);
let medio46 = parseFloat(document.querySelector('.shel .medio4').textContent);
//CoktailSort
let medio17 = parseFloat(document.querySelector('.cok .medio1').textContent);
let medio27 = parseFloat(document.querySelector('.cok .medio2').textContent);
let medio37 = parseFloat(document.querySelector('.cok .medio3').textContent);
let medio47 = parseFloat(document.querySelector('.cok .medio4').textContent);
//GnomeSort
let medio18 = parseFloat(document.querySelector('.gnom .medio1').textContent);
let medio28 = parseFloat(document.querySelector('.gnom .medio2').textContent);
let medio38 = parseFloat(document.querySelector('.gnom .medio3').textContent);
let medio48 = parseFloat(document.querySelector('.gnom .medio4').textContent);
//CombSort
let medio19 = parseFloat(document.querySelector('.combo .medio1').textContent);
let medio29 = parseFloat(document.querySelector('.combo .medio2').textContent);
let medio39 = parseFloat(document.querySelector('.combo .medio3').textContent);
let medio49 = parseFloat(document.querySelector('.combo .medio4').textContent);


var data = google.visualization.arrayToDataTable([[
'Qtd de nº no array',
'Bubble Sort(melhorado)',
'SelectionSort',
'InsertionSort',
'MergeSort',
'QuickSort',
'HeapSort',
'ShellSort',
'CoktailSort',
'GnomeSort',
'CombSort'
],
['1000',     medio1, medio11, medio12 , medio13, medio14, medio15, medio16, medio17, medio18, medio19],
['10000',    medio2, medio21, medio22 , medio23, medio24, medio25, medio26, medio27, medio28, medio29],
['500000',   medio3, medio31, medio32 , medio33, medio34, medio35, medio36, medio37, medio38, medio39],
['1000000' , medio4, medio41, medio42 , medio43, medio44, medio45, medio46, medio47, medio48, medio49]
]);

var chart = new google.charts.Line(document.getElementById('grafico-medio'));
chart.draw(data, google.charts.Line.convertOptions(options));
}
function graf_r() {
              // Bubble Sort(melhorado)
let ruim2 = parseFloat(document.querySelector('.bubble .ruim2').textContent);
let ruim3 = parseFloat(document.querySelector('.bubble .ruim3').textContent);
let ruim1 = parseFloat(document.querySelector('.bubble .ruim1').textContent);
let ruim4 = parseFloat(document.querySelector('.bubble .ruim4').textContent);
              // SelectionSort
let ruim11 = parseFloat(document.querySelector('.select .ruim1').textContent);
let ruim21 = parseFloat(document.querySelector('.select .ruim2').textContent);
let ruim31 = parseFloat(document.querySelector('.select .ruim3').textContent);
let ruim41 = parseFloat(document.querySelector('.select .ruim4').textContent);
              // InsertionSort
let ruim12 = parseFloat(document.querySelector('.insert .ruim1').textContent);
let ruim22 = parseFloat(document.querySelector('.insert .ruim2').textContent);
let ruim32 = parseFloat(document.querySelector('.insert .ruim3').textContent);
let ruim42 = parseFloat(document.querySelector('.insert .ruim4').textContent);
              // merge
let ruim13 = parseFloat(document.querySelector('.merg .ruim1').textContent);
let ruim23 = parseFloat(document.querySelector('.merg .ruim2').textContent);
let ruim33 = parseFloat(document.querySelector('.merg .ruim3').textContent);
let ruim43 = parseFloat(document.querySelector('.merg .ruim4').textContent);
              // quick
let ruim14 = parseFloat(document.querySelector('.quic .ruim1').textContent);
let ruim24 = parseFloat(document.querySelector('.quic .ruim2').textContent);
let ruim34 = parseFloat(document.querySelector('.quic .ruim3').textContent);
let ruim44 = parseFloat(document.querySelector('.quic .ruim4').textContent);
              //heap
let ruim15 = parseFloat(document.querySelector('.hea .ruim1').textContent);
let ruim25 = parseFloat(document.querySelector('.hea .ruim2').textContent);
let ruim35 = parseFloat(document.querySelector('.hea .ruim3').textContent);
let ruim45 = parseFloat(document.querySelector('.hea .ruim4').textContent);
              //ShellSort
let ruim16 = parseFloat(document.querySelector('.shel .ruim1').textContent);
let ruim26 = parseFloat(document.querySelector('.shel .ruim2').textContent);
let ruim36 = parseFloat(document.querySelector('.shel .ruim3').textContent);
let ruim46 = parseFloat(document.querySelector('.shel .ruim4').textContent);
              //CoktailSort
let ruim17 = parseFloat(document.querySelector('.cok .ruim1').textContent);
let ruim27 = parseFloat(document.querySelector('.cok .ruim2').textContent);
let ruim37 = parseFloat(document.querySelector('.cok .ruim3').textContent);
let ruim47 = parseFloat(document.querySelector('.cok .ruim4').textContent);
              //GnomeSort
let ruim18 = parseFloat(document.querySelector('.gnom .ruim1').textContent);
let ruim28 = parseFloat(document.querySelector('.gnom .ruim2').textContent);
let ruim38 = parseFloat(document.querySelector('.gnom .ruim3').textContent);
let ruim48 = parseFloat(document.querySelector('.gnom .ruim4').textContent);
              //CombSort
let ruim19 = parseFloat(document.querySelector('.combo .ruim1').textContent);
let ruim29 = parseFloat(document.querySelector('.combo .ruim2').textContent);
let ruim39 = parseFloat(document.querySelector('.combo .ruim3').textContent);
let ruim49 = parseFloat(document.querySelector('.combo .ruim4').textContent);


var data = google.visualization.arrayToDataTable([[
'Qtd de nº no array',
'Bubble Sort(melhorado)',
'SelectionSort',
'InsertionSort',
'MergeSort',
'QuickSort',
'HeapSort',
'ShellSort',
'CoktailSort',
'GnomeSort',
'CombSort'
],
['1000',     ruim1, ruim11, ruim12 , ruim13, ruim14, ruim15, ruim16, ruim17, ruim18, ruim19],
['10000',    ruim2, ruim21, ruim22 , ruim23, ruim24, ruim25, ruim26, ruim27, ruim28, ruim29],
['500000',   ruim3, ruim31, ruim32 , ruim33, ruim34, ruim35, ruim36, ruim37, ruim38, ruim39],
['1000000' , ruim4, ruim41, ruim42 , ruim43, ruim44, ruim45, ruim46, ruim47, ruim48, ruim49]
]);

var chart = new google.charts.Line(document.getElementById('grafico-ruim'));
chart.draw(data, google.charts.Line.convertOptions(options));
}