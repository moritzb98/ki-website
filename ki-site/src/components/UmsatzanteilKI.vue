<template>
    <div class="site-container">
      <h2>Gewichtung der Bedeutung von KI Nutzung anhand des Umsatzanteils(Grafik 2.14)</h2>
      <h3>
        Umsatzanteil von Produkten oder Dienstleistungen mit KI-Einsatz in Unternehmen der deutschen Wirtschaft 2019
      </h3>
      <p>
          lorem ipsum dolor
      </p>
      <div class="flex-container">
        <div class="mittig">
          <img src="../assets/IdeeAbb214.png" class="bild">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'UmsatzanteilKI',
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
.container{
    width: 100%;
    margin: 0 auto;
    display:flex;
    margin-top: 20px;
}
.bild{
    margin-top: 20px;
    width:800px;
}
.mittig{
    margin: 0 auto;
    text-align:center;
}
</style>
