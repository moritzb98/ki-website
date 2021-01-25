<template>
    <div class="site-container">
      <h2>Informationen zur Studie</h2>
      <h3> Darstellung der Rahmenbedignungen der betrachteten Studie </h3>
        <div class="flex-container zweispaltig">
          <p class="zweispaltig-text">Künstliche Intelligenz (KI) gilt heute als eine der entscheidenden Schlüsseltechnologien. <b> Dynamisches, effizientes und effektives Aufgreifen </b> ihrer Einsatzmöglichkeiten ist ein entscheidender Faktor, um die <b> Innovationskraft </b> und <b> Wettbewerbsfähigkeit </b> der deutschen Wirtschaft zu <b> erhalten und zu stärken. </b> Mit der im November 2018 verabschiedeten <b> Strategie “Künstliche Intelligenz” </b> setzt die Bundesregierung einen Rahmen für eine ganzheitliche politische Gestaltung</p>
          <p class="zweispaltig-text">politische Gestaltung der weiteren <b>Entwicklung und Anwendung Künstlicher Intelligenz in Deutschland </b>. Die Studie “Intelligenz in der Deutschen Wirtschaft - Stand der KI-Nutzung im Jahr 2019” dient dazu über einen <b> ersten Überblick über die Durchdringung von KI in Deutschland </b> zu gewinnen. Auf den nachfolgenden Seiten werden die wichtigsten Indikatoren dargestellt.</p>
        </div>
        <br>
        <div class="flex-container icon-flex">
          <div v-on:click="toggle(0)" class="icon-container dark shit">
          <div class="circle-container-big">
          <div class="circle-container">
            <div class="icon">
              <div class="kreisOrange">
                <img class="BildIcon" src="../assets/calendar.svg">
              </div>
              </div>
            </div>
            </div>
            <h5 class="icon-text icon-header">Zeitraum der Datenerhebung</h5>
            <p class="icon-text-small ohneText">
              dt. Innovationserhebung: <br>
              2019 <br>
              Zusatzumfrage: <br>
              November 2019 - Januar 2020
            </p>
          </div>
          <div v-on:click="toggle(1)" class="icon-container dark shit">
          <div class="circle-container-big">
          <div class="circle-container">
            <div class="icon">
            <div class="kreisOrange">
              <img class="BildIcon" src="../assets/data-collection.svg">
              </div>
            </div>
            </div>
            </div>
            <h5 class="icon-text icon-header">Form der Datenerhebung</h5>
            <p class="icon-text-small ohneText">
              Repräsentative Sonderauswertung der dt. Innovationserhebung <br>
              Zusatzbefragung von KI einsetzenden Unternehmen
            </p>
          </div>
          <div v-on:click="toggle(2)" class="icon-container dark shit">
          <div class="circle-container-big">
          <div class="circle-container">
            <div class="icon">
            <div class="kreisOrange">
             <img class="BildIcon" src="../assets/group.svg">
           </div>
           </div>
           </div>
           </div>
            <h5 class="icon-text icon-header">Anzahl teilnehmende Unternehmen</h5>
            <p class="icon-text-small ohneText">
              Teilnahmen bei der dt. Innovationserhebung: <br>
              567 <br>
              Teilnahmen bei der Zusatzbefragung: <br>
              368
            </p>
          </div>
          <img class="klick" src="../assets/tap.svg">
        </div>
    </div>
</template>

<script>
export default {
  name: 'introduction',
  data() {
    return {
        show:true
    }
  },
  mounted() {
  },
  methods:{
    toggle:function(index){
      let containers = document.getElementsByClassName("shit");
      let text = document.getElementsByClassName("icon-text-small");

      containers[index].classList.toggle("dark");
      text[index].classList.toggle("ohneText");

    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 85px;
}
.icon-container {
  text-align:center;
  width: 270px;
}

.klick{
  width: 50px;
  height: auto;
  z-index:1;
  position:absolute;top:680px;left:1280px;
}

.zweispaltig{
    width: 1200px;
    text-align: left;
    margin: 0 auto;
  }

  .zweispaltig-text{
    margin: 10px;
    width: 100%;
  }

.BildIcon{
  position: absolute;
    left: 50%;
    margin-left: -42.5px;
    top: 50%;
    margin-top: -42.5px;
}

.circle-container{
  position: relative;
  padding-bottom: 100%;
}

.icon{
  background: #eef1f6;
  border-radius: 100%;
  border-style: solid;
  border-color: #8BB8C1;
  border-width: 6px;
  position: absolute;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  top:10%;
  left:24px;
}

.kreisOrange{

  margin-top: 2.5%;
  margin-left: 2.5%;
  position: absolute;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  border-color: #F4C07A;
  border-style: solid;
}

.icon-flex {
  margin: 0 auto;
  width: 80%;
}

.icon-text{
  text-align: center;
  font-size: 17px;
}

.icon-text-small{
  text-align: center;
  font-size: 14px;
  visibility:visible;
  opacity: 1.0;
  transition:all 0.4s;
}

.icon-header{
  margin-top: 20px;
}

.p-center {
  text-align:center;
}

  .icon-header:after {
    content: "";
    height: 2px;
    width: 50px;
    background-color: #f3931f;
    display: block;
    margin: 8px auto 5px auto;
  }

.dark{
  opacity:0.25;
  transition:all 0.5s;
}

.ohneText{
  visibility:hidden;
  transition:all 0.4s;
  opacity:0;

}

.dark:hover{
  opacity:1;
  cursor:pointer;
}

.circle-container-big{
  width: 70%;
  margin: 0 auto;
}

.shit{
  cursor: pointer;
}

</style>
