<template>
    <div class="site-container">
        <div class="site-container-width">
            <h2 class="title-allg">Beschäftigte mit KI-Tätigkeit in Unternehmen</h2>
            <div class="flex-container">
                <div class="flex-item-30">
                    <p> Wirft man einen Blick auf Branchen, die große Anteile ihrer Ausgaben für KI aufwenden, kommt die Frage auf inwiefern sich Mitarbeiter der Unternehmen dieser Branchen damit auseinandersetzen. Einblick darüber gibt diese Grafik. Die IKT Branche ist auch hier weit vorne dabei und beschäftigt 1,51% hauptsächlich zu KI-tätigen Personen. Unternehmensnahe Dienstleistungen können hier einen ebenfalls hohen Anteil von 0,88% verzeichnen. Diese beiden Branchen gehören auch zu den Top-3-Branchen, in denen Stand 2019 bereits viele Unternehmen KI einsetzen. Zudem wird deutlich, dass Branchen wie der Großhandel (0,05% aller Beschäftigten) oder die Versorge/Entsorge und Bergbau Branche (0,12%) weniger Beschäftigte, die im Bereich der KI tätig sind einstellen. Diese Branchen gehören auch zu jenen, in denen in Unternehmen die KI bislang nicht verstärkt eingesetzt wird.
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
                }
            },
             yAxis: [{
            min: 0,
            title: {
                text: 'Anteil der hauptsächlich zu KI tätigen Personen in %'
            }
        },{
            linkedTo: 0,
            title: {
                text: 'Anteil Unternehmen mit KI-Einsatz in %'
            },
                      gridLineColor: '#313131',
            opposite: true
        }],
            tooltip: {
                valueSuffix: ' millions'
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
            series: [{
                name: 'Unternehmen mit KI-Einsatz',
                data: [17.8, 12.2, 11.1, 6.8, 5.1, 4.6, 3.6, 3.3, 2.5, 1.5, 1.0, 5.8],
                color: '#343e62'
            }, {
                name: 'Hauptsächlich zu KI tätige Personen',
                data: [1.51, 0.28, 0.88, 0.35, 0.10, 0.08, 0.08, 0.12, 0.10, 0.05, 0.05, 0.31 ],
                color: '#a9c9d4'
            }]
        },
    // Variable von html Element
        chartOptions2: {
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
        data: [17.8, 12.2, 11.1, 6.8, 5.1, 4.6, 3.6, 3.3, 2.5, 1.5, 1.0, 5.8],
        color: '#343e62'
    }, {
        name: 'Hauptsächlich zu KI tätige Personen',
        data: [1.51, 0.28, 0.88, 0.35, 0.10, 0.08, 0.08, 0.12, 0.10, 0.05, 0.05, 0.31 ],
        yAxis: 1,
        color: '#a9c9d4'
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