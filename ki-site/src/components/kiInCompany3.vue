<template>
    <div class="site-container">
        <h2>Vergleich der Beschäftigten und des Umsatzes</h2>
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
                        <highcharts :options="chart2"> </highcharts>
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
                text: ''
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
                    y: 1.50,
                    sliced: true,
                    selected: true,
                    color: '#ff0000',
                }, {
                    name: 'Elektrotechnik, Maschinenbau',
                    y: 0.68
                }, {
                    name: 'Fahrzeugbau',
                    y: 0.84
                }, {
                    name: 'Unternehmensnahe Dienstleistungen',
                    y: 0.65
                }, {
                    name: 'sonstiges verarbeitendes Gewerbe',
                    y: 0.26
                }, {
                    name: 'Finanzdiensleistungen',
                    y: 0.24
                }, {
                    name: 'sonstige Dienstleistungen',
                    y: 0.19
                }, {
                    name: 'Verkehr- und Logistik',
                    y: 0.16
                }, {
                    name: 'Chemie/Pharma, Grundstoffe',
                    y: 0.14
                }, {
                    name: 'Ver- und Entsorgung, Bergbau',
                    y: 0.07
                }, {
                    name: 'Großhandel',
                    y: 0.07
                }]
            }]
        },

        chart2: {
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
                text: ''
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
                    y: 1.50,
                    sliced: true,
                    selected: true,
                    color: '#ff0000',
                }, {
                    name: 'Elektrotechnik, Maschinenbau',
                    y: 0.68
                }, {
                    name: 'Fahrzeugbau',
                    y: 0.84
                }, {
                    name: 'Unternehmensnahe Dienstleistungen',
                    y: 0.65
                }, {
                    name: 'sonstiges verarbeitendes Gewerbe',
                    y: 0.26
                }, {
                    name: 'Finanzdiensleistungen',
                    y: 0.24
                }, {
                    name: 'sonstige Dienstleistungen',
                    y: 0.19
                }, {
                    name: 'Verkehr- und Logistik',
                    y: 0.16
                }, {
                    name: 'Chemie/Pharma, Grundstoffe',
                    y: 0.14
                }, {
                    name: 'Ver- und Entsorgung, Bergbau',
                    y: 0.07
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
    height: 20px;
}
</style>