<template>
    <div class="site-container">
        <h2>Zunehmende Unverzichtbarkeit der KI in deutschen Unternehmen</h2>
        <h3> Präsentiert anhand des Zeitraums des erstmaligen Einsatzes von KI</h3>
        <p class="margin-bott">
         Nachdem sich bereits herauskristallisiert hat, von welcher Bedeutung der Einsatz von KI in vielen deutschen Unternehmen ist, stellt diese Grafik nun dar wann der erstmalige Einsatz der Technologie stattgefunden hat. 
In Branchen wie den sonstigen Dienstleistungen setzen bereits vor 2010 43% aller Unternehmen KI ein. Im Vergleich dazu verzeichnete die IKT Branche, die heute verstärkt KI einsetzt und viele Ausgaben in diesem Bereich verzeichnet, in dieser Zeitspanne nur einen Wert von 9%. Heute gehören sie, wie eben angedeutet zu den stärker auf KI fokussierten Branchen. 37% aller Unternehmen dieser Branche setzten 2018/2019 diese Technologie ein. 
</p>
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
              color: '#ea5321'
          },
          itemStyle: {
            color: 'white'
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
          }, {
              name: 'Chemie',
              data: [11, 14, 51, 23],
              visible: false,
          }, {
              name: 'Elektrotechnik',
              data: [17, 15, 41, 27],
              visible: false,
          }, {
              name: 'IKT',
              data: [9, 26, 39, 27],
              visible: true,
          }, {
              name: 'Großhandel',
              data: [8, 30, 41, 22],
              visible: false,
          }, {
              name: 'Verkehr, Logistik',
              data: [20, 19, 16, 45],
              visible: false,
          }, {
              name: 'Ver-/Entsorgung',
              data: [12, 31, 31, 26],
              visible: false,
          }, {
              name: 'sonstige verarbeitendes Gewerbe',
              data: [35, 9, 35, 21],
              visible: false,
          }, {
              name: 'Unternehmensnahe Dienstleistungen',
              data: [24, 20, 29, 27],
              visible: false,
          }, {
              name: 'sonstige Dienstleistungen',
              data: [43, 11, 14, 32],
              visible: false,
          }, {
              name: 'Fahrzeugbau',
              data: [17, 39, 26, 18],
              visible: false,
          }, {
              name: 'Gesamtwirtschaft',
              data: [20, 20, 33, 27],
              visible: true,
              color: 'red',
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
  height:500px;
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
