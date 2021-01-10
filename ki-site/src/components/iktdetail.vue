<template>
    <div class="site-container site-container-larger">
      <img class="right-img" src="../assets/3_transparent.png">
      <h2>Funktionsbereiche, die KI-Verfahren einsetzen</h2>
        <div class="flex-container flex-container--space-between flex-slider">
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
              <video id="video" width="998" height="560" playsinline poster="https://lqez.github.io/js/airpodsvf/video.jpg">
                  <source src="https://lqez.github.io/js/airpodsvf/video.mp4" type="video/mp4">
                  Your browser does not support the video tag.
              </video>
            </div>
         </div>
         <div class="slide">
            <div class="slide-container">
              <img class="icon-company" src="../assets/slide2.jpeg">
            </div>
         </div>
         <div class="slide">
            <div class="slide-container">
              <img class="icon-company" src="../assets/slide3.jpeg">
            </div>
         </div>
         
    </div>
</template>

<script>
export default {
  name: 'ikt',
  data() {
    return {

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

.icon-container p{
  text-align: center;
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
video{
  height: 350px;
}
.flex-slider{
  width: 80%;
  margin: 0 auto;
}
</style>

