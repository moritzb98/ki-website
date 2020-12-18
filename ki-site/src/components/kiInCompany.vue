<template>
    <div class="site-container">
        <h2>Betrachtung der KI einsetzenden Unternehmen</h2>
        <div class="flex-container flex-container--space-between">
            <div class="flex-item">
                <div class="flex-container flex-container-100">
                    <div class="flex-item-20">
                        <p class="vertical-bar-text">77%</p>
                        <div class="vertical-bar"></div>
                    </div>
                    <div class="flex-item-80">
                        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor </span>
                    </div>
                </div>
            </div>
            <div class="flex-item platzhalter">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'kiincompany',
  data() {
    return {
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-item {
    width: 40%;
}

.flex-container--space-between {
    justify-content: space-between;
}

.platzhalter {
    height: 450px; 
    background: red;
}

.flex-container-100 {
    height: 100%;
}

.flex-item-80 {
    width: 80%;
}

.flex-item-20 {
    width: 20%;
    overflow: hidden;
}

.vertical-bar {
    bottom: 0;
    margin: 0 auto;
    width: 50%;
    height: 100%;
    background: red;
}

</style>