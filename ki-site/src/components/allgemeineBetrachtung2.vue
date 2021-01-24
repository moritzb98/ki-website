<template>
    <div class="site-container">
        <div class="site-container-width">
            <h2 class="title-allg"> Der für Künstliche Intelligenz erbrachte Arbeitsaufwand </h2>
            <h3> Gemessen anhand des Vergleichs der Unternehmen mit KI Einsatz und den hauptsächlich zu KI tätigen Personen
             </h3>
            <div class="flex-container">
                <div class="flex-item-30">
                    <p>
                    Wirft man einen Blick auf Branchen, die große Anteile ihrer Ausgaben für KI aufwenden, kommt die Frage auf inwiefern sich <b> Mitarbeiter der Unternehmen </b> dieser Branchen damit <b> auseinandersetzen. </b> Neben der IKT Branche, können <b> Unternehmensnahe Dienstleistungen </b> hier einen ebenfalls <b> hohen Anteil von 0,88% verzeichnen </b>. Zudem wird an dieser Stelle deutlich, dass Branchen wie <b> der Großhandel </b> (0,05% aller Beschäftigten) <b> weniger Beschäftigte </b>, die <b> im Bereich der KI </b> tätig sind, einstellen.
                    </p>
                </div>
                <div class="flex-item-70">
                    <div class="flex-container">
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
  name: 'allgemeinebetrachtung2',
  components: {
    highcharts: Chart
  },
  data() {
    return {
        chartOptions: {
             chart: {
                type: 'bar',
                styledMode: false,
                // Hintergrundfarbe
                backgroundColor: "none",
                width:800,
                height:600
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['IKT', 'Finanzdienstleist.', 'Untern.nahe Dienstl.', 'Elktrot. Machinen.b.', 'Fahrzeugbau', 'Chemie/Ph., Gr.st.', 'Ver-/Entsorgungs,Bg.b', 'Sonst.Verarb.Gew.', 'Sonst. Dienstleist.', 'Verkehr, Logistik', 'Großhandel', 'Gesamtwirtschaft'],
                title: {
                    text: null
                },
                labels:{
                    style:{
                        color: '#D3D3D3',
                    }
                }
            },
             yAxis: [{
            min: 0,
            title: {
                text: 'Anteil der hauptsächlich zu KI tätigen Personen in %'
            },
            labels:{
                style:{
                    color: '#D3D3D3',
                }
            },
        },{
            linkedTo: 0,
            title: {
                text: 'Anteil Unternehmen mit KI-Einsatz in %'
            },
                      gridLineColor: '#313131',
            opposite: true
        }],
            tooltip: {
                valueSuffix: ' %'
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
                    borderWidth:1,
                    borderRadius: 3.5,
                    dataLabels: {
                        enabled: false,
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: []
        },
        created: false,
    }

  },
  methods:{
          pushSeries: function() {
            if(!this.created){
                this.chartOptions.series.push({
                    name: 'Unternehmen mit KI-Einsatz',
                    data: [17.8, 12.2, 11.1, 6.8, 5.1, 4.6, 3.6, 3.3, 2.5, 1.5, 1.0, 5.8],
                    color: '#343e62'
                });
                this.chartOptions.series.push({
                    name: 'Hauptsächlich zu KI tätige Personen',
                    data: [1.51, 0.28, 0.88, 0.35, 0.10, 0.08, 0.08, 0.12, 0.10, 0.05, 0.05, 0.31 ],
                    color: '#C18BBF'
                })
                this.created = true;
            }
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-item-30 {
    width: 30%;
    margin-top: 30px;
}

.flex-item-70 {
    width: 70%;
    margin: auto;
}

.platzhalter {
    width: 260px;
    height: 260px;
}

.img {
    width: 100%;
}

.title-allg{
    width: 100%;
}
</style>
