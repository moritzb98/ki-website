<template>
    <div class="site-container">
      <h2>Allgemeine Betrachtung</h2>
      <h3>Verteilung der KI-Ausgaben der deutschen Wirtschaft 2019 nach Branchengruppen (in Mrd. €)</h3>
<p> Das Kreisdiagramm beschreibt die Verteilung der für KI aufgewendeten Ausgaben je Branche in Mrd. €. Dabei sticht die Branche der IKT besonders hervor, da diese mit 1,5 Mrd. € die größten Ausgaben verzeichnet. Weitere, zu großem Anteil in KI investierende Branchen sind der Fahrzeugbau (0,8 Mrd. €) sowie die Elektrotechnik und der Maschinenbau (0,7 Mrd. €). Branchen wie der Großhandel (0,1 Mrd. €) oder die Chemie-/Pharma-Branche (0,1Mrd. €) gaben bislang eher geringere Summen für KI aus.
Im Vergleich dazu steht der Anteil der Ausgaben für KI, ebenfalls nach Branche sortiert und angegeben in % des Gesamtumsatzes. Dabei lässt sich erkennen, dass die IKT Branche ebenfalls den größten Anteil der Ausgaben (0,56%) in KI investiert. Weitere viel investierende Branchen sind die unternehmensnahen Dienstleistungen (0,29%). Der Großhandel gibt auch hier wenig Ausgaben aus (0,01% des Gesamtumsatzes) und teilt sich mit der Versorge/Entsorge und der Bergbau Branche (ebenfalls 0,01%) den Platz der am wenigsten investierenden Branchen.
</p>
        <div class="container">
            <div class="mittig">
                <highcharts :options="chartOptions"></highcharts>
            </div>
            <div class="mittig mittig-vertikal">
                <img id="moneybag" src="../assets/geldsack.svg" class="bild">
                
            </div>
        </div>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

// https://api.highcharts.com/highcharts/chart.backgroundColor

export default {
  name: 'allgemeineBetrachtung',
  components: {
    highcharts: Chart
  },
  data() {
    return {
    // Variable von html Element
      chartOptions: {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                // Hintergrundfarbe
                backgroundColor: "none",
                animation: {
                    duration: 500,
                    easing: 'easeOutBounce'
                }
            },
            // Wasserzeichen entfernen
            credits: {
                enabled: false
            },
            title: {
                // Überschrift
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            legend: {
                reversed: false,
                itemStyle: {
                    color: '#eef1f6',
                },
                itemHoverStyle: {
                    color: '#ea5321'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.y:.1f} Mrd. Euro'
                    },
                    borderWidth: 0,
                    showInLegend: false,
                },
            },
            series: []
        },
        created: false,
    }
  },
  mounted(){
        //alert("hallo");
        console.log(this);
      //this.pushSeries();
  },
  methods: {
        changeMoneybag: function(el) {
            let moneybag = document.getElementById('moneybag');
            moneybag.width = 'auto';
            moneybag.height = el.y * 300;
            moneybag.style.background = el.color;
            console.log(el);
        },

        pushSeries: function() {
            if(!this.created){
                this.chartOptions.series.push({
                    name: 'Branchen',
                    colorByPoint: true,
                    dataLabels: {
                        borderWidth: 0,
                        // Styles für die Texte
                        style: {
                            // Umrandung Text
                            textOutline: false,
                            // Farbe Text
                            color: 'white',
                            fontSize: '10px',
                        }
                    },
                    data: [{
                        name: 'IKT',
                        y: 1.50,
                        //sliced: true,
                        //selected: true,
                        color: '#323E65',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Elektrotechnik, Maschinenbau',
                        y: 0.68,
                        color: '#003E82',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Fahrzeugbau',
                        y: 0.84,
                        color: '#608DBF',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Unternehmensnahe Dienstleistungen',
                        y: 0.65,
                        color: '#7EB3BB',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'sonstiges verarbeitendes Gewerbe',
                        y: 0.26,
                        color: '#66A2B9',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Finanzdiensleistungen',
                        y: 0.24,
                        color: '#D3EAEF',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'sonstige Dienstleistungen',
                        y: 0.19,
                        color: '#CFD9E6',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Verkehr- und Logistik',
                        y: 0.16,
                        color: '#CCAF8F',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Chemie/Pharma, Grundstoffe',
                        y: 0.14,
                        color: '#C4935C',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Ver- und Entsorgung, Bergbau',
                        y: 0.07,
                        color: '#B35F00',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Großhandel',
                        y: 0.07,
                        color: '#F7932D',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }]
                })
                this.created = true;
            }
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    width: 100%;
    display:flex;
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
.bild{
    width: 300px;
}
.mittig{
    text-align: center;
    margin: 20px;
    max-height: 380px;
}

.mittig-vertikal{
    margin: auto 20px;
}
</style>
