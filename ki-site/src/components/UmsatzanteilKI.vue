<template>
    <div class="site-container">
      <h2>Gewichtung der Bedeutung von KI Nutzung anhand des Umsatzanteils(Grafik 2.14)</h2>
      <h3>
        Umsatzanteil von Produkten oder Dienstleistungen mit KI-Einsatz in Unternehmen der deutschen Wirtschaft 2019
      </h3>
      <p>
          lorem ipsum dolor
      </p>
      <div class="flex-container">
        <div class="mittig">
            <highcharts :options="chart1"></highcharts>
        </div>
      </div>
    </div>
</template>

<script>
import Highcharts from 'highcharts'
export default {
  name: 'UmsatzanteilKI',
  data() {
    return {
      chart1: {
            chart: {
                type: 'column',
                backgroundColor: "none"
            },
            // Wasserzeichen entfernen
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            accessibility: {
                point: {
                    valueDescriptionFormat: '{value}%.'
                }
            }, 
             xAxis: {
                categories: [
                'IKT',
                'Finanzdienstleist.',
                'Unternehmensnahe DL',
                'Elektrotechn./Maschinenbau',
                'Sonstiges verarb. Gewerbe',
                'Ver-/Entsorgungsbau, Bergbau',
                'Chemie/Ph., Gr.st.',
                'Fahrzeugbau',
                'Verkehr, Logistik',
                'Sonstige DL',
                'Großhandel',
                'Gesamtwirtschaft'
              ],
                  crosshair: true
                },
              yAxis: {
                min: 0,
                title: {
                  text: 'In %'
                }
              },

            plotOptions: {
                column: {
                  pointPadding: 0.2,
                  borderWidth: 0
                }
              },

            tooltip: {
                style: { opacity: 1, zindex: 500},
                formatter: function () {
                    return '<b>' + this.series.name + ' - ' + this.point.category + '</b><br/>' +
                      'Anteil des Umsatzes: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
                }
            },

            series: [{
    name: 'In % des Umsatzes aller Unternehmen',
    data: [3.3, 3.0, 2.1, 1.3 , 0.9, 0.8, 0.7, 0.6 , 0.5, 0.5, 0.4, 1.1]

  }, {
    name: 'In % des Umsatzes der Unternehmen mit Ki-Einsatz in Produkten/Dienstleistungen',
    data: [11.7, 8.4, 14.0, 6.9, 11.6, 6.4, 4.8, 3.0, 6.3, 5.9, 8.1, 7.7]

  }, ]
        },
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#container {
  min-width: 500px;
  max-width: 1500px;
  height: 700px;
  margin: 0 auto
}

.buttons {
  min-width: 310px;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 0;
}

.buttons button {
  cursor: pointer;
  border: 1px solid silver;
  border-right-width: 0;
  background-color: #f8f8f8;
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  transition-duration: 0.3s;
}

.buttons button:first-child {
  border-top-left-radius: 0.3em;
  border-bottom-left-radius: 0.3em;
}

.buttons button:last-child {
  border-top-right-radius: 0.3em;
  border-bottom-right-radius: 0.3em;
  border-right-width: 1px;
}

.buttons button:hover {
  color: white;
  background-color: rgb(158, 159, 163);
  outline: none;
}

.buttons button.active {
  background-color: #0051B4;
  color: white;
}
</style>