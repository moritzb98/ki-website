<template>
  <div id="app">
    <div>
      <a id="glossar-buttonID" class="glossar-button glossar-button-show" href="#" v-on:click="toggleGlossar">Glossar</a>
      <a id="glossar-buttonX" class="glossar-button" href="#" v-on:click="toggleGlossar">X</a>
      <div id="glossarID" class="glossar">
        <grundlagenki></grundlagenki>
      </div>
      <nav id="nav">
          <ul id="myMenu">
            <li data-menuanchor="Home" class="active"><a href="#Home">Start</a></li>
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
            <li data-menuanchor="KIAusgabenUndBeschaeftigte"><a href="#KIAusgabenUndBeschaeftigte">07</a></li>
            <li data-menuanchor="Funktionsbereich"><a href="#Funktionsbereich">08</a>
            <ul class="nav2 secondnav">
              <li class="no-connection" data-menuanchor="Funktionsbereich"><a href="#Funktionsbereich"><div class="dot"></div></a></li>
              <li class="no-connection" data-menuanchor="Funktionsbereich"><a href="#Funktionsbereich/1"><div class="dot"></div></a></li>
              <li class="no-connection" data-menuanchor="Funktionsbereich"><a href="#Funktionsbereich/2"><div class="dot"></div></a></li>
            </ul>
            </li>
            <li class="no-connection" data-menuanchor="Impressum"><a href="#Impressum">I</a></li>
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
          <allgemeineBetrachtung></allgemeineBetrachtung>
        </div>
        <div class="section">
          <allgemeinebetrachtung2></allgemeinebetrachtung2>
        </div>
        <div class="section">
          <anzahlBeschaeftigteKi></anzahlBeschaeftigteKi>
        </div>
        <div class="section">
          <kiincompany></kiincompany>
        </div>
        <div class="section">
          <kiincompany2></kiincompany2>
        </div>
        <div class="section">
          <kiincompany3></kiincompany3>
        </div>
        <div class="section">
          <KIAusgabenUndBeschaeftigte></KIAusgabenUndBeschaeftigte>
        </div>
        <div class="section">
         <!-- <iktdetail> </iktdetail>-->
         <animatedvideo></animatedvideo>
        </div>
        <div class="section">
          <impressum></impressum>
        </div>
      </full-page>
    </div>
  </div>
</template>

<script>
import startSection from './components/startSection.vue'
import introduction from './components/introduction.vue'
//import iktdetail from './components/iktdetail.vue'
import UmsatzanteilKI from './components/UmsatzanteilKI.vue'
import impressum from './components/impressum.vue'
import kiincompany from './components/kiInCompany.vue'
import kiincompany2 from './components/kiInCompany2.vue'
import kiincompany3 from './components/kiInCompany3.vue'
import KIAusgabenUndBeschaeftigte from './components/KIAusgabenUndBeschaeftigte'
import grundlagenki from './components/grundlagenki.vue'
import allgemeineBetrachtung from './components/allgemeineBetrachtung.vue'
import allgemeinebetrachtung2 from './components/allgemeineBetrachtung2.vue'
import anzahlBeschaeftigteKi from './components/anzahlBeschaeftigteKi.vue'
import animatedvideo from './components/animatedvideo.vue'


export default {
  name: 'App',
  components: {
    startSection,
    impressum,
    introduction,
    //iktdetail,
    UmsatzanteilKI,
    kiincompany,
    kiincompany2,
    kiincompany3,
    KIAusgabenUndBeschaeftigte,
    grundlagenki,
    allgemeineBetrachtung,
    allgemeinebetrachtung2,
    anzahlBeschaeftigteKi,
    animatedvideo
  },
  data() {
    return {
      options: {
        anchors: ['Home', 'InformationenZurStudie', 'GrundlagenZuKI', 'AllgemeineBetrachtung', 'AllgemeineBetrachtungB', 'BedeutungVonKI', 'UmsatzanteilKI', 'ErstmaligerEinsatzVonKI', 'BeschäftigteUndUmsatz', 'Funktionsbereich', 'Impressum'],
        fadingEffect: true,
        menu: '#myMenu',
        //navigation: true,
        navigationTooltips: ['Home', 'Informationen zur Studie', 'Grundlagen zu KI', 'Allgemeine Betrachtung', 'Allgemeine Betrachtung', 'Bedeutung von KI', 'Erstmaliger Einsatz von KI', 'Vergleich der Beschäftigten und des Umsatzes','Funktionsbereiche', 'Impressum'],
        afterLoad: this.afterLoad,
        scrollOverflow: true,
		scrollOverflowReset: true,
      },
    }
  },
  methods: {
    toggleGlossar: function() {
      document.getElementById('glossarID').classList.toggle("glossar-show");
      document.getElementById('glossar-buttonID').classList.toggle("glossar-button-show");
      document.getElementById('glossar-buttonX').classList.toggle("glossar-button-show");
      document.getElementById('glossar-contentID').classList.toggle("glossar-content-show");
    },

    afterLoad: function(origin, destination) {
      if(destination.anchor == "UmsatzanteilKI"){
        this.startBar();
      }
    },

    startBar() {
      document.getElementById("verticalbar").classList.add("vertical-bar-animate");
    }
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import './main.css';

#nav {
  position: fixed;
  z-index: 9999;
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
    height: 35px;
    background: #eef1f6;
    margin: 6px 0 6px 16px;
}

#nav a{
  width: 100%;
  display: block;
  text-align: center;
}

.nav2 {
  padding: 0;
}

.nav2 li {
  width: 27px;
  height: 17px;
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
  color: red;
}

.fp-viewing-Funktionsbereich-2 #nav .secondnav li:nth-child(3) .dot, .fp-viewing-Funktionsbereich-1 #nav .secondnav li:nth-child(2) .dot, .fp-viewing-Funktionsbereich-0 #nav .secondnav li:nth-child(1) .dot{
  width: 8px;
  height: 8px;
}

.fp-viewing-AllgemeineBetrachtung #nav .firstnav li:nth-child(1) .dot, .fp-viewing-AllgemeineBetrachtungB #nav .firstnav li:nth-child(2) .dot{
  width: 8px;
  height: 8px;
}

.fp-viewing-AllgemeineBetrachtungB #nav li:nth-child(3) a{
  color: red;
}

.glossar-show {
  height: 100% !important;
  
}

.glossar-content-show {
  opacity: 1 !important;
}

</style>
