<template>
    <div class="site-container">
        <h2>Zunehmende Unverzichtbarkeit der KI</h2>
        <h3> Präsentiert anhand des Zeitraums des erstmaligen Einsatzes von KI</h3>
        <div class="flex-container zweispaltig">
          <p class="margin-bott zweispaltig-text">
          Nachdem sich bereits herauskristallisiert hat, von welcher Bedeutung der Einsatz von KI in vielen deutschen Unternehmen ist, stellt diese Grafik nun dar wann der <b> erstmalige Einsatz der Technologie </b>stattgefunden hat. In Branchen wie den <b> sonstigen Dienstleistungen </b> setzen bereits <b> vor 2010 43% aller Unternehmen </b>KI ein.
          </p>
          <p class="margin-bott zweispaltig-text">
          Im Vergleich dazu verzeichnete die <b> IKT Branche </b>, die heute verstärkt KI einsetzt und viele Ausgaben in diesem Bereich verzeichnet, in dieser Zeitspanne nur <b> einen Wert von 9%. </b> Heute gehören sie, wie eben angedeutet zu den stärker auf KI fokussierten Branchen. <b> 37% aller Unternehmen dieser Branche </b> setzten <b> 2018/2019 diese Technologie ein. </b>
          </p>
        </div>
        <div class="flex-container">
            <highcharts :options="chartOptions"></highcharts>
        </div>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
  name: 'kiincompany2',
  components: {
    highcharts: Chart
  },
  data() {
    return {
      // Variable von html Element
      chartOptions: {
        chart: {
          backgroundColor: null,
          width: 1050,
          height: 450,
          animation: true,
        },
        // Wasserzeichen entfernen
        credits: {
            enabled: false
            },
        title: {
            // Überschrift
            text: ''
        },
subtitle: {
  text: 'Zeitraum des erstmaligen Einsatzes von KI'
},

        yAxis: {
          title: {
            text: 'in % aller KI einsetzenden Unternehmen',
            style:{
                color: 'white',
            }
          },
          labels:{
            style:{
                color: 'white',
            }
          },
          gridLineColor: '#313131'
        },

        xAxis: {
          categories:['2010','zwischen 2010 und 2015','2016/17','2018/19*'],
          labels:{
            style:{
                color: 'white',
            }
          }
        },

        legend: {

          itemHoverStyle: {
              color: '#ffffff'
          },
          itemStyle: {
            color: '#CBC8C8'
          }
        },
        tooltip: {
            shared: true,
        },

      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false,
              },
              animation: {
                  duration: 5000
              },
              pointPlacement: 'on',
          },
      },

      series: [{
              name: 'Finanzdienstleistungen',
              data: [6, 19, 38, 37],
              visible: false,
              color: '#F08080',
          }, {
              name: 'Chemie/Pharma, Grundstoffe',
              data: [11, 14, 51, 23],
              visible: false,
              color: '#76EEC6',
          }, {
              name: 'Elektrotechnik',
              data: [17, 15, 41, 27],
              visible: false,
              color: '#6495ED',
          }, {
              name: 'IKT',
              data: [9, 26, 39, 27],
              visible: true,
              color: '#EE3B3B',
          }, {
              name: 'Großhandel',
              data: [8, 30, 41, 22],
              visible: false,
              color: '#FFC1C1',
          }, {
              name: 'Verkehr, Logistik',
              data: [20, 19, 16, 45],
              visible: false,
              color: '#3F44D5',
          }, {
              name: 'Ver-/Entsorgung',
              data: [12, 31, 31, 26],
              visible: false,
              color: '#FFD700',
          }, {
              name: 'sonstige verarbeitendes Gewerbe',
              data: [35, 9, 35, 21],
              visible: false,
              color: '#EE00EE',
          }, {
              name: 'Unternehmensnahe Dienstleistungen',
              data: [24, 20, 29, 27],
              visible: false,
              color: '#3F44D5',
          }, {
              name: 'sonstige Dienstleistungen',
              data: [43, 11, 14, 32],
              visible: false,
              color: '#B3EE3A',
          }, {
              name: 'Fahrzeugbau',
              data: [17, 39, 26, 18],
              visible: false,
              color: '#EE7600',
          }, {
              name: 'Gesamtwirtschaft',
              data: [20, 20, 33, 27],
              visible: true,
              color: '#3F44D5',
          }],

      responsive: {
          rules: [{
              condition: {
                  maxWidth: 2000
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
        }
      },
      created: false,
    }
  },

  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
    width: 100%;
    margin: 0 auto;
    display:flex;
}

.margin-bott{
  margin-bottom: 20px;
}

.flex-container{
  width: 100%;
  height:auto;
  margin: 0 auto;
}

.flex-item-80 {
    width: 90%;
    position: relative;
  }

  .circle{
    background: #eef1f6;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    margin: auto;
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
  .flex-item-20 {
      width: 10%;
      display: flex;
      flex-direction: column;
      position: relative;
  }

  .highcharts-axis-labels{
    color: 'white';
  }

</style>
