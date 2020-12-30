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
.container{
    width: 100%;
    margin: 0 auto;
    display:flex;
}
.bild{
    width:300px;
}
.mittig{
    margin: 0 auto;
    text-align:center;
}
</style>