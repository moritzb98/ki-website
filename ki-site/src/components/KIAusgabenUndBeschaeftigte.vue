<template>
    <div class="site-container">
      <h2 class="allgemein">Auswirkungen des Einsatzes von Künstlicher Intelligenz auf Personal und Investitionen</h2>
      <h3>Gegenüberstellung der zu KI Beschäftigten und der erbrachten Investitionen in KI</h3>
      <div class="flex-container zweispaltig">
        <p class="zweispaltig-text">
        Der <b> Fahrzeugbau </b> beschäftigt im Durchschnitt <b> 30,8% hauptsächlich zu KI tätige Mitarbeiter </b> und gab einen Betrag von <b>7.056 tsd. € für Investitionen in KI </b> aus. Konträr dazu verhält sich die Branche der unternehmensnahen Dienstleistungen,
        </p>
        <p class="zweispaltig-text">
         6,1% der Beschäftigten befassen sich intensiver mit KI, die <b> Summe </b> der <b> für KI ausgegebenen Investitionen </b>beträgt allerdings nur <b> 93 tsd. €. </b>
        </p>
      </div>
        <div class="container-bubble">
            <div>
                <div class="flex-container flex-container-small">
                    <div id="chartdiv">
                        <img src="../assets/ikt-maennchen-neu.svg">
                    </div>
                <div>
                    <highcharts :options="chartOptions"></highcharts>
                </div>
                </div>

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
        subtitle: {
    text: 'Ausgaben für KI in dt. Unternehmen 2019, in tausend Euro',
    verticalAlign: 'bottom',
  },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}000€'
        },
        plotOptions: {
            packedbubble: {
                minSize: '30%',
                maxSize: '130%',
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
                        fontWeight: 'normal',
                        textOverflow: 'hidden'
                    }
                }
            }
        },
            legend: {
                reversed: true,
                align: 'right',
                verticalAlign: 'top',
                layout: 'vertical',
                x: 0,
                y: 100,
                itemStyle: {
                    color: '#CBC8C8',
                },
                itemHoverStyle: {
                    color: '#ffffff'
                }
            },
        series: [{
            name: 'IKT',
            color: '#EE3B3B',
            data: [{
                name: 'IKT',
                value: 382,

            }]
        }, {
            name: 'Fahrzeugbau',
            color: '#EE7600',
            data: [{
                name: "Fahrzeugbau",
                value: 7056,

            }]
        }, {

            name: 'Elektrotechn.,<br> Maschinenbau',
            color: '#6495ED',
            data: [{
                name: "Elektrotechn., Ma...",
                value: 718,
            }]
        }, {
            name: 'Verkehr, Logistik',
            color: '#FFD700',
            data: [{
                name: "Verkehr, Logistik",
                value: 321,

            }]
        }, {
            name: 'Finanz-DL',
            color: '#F08080',
            data: [{
                name: "Finanz-DL",
                value: 286,

            }]
        }, {
            name: 'Chemie/Pharma, Grundstoff',
            color: '#76EEC6',
            data: [{
                name: "Chemie/Ph...",
                value: 282,

            }]
            }, {
            name: 'Ver-/Entsorgung, Bergbau',
            color: '#00CED1',
            data: [{
                name: "Ver-/Entsorgung, Bergbau",
                value: 245,

            }]
            }, {
            name: 'Sonst. DL',
            color: '#8A2BE2',
            data: [{
                name: "Sonst. DL",
                value: 210,

            }]
            }, {
            name: 'Großhandel',
            color: '#FFC1C1',
            data: [{
                name: "Großhandel",
                value: 171,

            }]
              }, {
            name: 'Sonst. verarb. Gewerbe',
            color: '#EE00EE',
            data: [{
                name: "Sonst. verarb. Gewerbe",
                value: 130,

            }]
              }, {
            name: 'Unternehmensnahe-DL',
            color: '#B3EE3A',
            data: [{
                name: "Unternehmensnahe-DL",
                value: 93,

            }]
              }, {
            name: 'Gesamtwirtschaft',
            color: '#3F44D5',
            data: [{
                name: "Gesamtwirts...",
                value: 276,
            }]

        }]
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .allgemein:after {
    background-color: #C18BBF!important;
}

img {
    margin-top:10px;
  width: 100%;
  height: auto;
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
.zweispaltig{
    width: 1200px;
    text-align: left;
    margin: 0 auto;
  }

  .zweispaltig-text{
    margin: 10px;
    width: 100%;
  }
.img {
    width: 100%;
}

#chartdiv{
    margin: auto;
    width:500px;
}

#chartdiv svg{
    height: 400px;
}

.flex-container-small{
    width: 90%;
}

</style>
