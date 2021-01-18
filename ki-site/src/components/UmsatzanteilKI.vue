<template>
    <div class="site-container">
      <h2>Gewichtung der Bedeutung von KI Nutzung anhand des Umsatzanteils(Grafik 2.14)</h2>
      <h3>
        Umsatzanteil von Produkten oder Dienstleistungen mit KI-Einsatz in Unternehmen der deutschen Wirtschaft 2019
      </h3>
      <div class="flex-container">
        <div class="flex-item-40">
            <p>
                Lediglich 1,1 % des gesamten Umsatzes der deutschen Wirtschaft erzielten 2019 die Produkte und Dienstleistungen mit KI-Anwendung der Unternehmen. Damit wird deutlich, welchen geringen Anteil KI Nutzung in deutschen Unternehmen aktuell noch einnimmt. Mit 3,3% nimmt die  IKT den größten Umsatzanteil ein.
                <br>
                Hierbei ist es wichtig zu beachten, dass hierbei nur die Produkte und Dienstleistungen betrachtet werden, die direkt in der Anwendung oder Nutzung des Produkts KI-Verfahren verwenden.
                <br>
                Betrachtet man die Umsatzverteilung der Produkte und Dienstleistungen nur auf den Umsatz der Unternehmen mit KI-Einsatz in ihren Produkten ergeben sich selbstverständlich wesentlich höhere Werte. Hier tragen Produkte mit KI-Anwendung jedoch immer noch nur zu 7,7% des Umsatzes dieser Unternehmensgruppe bei. Den größten Umsatzanteil hat unter dieser Betrachtung die Finanzdienstleistungsbranche mit 14%.
            </p>
        </div>
        <div lass="flex-item-60">
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
             labels:{
                 style:{
                     color: 'white',
                 }
             },
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
                  text: 'In %',
                  style:{
                      color: 'white',
                  },
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

.flex-item-60 {
    width: 60%;
    position: relative;
}

.flex-item-40 {
    width: 40%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-end;
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
