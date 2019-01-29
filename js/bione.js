var ctx = document.getElementById('myChart').getContext("2d");

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, 'rgba(17, 86, 0, 0.69)');
gradientStroke.addColorStop(1, 'rgba(27, 162, 0, 0.54)');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1 период", "2 период", "3 период", "4 период", "5 период", "6 период", "7 период"],
        datasets: [{
            label: "Биомасса растения",
            borderColor: gradientStroke,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientStroke,
            borderWidth: 1,
            data: [100, 120, 150, 170, 180, 170, 160]
        }]
    },
    options: {
        legend: {
            position: "top"
        },
        scales: {
            yAxes: [{
                ticks: {
                //    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{
                gridLines: {
                  zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 200,
                 //   fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});
