<template>
    <div class="site-container">
        <h2>Erstmaliger Einsatz von KI</h2>
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
          width: 1250,
          height: 550,
          
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
          }
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

      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointPlacement: 'on',
          },
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

.flex-container{
  width: 100%;
}
 .highcharts-root{
 width: 100% !important;
 }

 .highcharts-container {
   margin: 0 auto !important;
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
