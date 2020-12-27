<template>
    <div class="site-container">
        <h2>Indikatoren zur Verbreitung des Einsatzes von KI in der deutschen Wirtschaft 2019 im Branchenvergleich </h2>
        <div class="flex-container">
            <div class="flex-item-30">
                <p>Anteil der Unternehmen mit KI-Einsatz in % aller Unternehmen  verglichen mit Anteil der hauptsächlich zu KI tätigen Personen in % der Beschäftigten in allen Unternehmen. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex-item-60">
                <div class="flex-container">
                    <highcharts :options="chartOptions"></highcharts>
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
        labels:{
            format: ['IKT', 'Finanzdienstleist.', 'Untern.nahe Dienstl.', 'Elktrot. Machinen.b.', 'Fahrzeugbau', 'Chemie/Ph., Gr.st.', 'Ver-/Entsorgungs,Bg.b', 'Sonst.Verarb.Gew.', 'Sonst. Dienstleist.', 'Verkehr, Logistik', 'Großhandel', 'Gesamtwirtschaft'],
            rotation: 45,
            step: 0
            }
    }],

    yAxis: [{
        className: 'highcharts-color-0',
        title: {
            text: 'Anteil Unternehmen mit KI-Einsatz in % aller Unternehmen'
        }
    }, {
        className: 'highcharts-color-1',
        opposite: true,
        title: {
            text: 'Anteil der hauptsächlich zu KI tätigen Personen in % der Beschäftigten in allen Unternehmen'
        }
    }],

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

.flex-item-60 {
    width: 60%;
    margin: auto;
}

.platzhalter {
    width: 260px;
    height: 260px;
}

.img {
    width: 100%;
}

</style>