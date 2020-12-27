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
                styledMode: false
            },

            title: {
                text: 'Pie point CSS'
            },

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },

            series: [{
                type: 'pie',
                allowPointSelect: true,
                keys: ['name', 'y', 'selected', 'sliced'],
                data: [
                    ['Apples', 29.9, false],
                    ['Pears', 71.5, false],
                    ['Oranges', 106.4, false],
                    ['Plums', 129.2, false],
                    ['Bananas', 144.0, false],
                    ['Peaches', 176.0, false],
                    ['Prunes', 135.6, true, true],
                    ['Avocados', 148.5, false]
                ],
                showInLegend: true
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