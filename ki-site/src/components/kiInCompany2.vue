<template>
    <div class="site-container">
        <h2>Erstmaliger Einsatz von KI</h2>
        <div class="flex-container flex-container--space-between">
            <div class="flex-item-20">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="flex-item-80 platzhalter">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'kiincompany2',
  data() {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.platzhalter {
    height: 450px; 
    background: red;
    background: url('../assets/kim2.png');
    background-size: cover;
}

.flex-item-80 {
    width: 90%;
    position: relative;
  }

  .circle{
    background: #eef1f6;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    margin: auto;
  }

  .flex-item-20 {
      width: 10%;
      display: flex;
      flex-direction: column;
      position: relative;
  }

</style>