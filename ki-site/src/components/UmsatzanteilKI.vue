<template>
    <div class="site-container">
      <h2 class="allgemein">Bedeutung der Künstlichen Intelligenz</h2>
      <h3>
       Dargestellt in Form des Umsatzanteils von Produkten oder Dienstleistungen mit KI-Einsatz
      </h3>
      <div class="flex-container-center">
        <div class="flex-item-40">
            <p class="text">
          Lediglich <b> 1,1 % des gesamten Umsatzes </b> der deutschen Wirtschaft erzielten 2019 die <b> Produkte und Dienstleistungen </b>  mit KI-Anwendung der Unternehmen. Damit wird deutlich, welchen <b> geringen Anteil KI Nutzung </b> in deutschen Unternehmen aktuell noch einnimmt. Die <b>IKT Branche </b> nimmt hierbei mit 3,3% den <b> größten Umsatzanteil ein. </b>
                <br>
                Hierbei ist es wichtig zu beachten, dass hierbei <b> nur die Produkte und Dienstleistungen </b> betrachtet werden, die <b> direkt </b> in der <b> Anwendung oder Nutzung </b> des Produkts <b> KI-Verfahren verwenden. </b>
                <br>
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
                type: 'bar',
                styledMode: false,
                backgroundColor: "none",
                width:550,
                height:500
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
                 gridLineColor: '#313131',
                title: {
                  text: 'In %',
                  style:{
                      color: 'white',
                  },
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
            plotOptions: {
                bar: {
                  pointPadding: 0.2,
                  borderWidth: 1,
                  borderRadius: 3.5,
                }
              },

            tooltip: {
                style: { opacity: 1, zindex: 500},
                formatter: function () {
                    return '<b>' + this.series.name + ' - ' + this.point.category + '</b><br/>' +
                      'Anteil des Umsatzes: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
                }
            },

            series: []
            },
          created: false,
      }

    },
    methods:{
          pushSeries: function() {
            if(!this.created){
                this.chart1.series.push({
                    name: 'Umsatz aller Unternehmen',
                    data: [3.3, 3.0, 2.1, 1.3 , 0.9, 0.8, 0.7, 0.6 , 0.5, 0.5, 0.4, 1.1],
                    color: '#8BB8C1'
                })
                this.created = true;
            }
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

  .allgemein:after {
    background-color: #8BB8C1!important;
}

.flex-item-60 {
    width: 60%;
    position: relative;
}

.text{
  margin-top:30px;
}

.flex-item-40 {
    width: 40%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-end;
}

.flex-container-center{
  justify-content: center;
  display: flex;
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
