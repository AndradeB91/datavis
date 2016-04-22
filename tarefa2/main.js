// $('#container').highcharts({
//   chart: {
//      type: 'bar'
//   },
//   title: {
//      text: 'Bilheteria de filmes'
//   },
//   xAxis: {
//       categories: ['Worldwide', 'Domestic', 'Brazil', 'Argentina']
//   },
//   yAxis: {
//       title: { text: 'Revenue' }
//   },
//   series: [{
//           name: 'Avengers: Age of Ultron',
//           data: [1405413868	, 459005868, 47862465, 9280502]
//       }, {
//           name: 'Inside Out',
//           data: [856809711, 356461711, 13938297, 23400000]
//       }, {
//           name: 'Star Wars: The Force Awakens',
//           data: [2064053170, 935553170, 27982311, 8650249]
//       }, {
//           name: 'Spotlight',
//           data: [88025652	 , 44734955	, 1909772, 601496]
//       }, {
//           name: 'The hateful eight',
//           data: [155474031	 	 , 54048941	 	, 2176029, 999468]
//       }
//   ]
// });

$.get('rotten-tomatoes.csv', function(csv) {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        data: {
            csv: csv
        },
        title: {
            text: 'Rotten Tomatoes Score'
        },
        yAxis: {
            title: {
                text: 'Score'
            }
        },
        xAxis: {
            title: {
                text: 'Movies with more than 1 oscar'
            }
        }

    });
});

$.get('genres.csv', function(csv) {
    // lines = csv.split('\n');
    // alert();
    // var map = {};
    //
    // for (i = 0; i<lines.length; i++){
    //   if(lines[i] in map){
    //       map[lines[i]]++;
    //   }else if(typeof map[lines[i]] === "undefined"){
    //       map[lines[i]] = 1;
    //   }
    // }
    //
    // var count = 0;
    // for (x in map)
    // { count++; }
    // //console.log(count);
    // console.log(map);


    $('#container2').highcharts({
        chart: {
            type: 'pie'
        },
        data: {
            csv: csv
        },
        title: {
            text: 'Rotten Tomatoes Score'
        },
        yAxis: {
            title: {
                text: 'Score'
            }
        },
        xAxis: {
            title: {
                text: 'Movies with more than 1 oscar'
            }
        }

    });
});
