<template>
    <div class="site-container">
      <h2>Informationen zur Studie</h2>
        <p class="subtitle">
        Künstliche Intelligenz (KI) gilt heute als eine der entscheidenden Schlüsseltechnologien. Dynamisches, effizientes und effektives Aufgreifen ihrer Einsatzmöglichkeiten ist ein entscheidender Faktor, um die Innovationskraft und Wettbewerbsfähigkeit der deutschen Wirtschaft zu erhalten und zu stärken. Mit der im November 2018 verabschiedeten Strategie “Künstliche Intelligenz” setzt die Bundesregierung einen Rahmen für eine ganzheitliche politische Gestaltung der weiteren Entwicklung und Anwendung Künstlicher Intelligenz in Deutschland. <br>
        Die Studie “Intelligenz in der Deutschen Wirtschaft - Stand der KI-Nutzung im Jahr 2019” dient dazu über einen ersten Überblick über die Durchdringung von KI in Deutschland zu gewinnen. Auf den nachfolgenden Seiten werden die wichtigsten Indikatoren dargestellt.
        </p>
        <br>
        <div class="flex-container">
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/BRAIN SIMULATION.svg">
            </div>
            <h3>Zeitraum der Datenerhebung</h3>
            <p class="p-center">
              dt. Innovationserhebung: <br>
              2019 <br>
              Zusatzumfrage: <br>
              November 2019 - Januar 2020
            </p>
          </div>
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/BIG DATA.svg">
            </div>
            <h3>Form der Datenerhebung</h3>
            <p class="p-center">
              Repräsentative Sonderauswertung der dt. Innovationserhebung <br>
              &  <br>
              Zusatzbefragung von KI einsetzenden Unternehmen
            </p>
          </div>
          <div class="icon-container">
            <div class="icon">
             <img src="../assets/BRAIN MACHINE INTERFACE.svg">
           </div>
            <h3>Anzahl teilnehmende Unternehmen</h3>
            <p class="p-center">
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100px;
}
.icon-container {
  text-align:center;
  max-width: 200px;
}
.icon{
  background: #eef1f6;
  border-radius: 100%;
  padding: 30px;
  width: 50%;
  margin: 0 auto;
}
.p-center {
  text-align:center;
}
</style>
