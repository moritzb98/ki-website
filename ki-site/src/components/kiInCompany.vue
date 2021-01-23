<template>
    <div class="site-container">

        <h2>Einfluss des Einsatzes der KI auf die Geschäftsfähigkeit</h2>
        <h3> Bestimmt anhand der Messung der Relevanz von KI</h3>
        <div class="flex-container zweispaltig">
          <p class="zweispaltig-text">
          Die Bedeutung von KI für die Geschäftsfähigkeit wird von einem <b> Großteil (77%) der Unternehmen als mindestens wichtig eingeschätzt. </b> Das bedeutet, dass <b> KI </b> für diese Unternehmen <b> deutliche Verbesserungen </b> mit sich <b> bringt, </b> indem KI Geschäftsprozesse oder Produktionsaktivitäten <b> schneller, genauer, flexibler, zuverlässiger oder kostengünstiger </b> macht oder die <b> Kapazitäten erhöht. </b>
          </p>
          <p class="zweispaltig-text">
          <b> 12 % der KI einsetzenden Unternehmen</b> geben an, dass KI sogar <b> essenziell für ihre Geschäftstätigkeit ist, </b> d.h. ohne KI könnten die entsprechenden Aktivitäten gar nicht ausgeführt werden. Knapp <b>ein Viertel </b> stuft KI dagegen als <b>weniger wichtig </b> ein, d.h. KI könnte in diesen Unternehmen auch leicht und ohne wesentliche Einbußen durch andere Methoden ersetzt werden.
          </p>
        </div>
        <div class="flex-container margin-top container-new">
            <div class="flex-item text-container">
                <div id="counter" class="counter"></div>
                <p class="text-animate">der <b> Unternehmen, die KI einsetzten </b>, in der deutschen Gesamtwirtschaft bewerten <b> Künstliche Intelligenz als essentiell oder wichtig </b> für ihre Geschäftsfähigkeit.</p>
            </div>
            <div class="flex-item chartdiv">
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
                width: 800
            },
            // Wasserzeichen entfernen
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },

            subtitle: {
                text: 'Von den KI einsetzendne Unternehmen angegebene Bedeutung der Technologie (weniger wichtig/wichtig/essenziell)'
            },

            xAxis: {
                categories: ['Sonstige Dienstleistungen', 'Großhandel', 'IKT', 'Sonst. Verarb. Gew.', 'Elektrot./Maschinenb.', 'Chemie/Ph., Gr.st.', 'Ver-/Entsorg., Bg.b.', 'Unter.nahe Dienstl.', 'Verkehr, Logistik', 'Fahrzeugbau', 'Finanzdienstleisut.', 'Gesamtwirtschaft'],
                labels:{
                    style:{
                        color: 'white',
                    }
                }
            },
            yAxis: {
                gridLineColor: '#545454',
                min: 0,
                max: 100,
                title: {
                    text: 'in % aller KI einsetzenden Unternehmen',
                    style:{
                        color: '#D3D3D3',
                    },

                },
                labels:{
                    style:{
                        color: '#D3D3D3',
                    }
                }
            },
            legend: {
                reversed: true,

                itemStyle: {
                    color: '#CBC8C8',
                },
                itemHoverStyle: {
                    color: '#ffffff'
                }

            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                }
            },
            series: [{
                name: 'essenziell',
                data: [20, 17, 17, 13, 12, 11, 10, 10, 10, 4, 0, 12],
                color: '#88B279'
            }, {
                name: 'wichtig',
                data: [56, 64, 60, 60, 72, 74, 72, 66, 73, 71, 68, 65],
                color: '#C18BBF'
            }, {
                name: 'weniger wichtig',
                data: [24, 19, 23, 27, 16, 15, 17, 23, 17, 24, 32, 23],
                color: '#8BB8C1'
            }]


        },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-item {
    width: 30%;
}

.chartdiv {
    width: 70%;
}

.margin-top {
    margin-top: 60px;
}


.flex-container-100 {
    height: 100%;
    width: 1200px;
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
    align-items: flex-end;
}

.zweispaltig{
    width: 1200px;
    text-align: left;
    margin: 0 auto;
  }

  .zweispaltig-text{
    margin: 10px;
    width: 100%;
  }

.counter{
    height: 0;
}

.counter-animate:before {
    color: #e48d26;
    content: counter(count) '%';
    animation: counter 4s linear;
    animation-fill-mode: forwards;
    position: relative;
    bottom: 175px;
    font-size: 150px;
    display: block;
    text-align: left;
}


.bar-text {
    position: absolute;
    margin: 0;
    bottom: 0;
    text-align: left;
}

.container-new{
    width: 80%;
    margin: auto;
    margin-top: 40px;
}

.text-animate{
    margin: 0;
}

.text-container{
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
