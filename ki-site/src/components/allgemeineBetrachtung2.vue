<template>
    <div class="site-container">
        <div class="site-container-width">
            <h2 class="title-allg">Beschäftigte mit KI-Tätigkeit in Unternehmen</h2>
            <div class="flex-container">
                <div class="flex-item-30">
                    <p> Diese Grafik stellt dar, wie viele Unternehmen (bezogen auf alle in der Umfrage befragten Unternehmen) bereits KI einsetzen. Dieser Wert wird hier mit der Farbe blau gekennzeichnet.
                        Zudem wird gezeigt wie viele Personen, in den mit KI-Einsatz bestehenden Unternehmen, bereits hauptsächlich Tätigkeiten mit KI-Bezug ausüben. Dieser Wert wird mit der Farbe grau dargestellt.
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
    // Variable von html Element
      chartOptions: {
            chart: {
                type: 'column',
                styledMode: false,
                // Hintergrundfarbe
                backgroundColor: "none", 
                width:800
    },
            credits: {
                enabled: false
            },

    title: {
        text: ''
    },

    xAxis: [{
        tickInterval: 1,
        categories: ['IKT', 'Finanzdienstleist.', 'Untern.nahe Dienstl.', 'Elktrot. Machinen.b.', 'Fahrzeugbau', 'Chemie/Ph., Gr.st.', 'Ver-/Entsorgungs,Bg.b', 'Sonst.Verarb.Gew.', 'Sonst. Dienstleist.', 'Verkehr, Logistik', 'Großhandel', 'Gesamtwirtschaft'],
        labels:{
            rotation: 45,
            style:{
                color: 'white',
            } 
        }
    }],

    yAxis: [{
        className: 'highcharts-color-0',
        title: {
            text: 'Anteil Unternehmen mit KI-Einsatz in % aller Unternehmen',
            style:{
                // Color Text left
                color: 'white',
            } 
        },
        labels:{
            style:{
                // Color Data left
                color: 'white',
            } 
        }
    },{
        className: 'highcharts-color-1',
        opposite: true,
        title: {
            text: 'Anteil der hauptsächlich zu KI tätigen Personen in % der Beschäftigten in allen Unternehmen',
            style:{
                // Color Text right
                color: 'white',
            } 
        },
        labels:{
            style:{
                // Color Data right
                color: 'white',
            } 
        }
    }],
        legend: {
                reversed: true,
                itemStyle: {
                    color: '#eef1f6',
                },
                itemHoverStyle: {
                    color: '#ea5321'
                }
            },
    plotOptions: {
        column: {
            borderRadius: 5
        }
    },

    series: [{
        name: 'Unternehmen mit KI-Einsatz',
        data: [17.8, 12.2, 11.1, 6.8, 5.1, 4.6, 3.6, 3.3, 2.5, 1.5, 1.0, 5.8]
    }, {
        name: 'Hauptsächlich zu KI tätige Personen',
        data: [1.51, 0.28, 0.88, 0.35, 0.10, 0.08, 0.08, 0.12, 0.10, 0.05, 0.05, 0.31 ],
        yAxis: 1
    }]
        },
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-item-30 {
    width: 30%;
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