<template>
    <div class="site-container">
      <img class="right-img" src="../assets/5_transparent.png">
      <h1 class="site-header">Impressum</h1>
        <div class="flex-container impressum-site-container">
          <div class="impressum-flex-item">
            <h3>Projekinformationen</h3>
            <span class="impressum-text"><b>Titel:</b> Einsatz von künstlicher Intelligenz in der Deutschen Wirtschaft<br>Stand der KI Nutzung im Jahr 2019</span><br>
            <span class="impressum-text"><b>Studenten:</b> Moritz Banhardt, Theresa Brenner, Fabienne Burgert, Berivan Saricicek, Kim Wehnes</span><br>
            <span class="impressum-text"><b>Dozent:</b> Dipl.-Des. Lothar B. Blum</span><br>
            <span class="impressum-text"><b>Abgabe:</b> XX.XX.2021</span><br><br>
            <span class="impressum-text">DHBW Campus Mosbach</span><br>
            <span class="impressum-text">Fachbereich Onlinemedien</span><br>
          </div>
          <div class="impressum-flex-item">
            <h3>Impressum</h3>
            <span class="impressum-text"><b>Herausgeber:</b> Bundesministerium für <br>Wirtschaft und Energie (BMWi)<br>
              Öffentlichkeitsarbeit<br>
              11019 Berlin<br>
              <a href="www.bmwi.de">www.bmwi.de</a>
            </span><br>
            <span class="impressum-text"><b>Stand:</b> März 2020</span><br><br>
            <span class="impressum-text"><b>Icons:</b> Envato Elements</span><br>
            <span class="impressum-text"><b>Bilder:</b> Envato Elements</span><br>
            <span class="impressum-text"><b>Grafiken:</b> Envato Elements</span><br>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'impressum',
  data() {
    return {
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-header {
  margin-top: 80px;
}

.impressum-site-container {
  width: 75%;
  margin: 0 auto;
}

.impressum-flex-item {
  width: 50%;
}

.impressum-flex-item h3 {
  text-align: center;
}

.impressum-text {
  font-weight: 100;
}
</style>
