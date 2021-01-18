<template>
    <div class="site-container">
        <h2>Vergleich der Beschäftigten und des Umsatzes</h2>
        <p>
            Insgesamt arbeiten im Jahr 2019 rund 139.000 Personen in der deutschen Wirtschaft hauptsächlich oder in geringem Umfang im Bereich der KI. Währenddessen erzielten die Unternehmen der deutschen Wirtschaft im Jahr 2019 mit Produkten und Dienstleistungen mit direktem KI-Einsatz einen Umsatz von annähernd 60 Mrd. €. Die beiden Kreisdiagramme zeigen zum einen die Verteilung der im Bereich KI tätigen Beschäftigten in der deutschen Wirtschaft und zum anderen die Umsatzverteilung von Produkten und Dienstleistungen mit KI-Einsatz. Sie sollen die Relationen dieser Verteilungen im Vergleich zeigen.
        </p>
        <div class="flex-container">
            <div class="container">
                <div class="mittig">
                    <highcharts :options="chart1"></highcharts>
                </div>
            </div>
                <div class="container">
                    <div class= "mittig">
                        <highcharts :options="chart2"> </highcharts>
                    </div>
                 </div>
            </div>
        </div>
</template>


<script>
import {Chart} from 'highcharts-vue'

// https://api.highcharts.com/highcharts/chart.backgroundColor

export default {
  name: 'kiInCompany3',
  components: {
    highcharts: Chart
  },
  data() {
    return {
    // Variable von html Element
      chart1: {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                // Hintergrundfarbe
                backgroundColor: "none",
                width: 650,
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
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b><br>Beschäftigte: <b>{point.beschaeftigte}</b> pro 1.000 Personen'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<br>{point.name}</br>: {point.y:.1f} Mrd. Euro'
                    },
                    borderWidth: 0,
                }
            },
            series: [{
                name: 'Umsatz',
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
                    sliced: true,
                    selected: true,
                    color: '#323E65',
                    beschaeftigte: 47.4,
                }, {
                    name: 'Elektrotechnik, Maschinenbau',
                    y: 0.68,
                    color: '#003E82',
                    beschaeftigte: 13.3,
                }, {
                    name: 'Fahrzeugbau',
                    y: 0.84,
                    color: '#608DBF',
                    beschaeftigte: 3.9,
                }, {
                    name: 'Unternehmensnahe Dienstleistungen',
                    y: 0.65,
                    color: '#7EB3BB',
                    beschaeftigte: '-',
                }, {
                    name: 'sonstiges verarbeitendes Gewerbe',
                    y: 0.26,
                    color: '#66A2B9',
                    beschaeftigte: 8.8,
                }, {
                    name: 'Finanzdiensleistungen',
                    y: 0.24,
                    color: '#D3EAEF',
                    beschaeftigte: 6,
                }, {
                    name: 'sonstige Dienstleistungen',
                    y: 0.19,
                    color: '#CFD9E6',
                    beschaeftigte: 5.5,
                }, {
                    name: 'Verkehr- und Logistik',
                    y: 0.16,
                    color: '#CCAF8F',
                    beschaeftigte: 3.2,
                }, {
                    name: 'Chemie/Pharma, Grundstoffe',
                    y: 0.14,
                    color: '#C4935C',
                    beschaeftigte: 3,
                }, {
                    name: 'Ver- und Entsorgung, Bergbau',
                    y: 0.07,
                    color: '#B35F00',
                    beschaeftigte: 1.4,
                }, {
                    name: 'Großhandel',
                    y: 0.07,
                    color: '#F7932D',
                    beschaeftigte: 2.1,
                }]
            }]
        },
        chart2: {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                // Hintergrundfarbe
                backgroundColor: "none",
                width: 650,
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
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b><br>Beschäftigte: <b>{point.umsatz}</b> Mrd. Euro'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.y:.1f} in 1.000 Personen'
                    },
                    borderWidth: 0,
                }
            },
            series: [{
                name: 'Beschäftigte',
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
                    y: 47.4,
                    sliced: true,
                    selected: true,
                    color: '#323E65',
                    umsatz: 1.5,
                }, {
                    name: 'Elektrotechnik, Maschinenbau',
                    y: 13.3,
                    color: '#003E82',
                    umsatz: 0.7,
                }, {
                    name: 'Fahrzeugbau',
                    y: 3.9,
                    color: '#608DBF',
                    umsatz: 0.8,
                }, 
                 {
                    name: 'sonstiges verarbeitendes Gewerbe',
                    y: 8.8,
                    color: '#66A2B9',
                    umsatz: 0.3,
                }, {
                    name: 'Finanzdiensleistungen',
                    y: 6.0,
                    color: '#D3EAEF',
                    umsatz: 0.2,
                }, {
                    name: 'sonstige Dienstleistungen',
                    y: 5.5,
                    color: '#CFD9E6',
                    umsatz: 0.2,
                }, {
                    name: 'Verkehr- und Logistik',
                    y: 3.2,
                    color: '#CCAF8F',
                    umsatz: 0.2,
                }, {
                    name: 'Chemie/Pharma, Grundstoffe',
                    y: 3.0,
                    color: '#C4935C',
                    umsatz: 0.1,
                }, {
                    name: 'Ver- und Entsorgung, Bergbau',
                    y: 1.4,
                    color: '#B35F00',
                    umsatz: 0.07,
                }, {
                    name: 'Großhandel',
                    y: 2.1,
                    color: '#F7932D', 
                    umsatz: 0.07,
                }]
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
.chart {
    height: 200px;
}

.spacer {
    height: 20px;
}
</style>
