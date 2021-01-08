<template>
    <div class="site-container">
      <h2>Informationen zur Studie</h2>
        <p class="subtitle">Hier wird die Studie vorgestellt und die Strategie, auf der die Studie aufbaut. sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
        <br>
        <div class="flex-container icon-flex">
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/BRAIN SIMULATION.svg">
            </div>
            <h3 class="icon-text icon-header">Zeitraum der Datenerhebung</h3>
            <p class="icon-text">xyz</p>
          </div>
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/BIG DATA.svg">
            </div>
            <h3 class="icon-text icon-header">Form der Datenerhebung</h3>
            <p class="icon-text">xyz</p>
          </div>
          <div class="icon-container">
            <div class="icon">
             <img src="../assets/MULTI-AGENT SYSTEM.svg">
           </div>
            <h3 class="icon-text icon-header">Anzahl teilnehmende Unternehmen</h3>
            <p class="icon-text">xyz</p>
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
</style>