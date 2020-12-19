<template>
    <div class="site-container site-container-larger">
      <img class="right-img" src="../assets/3_transparent.png">
      <h2>Funktionsbereiche, die KI-Verfahren einsetzen</h2>
        <div class="flex-container flex-container--space-between">
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/artificial-intelligence.svg">
            </div>
            <p>Unternehmens-<br>bereiche</p>
          </div>
          <div class="flex-vertical">
            <span>verwenden in verschiedenen</span>
            <div class="line">
            </div>
          </div>
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/artificial-intelligence.svg">
            </div>
            <p>Anwendungs-<br>bereichen</p>
          </div>
          <div class="flex-vertical">
            <span>unterschiedliche</span>
            <div class="line">
            </div>
          </div>
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/artificial-intelligence.svg">
            </div>
            <p>KI-Verfahren</p>
          </div>
         </div>
         <div class="slide">
            <div class="slide-container">
              <img class="icon-company" src="../assets/company.svg">
            </div>
         </div>
         <div class="slide">
            <div class="slide-container">
              <p>Slide 2</p>
            </div>
         </div>
         <div class="slide">
            <div class="slide-container">
              <p>Slide 3</p>
            </div>
         </div>
    </div>
</template>

<script>
export default {
  name: 'ikt',
  data() {
    return {
      options2: {
        
      },
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo { 
  width: 180px;
  margin-top: 20px;
  margin-bottom: 50px;
}

.icon-container {
  text-align:center;
  width: 10%;
}

.active {
  width: 20%;
}
.icon{
  background: #eef1f6;
  border-radius: 100%;
  padding: 10px;
  width: 50%;
  margin: 0 auto;
}
.subtitle {
  text-transform: uppercase;
  font-weight: 100;
}

.line {
  display:block;
  width: 100%;
  background: red;
  height: 2px;
}

.flex-vertical {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100px;
  width: 25%;
}

.slide-container {
  margin: 0 auto;
}

.icon-company {
  height: 400px;
}
</style>

