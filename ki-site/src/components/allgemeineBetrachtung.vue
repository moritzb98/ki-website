<template>
    <div class="site-container">
      <h2>Investitionen von deutschen Unternehmen in KI</h2>
      <h3> Präsentiert anhand der verzeichneten Ausgaben für KI je Branche in Mrd. Euro
      </h3>
<p> Das Kreisdiagramm beschreibt die Verteilung der für KI aufgewendeten Ausgaben je Branche in Mrd. €. Dabei sticht die Branche der <b> IKT </b> besonders hervor, da diese mit <b> 1,5 Mrd. € die größten Ausgaben </b> verzeichnet. Branchen wie der Großhandel (0,1 Mrd. €) gaben bislang eher geringere Summen für KI aus. 
<b> Im Vergleich dazu steht der Anteil der Ausgaben </b> für KI, ebenfalls nach Branche sortiert und angegeben in % des Gesamtumsatzes. Dabei lässt sich erkennen, dass <b> die IKT Branche ebenfalls den größten Anteil der Ausgaben </b> (0,56%) in KI investiert. <b> Der Großhandel verzeichnet auch hier wenig Ausgaben </b> (0,01% des Gesamtumsatzes) und landet auf dem letzten Platz der am wenigsten investierenden Branchen.
        </p>
        <div class="container">
            <img class="klick" src="../assets/tap.svg">
            <div class="mittig">
                <highcharts :options="chartOptions"></highcharts>
            </div>
            <div class="mittig mittig-vertikal">
                <svg version="1.1" id="moneybag" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <g>
                        <path class="st0 changeColor" d="M309.9,77.4l-66.8,24.1l-10-5.9l-31.1-18.2c-43.1-43.1-8-79.3,12.4-77.4c3.1,0.3,5.8,1.4,7.9,3.5
                            c2.6,2.6,5.5,4.9,8.5,6.8c4,2.5,8.4,4.3,13.3,5.5c14.3,3.4,32.8,0.9,56.8-9.1C339.5-9.3,363.6,45.3,309.9,77.4z"/>
                        <path class="st0 changeColor" d="M69.8,347.1c0-115.2,83.4-244,186.2-244s186.2,128.7,186.2,244S358.9,512,256,512S69.8,462.3,69.8,347.1z"/>
                    </g>
                    <g>
                        <path class="st1 changeColor" d="M256,512c-102.9,0-186.2-49.7-186.2-164.9s83.4-244,186.2-244c-62.1,0-112.4,128.7-112.4,244
                            S193.9,512,256,512z"/>
                        <path class="st1 changeColor" d="M275.4,35.2c-6.6-1.9-12.8-4.8-18.4-8.6c-4.6-3.1-8.9-6.7-12.9-10.7c-4.9-1.2-9.3-3-13.3-5.5c0,0,0,0,0,0
                            c-3.1-1.9-5.9-4.2-8.5-6.8c-16-16-69.8,24.3-20.2,73.9l31.1,18.2c18.7-3.7,28.2-9.4,15.2-18.2c-24.6-16.7-25.7-37.8-22.8-51.6
                            c0.8-3.8,5.2-5.5,8.3-3.3c0,0,0,0,0.1,0c6,4.2,12.4,8.1,19.3,11c6.9,2.9,14.2,4.8,21.4,5.5c7.2,0.7,14.4,0.4,21.5-0.2
                            C289.1,38.2,282.1,37.1,275.4,35.2z"/>
                    </g>
                    <path class="st2" d="M201.5,77.4h109.1c13.4,0,24.2,10.8,24.2,24.2v1.2c0,13.4-10.8,24.2-24.2,24.2H201.5
                        c-13.4,0-24.2-10.8-24.2-24.2v-1.2C177.3,88.3,188.1,77.4,201.5,77.4z"/>
                    <path class="st3" d="M217.9,102.2L217.9,102.2c0-13.7,11.1-24.8,24.8-24.8h-40.7c-13.7,0-24.8,11.1-24.8,24.8l0,0
                        c0,13.7,11.1,24.8,24.8,24.8h40.7C229,127,217.9,115.9,217.9,102.2z"/>
                </svg>
                <span id="umsatz"></span>
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
            subtitle: {
    text: 'Für KI aufgewendete Ausgaben in dt. Unternehmen in 2019'
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
  },
  methods: {
        changeMoneybag: function(el) {
            let moneybag = document.getElementById('moneybag');
            moneybag.setAttribute("width", "auto");
            if(el.x * 500 >= 30){
                moneybag.setAttribute("height", el.x * 500);
            }else{
                moneybag.setAttribute("height", 30);
            }
            let objectsChange = document.getElementsByClassName('changeColor');
            for(var i = 0; i<objectsChange.length; i++){
                objectsChange[i].style.fill = el.color;
            }
            document.getElementById('umsatz').innerHTML = "Ausgaben des Gesamtumsatzes: " + el.x + "%";
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
                        x: 0.56,
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
                        x: 0.17,
                        color: '#003E82',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Fahrzeugbau',
                        y: 0.84,
                        x: 0.16,
                        color: '#608DBF',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Unternehmensnahe Dienstleistungen',
                        y: 0.65,
                        x: 0.29,
                        color: '#7EB3BB',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'sonstiges verarbeitendes Gewerbe',
                        y: 0.26,
                        x: 0.04, 
                        color: '#66A2B9',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Finanzdiensleistungen',
                        y: 0.24,
                        x: 0.04,
                        color: '#D3EAEF',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'sonstige Dienstleistungen',
                        y: 0.19,
                        x: 0.12,
                        color: '#CFD9E6',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Verkehr- und Logistik',
                        y: 0.16,
                        x: 0.06,
                        color: '#CCAF8F',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Chemie/Pharma, Grundstoffe',
                        y: 0.14,
                        x: 0.03,
                        color: '#C4935C',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Ver- und Entsorgung, Bergbau',
                        y: 0.07,
                        x: 0.01,
                        color: '#B35F00',
                        events: {
                            click: (el) => {
                                this.changeMoneybag(el.point);
                            }
                        }
                    }, {
                        name: 'Großhandel',
                        y: 0.07,
                        x: 0.01,
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
.klick{
  width: 50px;
  height: auto;
  z-index:1;
  position:absolute;top:680px;left:230px;
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
    width: 300px;
}

.st0{fill:#EDEDED;}
.st1{fill:#C6C6C6;}
.st2{fill:#999999;}
.st3{fill:#6D6D6D;}
</style>
