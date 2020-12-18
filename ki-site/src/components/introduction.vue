<template>
    <div class="site-container">
      <h2>Informationen zur Studie</h2>
        <p class="subtitle">Hier wird die Studie vorgestellt und die Strategie, auf der die Studie aufbaut. sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
        <br>
        <div class="flex-container">
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/artificial-intelligence.svg">
            </div>
            <h3>Zeitraum der Datenerhebung</h3>
            <p>xyz</p>
          </div>
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/artificial-intelligence.svg">
            </div>
            <h3>Form der Datenerhebung</h3>
            <p>xyz</p>
          </div>
          <div class="icon-container">
            <div class="icon">
             <img src="../assets/artificial-intelligence.svg">
           </div>
            <h3>Anzahl teilnehmende Unternehmen</h3>
            <p>xyz</p>
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
</style>