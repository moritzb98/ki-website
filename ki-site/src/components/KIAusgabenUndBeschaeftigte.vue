<template>
    <div class="site-container">
      <h2>Allgemeine Betrachtung</h2>
      <h3>Verteilung der KI-Ausgaben der deutschen Wirtschaft 2019 nach Branchengruppen (in Mrd. €) </h3>
        <p>Verglich von Verteilung der KI-Ausgaben der deutschen Wirtschaft 2019 nach Branchengruppen (in Mrd. €) und Anteil der Ausgaben für KI in % des Umsatzes aller Unternehmen.</p>
        <div class="container-bubble">
            <div>
                <highcharts :options="chartOptions"></highcharts>
            </div>
        </div>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

// https://api.highcharts.com/highcharts/chart.backgroundColor

export default {
  name: 'KIAusgabenUndBeschaeftigte',
    components: {
        highcharts: Chart 
    },
  data() {
    return {
      chartOptions: { 
          chart: {
            type: 'packedbubble',
            height: '500px',
            styledMode: false,
            // Hintergrundfarbe
            backgroundColor: "none", 
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}€'
        },
        plotOptions: {
            packedbubble: {
                minSize: '0%',
                maxSize: '100%',
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                    splitSeries: false,
                    gravitationalConstant: 0.02
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250
                    },
                    style: {
                        color: 'white',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: [{
            name: 'IKT',
            data: [{
                name: 'IKT',
                value: 382
            }]
        }, {
            name: 'Fahrzeugbau',
            data: [{
                name: "Fahrzeugbau",
                value: 7056
            }]
        }, {
            name: 'Elektrot./Maschinen.b.',
            data: [{
                name: "Elektrot./Maschinen.b.",
                value: 718
            }]
        }, {
            name: 'Verkehr, Logistik',
            data: [{
                name: "Verkehr, Logistik",
                value: 7.6
            }]
        }, {
            name: 'Finanzdienstleist.',
            data: [{
                name: "Finanzdienstleist.",
                value: 7.2
            }]
        }, {
            name: 'Chemie/Ph.',
            data: [{
                name: "Chemie/Ph.",
                value: 6.5
            }]
            }, {
            name: 'Chemie/Ph.',
            data: [{
                name: "Chemie/Ph.",
                value: 6.5
            }]
            }, {
            name: 'Chemie/Ph.',
            data: [{
                name: "Chemie/Ph.",
                value: 6.5
            }]
            }, {
            name: 'Chemie/Ph.',
            data: [{
                name: "Chemie/Ph.",
                value: 6.5
            }]

        }]
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100px;
}
.icon-container {
  text-align:center;
  max-width: 200px;
}
.icon{
  background: #eef1f6;
  border-radius: 100%;
  padding: 30px;
  width: 50%;
  margin: 0 auto;
}

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
</style>