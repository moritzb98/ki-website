<template>
    <div class="site-container">
      <h2>Funktionsbereiche, die KI-Verfahren einsetzen</h2>
        <div class="flex-container">
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/artificial-intelligence.svg">
            </div>
            <p>Unternehmensbereiche</p>
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
            <p>Anwendungsbereichen</p>
          </div>
          <div class="flex-vertical">
            <span>verwenden unterschiedliche</span>
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
         <div class="icon-company">
              <img src="../assets/company.svg">
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
  max-width: 100px;
}
.icon{
  background: #eef1f6;
  border-radius: 100%;
  padding: 30px;
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
  height: 20px;
}

.flex-vertical {
  display: flex;
  flex-direction: column;
}
</style>

