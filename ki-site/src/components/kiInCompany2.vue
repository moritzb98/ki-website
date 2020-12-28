<template>
    <div class="site-container">
        <h2>Erstmaliger Einsatz von KI</h2>
        <div class="flex-container flex-container--space-between">

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
            text: 'in % aller KI einsetzenden Unternehmen'
          },
          style: {
              // Umrandung Text
              textOutline: false,
              // Farbe Text
              color: 'white',
              fill: 'white',
              cursor:'white',
              fontSize: '12px',
          },
        },

        xAxis: {
          accessibility:{
          categories:['vor 2010','zwischen 2010 und 2015','2016/17','2018/19*']
          }
        },

        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          cursor: 'white',
          color: 'white'
        },

      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 2010
          }
      },

      series: [{
          name: 'Finanzdienstleistungen',
          data: [6, 19, 38, 37],
      }, {
          name: 'Chemie',
          data: [11, 14, 51, 23]
      }, {
          name: 'Elektrotechnik',
          data: [17, 15, 41, 27]
      }, {
          name: 'IKT',
          data: [9, 26, 39, 27]
      }, {
          name: 'Großhandel',
          data: [8, 30, 41, 22]
      }, {
          name: 'Verkehr, Logistik',
          data: [20, 19, 16, 45]
      }, {
          name: 'Ver-/Entsorgung',
          data: [12, 31, 31, 26]
      }, {
          name: 'sonstige verarbeitendes Gewerbe',
          data: [35, 9, 35, 21]
      }, {
          name: 'Unternehmensnahe Dienstleistungen',
          data: [24, 20, 29, 27]
      }, {
          name: 'sonstige Dienstleistungen',
          data: [43, 11, 14, 32]
      }, {
          name: 'Fahrzeugbau',
          data: [17, 39, 26, 18]
      }, {
          name: 'Gesamtwirtschaft',
          data: [20, 20, 33, 27]
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
      }
    }
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

.flex-container{
  width: 100%;
}
 .highcharts-root{
 width: 100% !important;
 }

#fullpage > div.section.fp-section.fp-table.active.fp-completely > div > div > div > div{
width: 100%;
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
