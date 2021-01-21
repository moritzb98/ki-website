<template>
  <div id="app">
  <div id="blurID" class="blurContainer">
  <div class="containertextblur">
    <p class="textblur"> Die IKT bildet eine besonders interessante Branche, da KI nutzende Unternhemen hier häufig Dienstleister für andere Branchen sind. Nachfolgend wird gezeigt wo Künstliche Intelligenz in der IKT aufzufinden ist.</p>
    <button v-on:click="blureffektaus"> Los geht's!</button>
  </div>
  </div>
    <div id="blurdiv">
    <div>
      <a id="glossar-buttonID" class="glossar-button glossar-button-show" href="#" v-on:click="toggleGlossar">GLOSSAR  <img src="./assets/pfeil-nach-unten-nav.svg"></a>
      <a id="glossar-buttonX" class="glossar-button" href="#" v-on:click="toggleGlossar">GLOSSAR  <img id="arrowRotate" src="./assets/pfeil-nach-unten-nav.svg"></a>
      <div id="glossarID" class="glossar">
        <grundlagenki></grundlagenki>
      </div>
      
      <nav id="nav">
          <ul id="myMenu">
            <li data-menuanchor="Home" class="active"><a href="#Home"><svg fill="white" height="20px" viewBox="0 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0"/></svg></a></li>
            <li data-menuanchor="InformationenZurStudie"><a href="#InformationenZurStudie">01</a></li>
            <li class="no-connection" data-menuanchor="AllgemeineBetrachtung"><a href="#AllgemeineBetrachtung">02</a>
              <ul class="nav2 firstnav">
                <li class="no-connection" data-menuanchor="AllgemeineBetrachtung"><a href="#AllgemeineBetrachtung"><div class="dot"></div></a></li>
                <li class="no-connection" data-menuanchor="AllgemeineBetrachtungB"><a href="#AllgemeineBetrachtungB"><div class="dot"></div></a></li>
              </ul>
            </li>
            <li data-menuanchor="BedeutungVonKI"><a href="#BedeutungVonKI">03</a></li>
            <li data-menuanchor="UmsatzanteilKI"><a href="#UmsatzanteilKI">04</a></li>
            <li data-menuanchor="ErstmaligerEinsatzVonKI"><a href="#ErstmaligerEinsatzVonKI">05</a></li>
            <li data-menuanchor="BeschäftigteUndUmsatz"><a href="#BeschäftigteUndUmsatz">06</a></li>
            <li class="no-connection" data-menuanchor="Funktionsbereich"><a href="#Funktionsbereich">07</a>
            <ul class="nav2 secondnav">
              <li class="no-connection" data-menuanchor="Funktionsbereich"><a href="#Funktionsbereich"><div class="dot"></div></a></li>
              <li class="no-connection" data-menuanchor="Funktionsbereich"><a href="#Funktionsbereich/1"><div class="dot"></div></a></li>
              <li class="no-connection" data-menuanchor="Funktionsbereich"><a href="#Funktionsbereich/2"><div class="dot"></div></a></li>
            </ul>
            </li>
            <li class="no-connection" data-menuanchor="Impressum"><a id="impreesum-link" href="#Impressum">IMPRESSUM</a></li>
          </ul>
        </nav>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          <startSection></startSection>
        </div>
        <div class="section">
          <introduction></introduction>
        </div>
        <div class="section">
          <UmsatzanteilKI></UmsatzanteilKI>
        </div>
        <div class="section">
          <allgemeineBetrachtung ref="allgemeineBetrachtung"></allgemeineBetrachtung>
        </div>
        <div class="section">
          <allgemeinebetrachtung2></allgemeinebetrachtung2>
        </div>
        <div class="section">
          <kiincompany></kiincompany>
        </div>
        <div class="section">
          <kiincompany2></kiincompany2>
        </div>
        <div class="section">
          <KIAusgabenUndBeschaeftigte></KIAusgabenUndBeschaeftigte>
        </div>
        <div class="section videosection">
          <iktdetail></iktdetail>
        </div>
        <div class="section">
          <impressum></impressum>
        </div>
        
      </full-page>
    </div>
  </div>
  </div>
</template>

<script>
import startSection from './components/startSection.vue'
import introduction from './components/introduction.vue'
import iktdetail from './components/iktdetail.vue'
import UmsatzanteilKI from './components/UmsatzanteilKI.vue'
import impressum from './components/impressum.vue'
import kiincompany from './components/kiInCompany.vue'
import kiincompany2 from './components/kiInCompany2.vue'
import KIAusgabenUndBeschaeftigte from './components/KIAusgabenUndBeschaeftigte'
import grundlagenki from './components/grundlagenki.vue'
import allgemeineBetrachtung from './components/allgemeineBetrachtung.vue'
import allgemeinebetrachtung2 from './components/allgemeineBetrachtung2.vue'
//import animatedvideo from './components/animatedvideo.vue'


export default {
  name: 'App',
  components: {
    startSection,
    impressum,
    introduction,
    iktdetail,
    UmsatzanteilKI,
    kiincompany,
    kiincompany2,
    KIAusgabenUndBeschaeftigte,
    grundlagenki,
    allgemeineBetrachtung,
    allgemeinebetrachtung2,
    //animatedvideo
  },
  data() {
    return {
      options: {
        anchors: ['Home', 'InformationenZurStudie', 'AllgemeineBetrachtung', 'AllgemeineBetrachtungB', 'BedeutungVonKI', 'UmsatzanteilKI', 'ErstmaligerEinsatzVonKI', 'BeschäftigteUndUmsatz', 'Funktionsbereich', 'Impressum', 'Test'],
        menu: '#myMenu',
        //navigation: true,
        navigationTooltips: ['Home', 'Informationen zur Studie', 'Allgemeine Betrachtung', 'Allgemeine Betrachtung', 'Bedeutung von KI', 'Erstmaliger Einsatz von KI', 'Vergleich der Beschäftigten und des Umsatzes','Funktionsbereiche', 'Impressum'],
        afterLoad: this.afterLoad,
        //scrollOverflow: true,
        //scrollOverflowReset: true,
      },
      glossarOpen: false,
      infoPopup: true,
      blur: false,
    }
  },
  methods: {
    toggleGlossar: function() {
      document.getElementById('glossarID').classList.toggle("glossar-show");
      document.getElementById('glossar-buttonID').classList.toggle("glossar-button-show");
      document.getElementById('glossar-buttonX').classList.toggle("glossar-button-show");
      document.getElementById('glossar-contentID').classList.toggle("glossar-content-show");
      this.glossarOpen = !this.glossarOpen;
      this.disableScrolling();
    },

    afterLoad: function(origin, destination) {
      if(destination.anchor == "UmsatzanteilKI"){
        this.startBar();
      }
      if(destination.anchor == "InformationenZurStudie"){
        if(this.infoPopup){
          this.$refs.fullpage.api.setMouseWheelScrolling(!this.infoPopup);
          this.$refs.fullpage.api.setAllowScrolling(!this.infoPopup);
          //this.$alert("Um die Studie zu verstehen, lesen Sie bitte das Glossar. Dieses befindet sich rechts oben auf dem Bildschirm!");
          this.$fire({
            title: "Wichtig!",
            text: "Um die Studie zu verstehen, lesen Sie bitte das Glossar. Dieses befindet sich rechts oben auf dem Bildschirm!",
            type: "warning"
          }).then(r => {
            this.$refs.fullpage.api.setMouseWheelScrolling(r);
            this.$refs.fullpage.api.setAllowScrolling(r);
          });
        }
        this.infoPopup = false;  
      }
      if(destination.anchor == "AllgemeineBetrachtungB"){
        this.$refs.allgemeineBetrachtung.pushSeries();
      }
      if(destination.anchor == "Funktionsbereich"){
          if(!this.blur){
            this.blureffekt();
          }
          this.blur=true;
         
        }

      },

    startBar() {
      document.getElementById("counter").classList.add("counter-animate");
    },

    disableScrolling(){
      this.$refs.fullpage.api.setMouseWheelScrolling(!this.glossarOpen);
      this.$refs.fullpage.api.setAllowScrolling(!this.glossarOpen);
    },

    blureffekt(){
      document.getElementById("blurdiv").classList.add("blur");
      this.$refs.fullpage.api.setMouseWheelScrolling(!this.blureffekt);
      this.$refs.fullpage.api.setAllowScrolling(!this.glossarOpen);
      document.getElementById("blurID").classList.add("blurContainerShow");
    },

    blureffektaus(){
      document.getElementById("blurID").classList.remove("blurContainerShow");
      document.getElementById("blurdiv").classList.remove("blur");
      this.$refs.fullpage.api.setMouseWheelScrolling(true);
      this.$refs.fullpage.api.setAllowScrolling(true);
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import './main.css';

#nav {
  position: fixed;
  z-index: 200;
  right: 1%;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

#nav ul li {
    list-style: none;
    width: 100%;
}

#nav ul li:after {
    content: "";
    display: block;
    width: 2px;
    height: 25px;
    background: #eef1f6;
    margin: 6px 0 6px 27px;
}

.textblur{
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
}

button{
  margin-top: 20px;
  text-align: center;
  width: auto;
    font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  background-color: #41567E; /* Green */
  border: none;
  color: white;
  padding: 10px 25px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

.containertextblur{
    text-align: center;
    width: 80%;
    margin:265px auto;

}

#nav a{
  width: 100%;
  display: block;
  text-align: center;
}

.blurContainer{
  position:absolute;
  z-index: 10000;
  visibility:hidden;
  transition: all 0.5s;
}

#blurdiv{
  position:absolute;
  height:100vh;
  width: 100vw;
  background: #0f1012;
}

.blurContainerShow{
  visibility:visible;
}

.nav2 {
  padding: 0;
}

.nav2 li {
  width: 27px;
  height: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.no-connection:after {
  display: none !important;
}

.dot {
  background-color: #eef1f6;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin: 0 auto;
}

.dot:hover {
  width: 8px;
  height: 8px;
}

#nav .active a{
  color:  #f3931f;
}

#nav .active a svg {
    fill:  #f3931f;
}

.fp-viewing-Funktionsbereich-2 #nav .secondnav li:nth-child(3) .dot, .fp-viewing-Funktionsbereich-1 #nav .secondnav li:nth-child(2) .dot, .fp-viewing-Funktionsbereich-0 #nav .secondnav li:nth-child(1) .dot{
  width: 8px;
  height: 8px;
  background:  #f3931f;
}

.fp-viewing-AllgemeineBetrachtung #nav .firstnav li:nth-child(1) .dot, .fp-viewing-AllgemeineBetrachtungB #nav .firstnav li:nth-child(2) .dot{
  width: 8px;
  height: 8px;
  background:  #f3931f;
}

.fp-viewing-AllgemeineBetrachtungB #nav li:nth-child(3) a{
  color:  #f3931f;
}

.glossar-show {
  height: 100% !important;
  
}

.glossar-content-show {
  opacity: 1 !important;
}

.glossar-button img {
  width: 8px;
}

#arrowRotate{
  transform: rotate(180deg);
}
</style>
