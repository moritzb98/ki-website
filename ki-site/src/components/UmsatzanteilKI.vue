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
                type: 'bar',
                backgroundColor: "none"
            },
            // Wasserzeichen entfernen
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            accessibility: {
                point: {
                    valueDescriptionFormat: '{value}%.'
                }
            },
            xAxis: [{
                categories: ['IKT', 'Finanzdienstleistung', 'Unternehmensnahe Dienstl.', 'Elektrotechnik/Maschinenbau',
                  'Sonst. Verarbeitende  Gewerke', 'Ver-/Entsorg., Bg.b.', 'Chemie/Ph., Gr.st.', 'Fahrzeugbau', 'Verkehr, Logistik',
                  'Sonst. Dienstleist.', 'Großhandel', 'Gesamtwirtschaft'],
                reversed: false,
                labels: {
                  useHTML: true,
                    step: 1
                },
                accessibility: {
                    description: 'in % des Umsatzes  aller Unternehmen'
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: ['IKT', 'Finanzdienstleistung', 'Unternehmensnahe Dienstl.', 'Elektrotechnik/Maschinenbau',
                  'Sonst. Verarbeitende  Gewerke', 'Ver-/Entsorg., Bg.b.', 'Chemie/Ph., Gr.st.', 'Fahrzeugbau', 'Verkehr, Logistik',
                  'Sonst. Dienstleist.', 'Großhandel', 'Gesamtwirtschaft'],
                linkedTo: 0,
                labels: {
                    step: 1
                },
                accessibility: {
                    description: 'in % des Umsatzes der Unternehmen mit KI-Einsatz in Produkten/Dienstleistungen'
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + '%';
                    }
                },
                accessibility: {
                    description: 'Percentage population',
                    rangeDescription: 'Range: 0 to 5%'
                }
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                style: { opacity: 1, zindex: 500},
                formatter: function () {
                    return '<b>' + this.series.name + ' - ' + this.point.category + '</b><br/>' +
                      'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
                }
            },

            series: [{
                name: 'in % des Umsatzes  aller Unternehmen',
                data: [
                    -3.3, -3.0, -2.1, -1.3, -0.9, -0.8, -0.7, -0.6, -0.5, -0.5, -0.4, -1.1
                ]
            }, {
                name: 'in % des Umsatzes der Unternehmen mit KI-Einsatz in Produkten/Dienstleistungen',
                data: [
                    11.7, 8.4, 14.0, 6.9, 11.6, 6.4, 4.8, 3.0, 6.3, 5.9, 8.1, 7.7
                ]
            }]
        },
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
.container{
    width: 100%;
    margin: 0 auto;
    display:flex;
    margin-top: 20px;
}
.bild{
    margin-top: 20px;
    width:800px;
}
.mittig{
    margin: 0 auto;
    text-align:center;
}
</style>
