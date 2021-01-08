<template>
    <div class="site-container">
      <h2>Allgemeine Betrachtung</h2>
      <h3>Verteilung der KI-Ausgaben der deutschen Wirtschaft 2019 nach Branchengruppen (in Mrd. €) </h3>
        <p>Verglich von Verteilung der KI-Ausgaben der deutschen Wirtschaft 2019 nach Branchengruppen (in Mrd. €) und Anteil der Ausgaben für KI in % des Umsatzes aller Unternehmen.</p>
        <div class="container">
            <div class="mittig">
                <highcharts :options="chartOptions"></highcharts>
            </div>
            <div class="mittig">
                <img src="../assets/money-bag.svg" class="bild">
            </div>
        </div>
    
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

// https://api.highcharts.com/highcharts/chart.backgroundColor

export default {
  name: 'allgemeineBetrachtung',
  components: {
    highcharts: Chart 
  },
  data() {
    return {
    // Variable von html Element
      chartOptions: {
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
            legend: {
                reversed: true,
                itemStyle: {
                    color: '#eef1f6',
                },
                itemHoverStyle: {
                    color: '#ea5321'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        //format: '<b>{point.name}</b>: {point.y:.1f} Mrd. Euro'
                    },
                    borderWidth: 0,
                    showInLegend: true
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
                    //sliced: true,
                    //selected: true,
                    color: '#323E65',
                }, {
                    name: 'Elektrotechnik, Maschinenbau',
                    y: 0.68,
                    color: '#003E82'
                }, {
                    name: 'Fahrzeugbau',
                    y: 0.84,
                    color: '#608DBF'
                }, {
                    name: 'Unternehmensnahe Dienstleistungen',
                    y: 0.65,
                    color: '#7EB3BB'
                }, {
                    name: 'sonstiges verarbeitendes Gewerbe',
                    y: 0.26,
                    color: '#66A2B9'
                }, {
                    name: 'Finanzdiensleistungen',
                    y: 0.24,
                    color: '#D3EAEF'
                }, {
                    name: 'sonstige Dienstleistungen',
                    y: 0.19,
                    color: '#CFD9E6'
                }, {
                    name: 'Verkehr- und Logistik',
                    y: 0.16,
                    color: '#CCAF8F'
                }, {
                    name: 'Chemie/Pharma, Grundstoffe',
                    y: 0.14,
                    color: '#C4935C'
                }, {
                    name: 'Ver- und Entsorgung, Bergbau',
                    y: 0.07,
                    color: '#B35F00'
                }, {
                    name: 'Großhandel',
                    y: 0.07,
                    color: '#F7932D'
                }]
            }]
        },
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    width: 100%;
    margin: 0 auto;
    display:flex;
    margin-top: 20px;
}
.bild{
    width:300px;
}
.mittig{
    margin: 0 auto;
    text-align:center;
}
</style>