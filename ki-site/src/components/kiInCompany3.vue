<template>
    <div class="site-container">
        <h2>Vergleich der Beschäftigten und des Umsatzes</h2>
        <p> In diesem Abschnitt werden folgende Diagramme miteinander verglichen, um schlussendlich zu dem Ergebnis XYZ zu kommen. Bavaria ipsum dolor sit amet kimmt Fünferl Musi nimmds, Weibaleid wiavui Leonhardifahrt a Maß und no a Maß. Bittschön Spuiratz dahoam af guad Schdarmbeaga See gor Watschnbaam so, zünftig! Do schoo i sog ja nix, i red ja bloß, san kumm geh. </p>
        <div class="flex-container">
            <div class="container">
                <div class= "mittig">
                    <div id="chart-A" class="chart"> </div>
                    <div class="spacer"> </div>
                <highcharts :options="chart1"> </highcharts>
                </div>
            </div>
                <div class="container">
                    <div class= "mittig">
                        <div id="chart-B" class="chart"> </div>
<<<<<<< HEAD
                        <highcharts :options="abbildung217"> </highcharts>
=======
                        <highcharts :options="chart2"> </highcharts>
>>>>>>> main
                    </div>
                 </div>
            </div>
        </div>
</template>


<script>
import {Chart} from 'highcharts-vue'

// https://api.highcharts.com/highcharts/chart.backgroundColor

export default {
  name: 'kiInCompany3',
  components: {
    highcharts: Chart 
  },
  data() {
    return {
    // Variable von html Element
      chart1: {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                // Hintergrundfarbe
                backgroundColor: "none", 
            },
            
            // Wasserzeichen entfernen
            credits: {
                enabled: false
            },
            title: {
                // Überschrift
                text: 'Verteilung der im Bereich KI tätigen Beschäftigten in der deutschen Wirtschaft 2019 nach Branchengruppen (in 1.000 Personen)'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.y:.1f}'
                    },
                    borderWidth: 0,
                }
            },
            series: [{
                name: 'Branchen',
                colorByPoint: true,
                dataLabels: {
                    borderWidth: 0,
                    // Styles für die Texte
                    style: {
                        // Umrandung Text
                        textOutline: false,
                        // Farbe Text
                        color: 'white',
                        fontSize: '12px',
                    }
                },
                data: [{
                    name: 'IKT',
                    y: 47.4,
                    sliced: true,
                    selected: true,
                    color: '#ff0000',
                }, {
                    name: 'Elektrotechnik, Maschinenbau',
                    y: 13.3
                }, {
                    name: 'Fahrzeugbau',
                    y: 3.9
                }, {
                    name: 'Unternehmensnahe Dienstleistungen',
                    y: 44.9,
                }, {
                    name: 'Sonstiges verarbeitendes Gewerbe',
                    y: 8.8
                }, {
                    name: 'Finanzdiensleistungen',
                    y: 6.0
                }, {
                    name: 'Sonstige Dienstleistungen',
                    y: 5.5
                }, {
                    name: 'Verkehr- und Logistik',
                    y: 3.2
                }, {
                    name: 'Chemie/Pharma, Grundstoffe',
                    y: 3.0
                }, {
                    name: 'Ver- und Entsorgung, Bergbau',
                    y: 1.4
                }, {
                    name: 'Großhandel',
                    y: 2.1
                }]
            }]
        },

<<<<<<< HEAD
            abbildung217: {
=======
        chart2: {
>>>>>>> main
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                // Hintergrundfarbe
                backgroundColor: "none", 
            },
            
            // Wasserzeichen entfernen
            credits: {
                enabled: false
            },
            title: {
                // Überschrift
                text: 'Verteilung des Umsatzes von Produkten und Dienstleistungen mit KI-Einsatz in der deutschen Wirtschaft nach Branchengruppen 2019 (in Mrd. €)'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.y:.1f} Mrd. Euro'
                    },
                    borderWidth: 0,
                }
            },
            series: [{
                name: 'Branchen',
                colorByPoint: true,
                dataLabels: {
                    borderWidth: 0,
                    // Styles für die Texte
                    style: {
                        // Umrandung Text
                        textOutline: false,
                        // Farbe Text
                        color: 'white',
                        fontSize: '12px',
                    }
                },
                data: [{
                    name: 'IKT',
                    y: 9.0,
                    sliced: true,
                    selected: true,
                    color: '#ff0000',
                }, {
                    name: 'Elektrotechnik, Maschinenbau',
                    y: 4.9
                }, {
                    name: 'Fahrzeugbau',
                    y: 3.3
                }, {
                    name: 'Unternehmensnahe Dienstleistungen',
                    y: 4.8
                }, {
                    name: 'Sonstiges verarbeitendes Gewerbe',
                    y: 6.0
                }, {
                    name: 'Finanzdiensleistungen',
                    y: 17.3
                }, {
                    name: 'Sonstige Dienstleistungen',
                    y: 0.8
                }, {
                    name: 'Verkehr- und Logistik',
                    y: 1.5
                }, {
                    name: 'Chemie/Pharma, Grundstoffe',
                    y: 0.0
                }, {
                    name: 'Ver- und Entsorgung, Bergbau',
                    y: 4.5
                }, {
                    name: 'Großhandel',
                    y: 0.07
                }]
            }]
        },

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-item-30 {
    width: 30%;
}

.flex-item-60 {
    width: 60%;
    margin: auto;
}

.platzhalter {
    width: 260px;
    height: 260px;
}

.img {
    width: 100%;
}
.chart {
    height: 200px;
}

.spacer {
    height: 0px;
}
</style>