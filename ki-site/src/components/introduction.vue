<template>
    <div class="site-container">
      <h2>Informationen zur Studie</h2>
        <div class="zweispaltig">
        <p class="subtitle">
        Künstliche Intelligenz (KI) gilt heute als eine der entscheidenden Schlüsseltechnologien. Dynamisches, effizientes und effektives Aufgreifen ihrer Einsatzmöglichkeiten ist ein entscheidender Faktor, um die Innovationskraft und Wettbewerbsfähigkeit der deutschen Wirtschaft zu erhalten und zu stärken. Mit der im November 2018 verabschiedeten Strategie “Künstliche Intelligenz” setzt die Bundesregierung einen Rahmen für eine ganzheitliche politische Gestaltung der weiteren Entwicklung und Anwendung Künstlicher Intelligenz in Deutschland. <br>
        Die Studie “Intelligenz in der Deutschen Wirtschaft - Stand der KI-Nutzung im Jahr 2019” dient dazu über einen ersten Überblick über die Durchdringung von KI in Deutschland zu gewinnen. Auf den nachfolgenden Seiten werden die wichtigsten Indikatoren dargestellt.
        </p>
        </div>
        <br>
        <div class="flex-container icon-flex">
          <div class="icon-container">
          <div class="circle-container">
            <div class="icon">
              <div class="kreisOrange">
                <img class="BildIcon" src="../assets/BRAIN SIMULATION.svg">
              </div>
              </div>
            </div>
            <h3 class="icon-text icon-header">Zeitraum der Datenerhebung</h3>
            <p class="icon-text">
              dt. Innovationserhebung: <br>
              2019 <br>
              Zusatzumfrage: <br>
              November 2019 - Januar 2020
            </p>
          </div>
          <div class="icon-container">
          <div class="circle-container">
            <div class="icon">
            <div class="kreisOrange">
              <img class="BildIcon" src="../assets/BIG DATA.svg">
              </div>
            </div>
            </div>
            <h3 class="icon-text icon-header">Form der Datenerhebung</h3>
            <p class="icon-text">
              Repräsentative Sonderauswertung der dt. Innovationserhebung <br>
              Zusatzbefragung von KI einsetzenden Unternehmen
            </p>
          </div>
          <div class="icon-container">
          <div class="circle-container">
            <div class="icon">
            <div class="kreisOrange">
             <img class="BildIcon" src="../assets/BRAIN MACHINE INTERFACE.svg">
           </div>
           </div>
           </div>
            <h3 class="icon-text icon-header">Anzahl teilnehmende Unternehmen</h3>
            <p class="icon-text">
              Teilnahmen bei der dt. Innovationserhebung: <br>
              567 <br>
              Teilnahmen bei der Zusatzbefragung: <br>
              368
            </p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'introduction',
  data() {
    return {

    }
  },
  mounted() {
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 85px;
}
.icon-container {
  text-align:center;
  max-width: 200px;
}

.zweispaltig{
  width: 1200px;
  column-count:2;
  margin: 0 auto;
  column-gap: 10px;
  }

.BildIcon{
  position: absolute;
    left: 50%;
    margin-left: -42.5px;
    top: 50%;
    margin-top: -42.5px;
}

.circle-container{
  position: relative;
  width: 100%;
  padding-bottom: 100%;
}

.icon{
  background: #eef1f6;
  border-radius: 100%;
  border-style: solid;
  border-color: #8BB8C1;
  border-width: 6px;
  position: absolute;
  width: 70%;
  height: 70%;
  border-radius: 50%;
}

.kreisOrange{

  margin-top: 2.5%;
  margin-left: 2.5%;
  position: absolute;
  width: 90%;
  height: 90%;
  border-radius: 50%;  
  border-color: #F4C07A;  
  border-style: solid;
}

.icon-flex {
  margin: 0 auto;
  width: 80%;
}

.icon-text{
  text-align: center;
}

.icon-header{
  margin-top: 20px;
}

.p-center {
  text-align:center;
}
</style>
