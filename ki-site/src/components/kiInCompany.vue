<template>
    <div class="site-container">
        <h2>Bedeutung von KI</h2>
        <div class="flex-container flex-container--space-between">
            <div class="flex-item">
                <div class="flex-container flex-container-100">
                    <div class="flex-item-20">
                        <div id="verticalbar" class="vertical-bar"></div>
                    </div>
                    <div class="flex-item-80">
                        <p class="bar-text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>
            <div class="flex-item platzhalter">
                <highcharts :options="chartOptions"></highcharts>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'kiincompany',
  data() {
    return {
        // Variable von html Element
        chartOptions: {
            chart: {
                type: 'bar',
                // Hintergrundfarbe
                backgroundColor: "none", 
            },
            // Wasserzeichen entfernen
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Sonstige Dienstleistungen', 'Großhandel', 'IKT', 'Sonst. Verarb. Gew.', 'Elektrot./Maschinenb.', 'Chemie/Ph., Gr.st.', 'Ver-/Entsorg., Bg.b.', 'Unter.nahe Dienstl.', 'Verkehr, Logistik', 'Fahrzeugbau', 'Finanzdienstleisut.', 'Gesamtwirtschaft']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'in % aller KI einsetzenden Unternehmen'
                }
            },
            legend: {
                reversed: false
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'essenziell',
                data: [20, 17, 17, 13, 12, 11, 10, 10, 10, 4, 0, 12]
            }, {
                name: 'wichtig',
                data: [56, 64, 60, 60, 72, 74, 72, 66, 73, 71, 68, 65]
            }, {
                name: 'weniger wichtig',
                data: [24, 19, 23, 27, 16, 15, 17, 23, 17, 24, 32, 23]
            }]
        },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-item {
    width: 40%;
}

.platzhalter {
    height: 450px; 
}

.flex-container-100 {
    height: 100%;
}

.flex-item-80 {
    width: 80%;
    position: relative;
}

.flex-item-20 {
    width: 20%;
    display: flex;
    flex-direction: column;
    position: relative;
}

.vertical-bar {
    bottom: 0;
    margin: 0 auto;
    width: 50%;
    height: 0;
    background: #ea5321;
    visibility: hidden;
    position: absolute;
    transition: all 3s;
}

.vertical-bar-animate:before {
    color: white;
    content: counter(count) '%';
    animation: counter 4s linear;
    animation-fill-mode: forwards;
    position: relative;
    bottom: 25px;
}

.vertical-bar-animate {
    margin-top: 0;
    visibility: visible;
    height: 77%;
    box-shadow: 1px 0px 5px 1px #ea5321;
}

.bar-text {
    position: absolute;
    margin: 0;
    bottom: 0;
    text-align: left;
}



@keyframes counter {
  0% {counter-increment: count 0;}
  1% {counter-increment: count 1;}
  2% {counter-increment: count 2;}
  3% {counter-increment: count 3;}
  4% {counter-increment: count 4;}
  5% {counter-increment: count 5;}
  6% {counter-increment: count 6;}
  7% {counter-increment: count 7;}
  8% {counter-increment: count 8;}
  9% {counter-increment: count 9;}
  10% {counter-increment: count 10;} 
  11% {counter-increment: count 11;}
  12% {counter-increment: count 12;}
  13% {counter-increment: count 13;}
  14% {counter-increment: count 14;}
  15% {counter-increment: count 15;}
  16% {counter-increment: count 16;}
  17% {counter-increment: count 17;}
  18% {counter-increment: count 18;}
  19% {counter-increment: count 19;}
  20% {counter-increment: count 20;}
  21% {counter-increment: count 21;}
  22% {counter-increment: count 22;}
  23% {counter-increment: count 23;}
  24% {counter-increment: count 24;}
  25% {counter-increment: count 25;}
  26% {counter-increment: count 26;}
  27% {counter-increment: count 27;}
  28% {counter-increment: count 28;}
  29% {counter-increment: count 29;}
  30% {counter-increment: count 30;}
  31% {counter-increment: count 31;}
  32% {counter-increment: count 32;}
  33% {counter-increment: count 33;}
  34% {counter-increment: count 34;}
  35% {counter-increment: count 35;}
  36% {counter-increment: count 36;}
  37% {counter-increment: count 37;}
  38% {counter-increment: count 38;}
  39% {counter-increment: count 39;}
  40% {counter-increment: count 40;}
  41% {counter-increment: count 41;}
  42% {counter-increment: count 42;}
  43% {counter-increment: count 43;}
  44% {counter-increment: count 44;}
  45% {counter-increment: count 45;}
  46% {counter-increment: count 46;}
  47% {counter-increment: count 47;}
  48% {counter-increment: count 48;}
  49% {counter-increment: count 49;}
  50% {counter-increment: count 50;}
  51% {counter-increment: count 51;}
  52% {counter-increment: count 52;}
  53% {counter-increment: count 53;}
  54% {counter-increment: count 54;}
  55% {counter-increment: count 55;}
  56% {counter-increment: count 56;}
  57% {counter-increment: count 57;}
  58% {counter-increment: count 58;}
  59% {counter-increment: count 59;}
  60% {counter-increment: count 60;}
  61% {counter-increment: count 61;}
  62% {counter-increment: count 62;}
  63% {counter-increment: count 63;}
  64% {counter-increment: count 64;}
  65% {counter-increment: count 65;}
  66% {counter-increment: count 66;}
  67% {counter-increment: count 67;}
  68% {counter-increment: count 68;}
  69% {counter-increment: count 69;}
  70% {counter-increment: count 70;}
  71% {counter-increment: count 71;}
  72% {counter-increment: count 72;}
  73% {counter-increment: count 73;}
  74% {counter-increment: count 74;}
  75% {counter-increment: count 75;}
  76% {counter-increment: count 76;}
  77% {counter-increment: count 77;}
  100% {counter-increment: count 77;}
}

</style>