<template>
  <div id="app">
    <div>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <ul id="myMenu">
          <li data-menuanchor="firstPage" class="active"><a href="#firstPage">First</a></li>
          <li data-menuanchor="secondPage"><a href="#secondPage">Second</a></li>
          <li data-menuanchor="thirdPage"><a href="#thirdPage">Third</a></li>
          <li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth</a></li>
          <li data-menuanchor="fourthPage"><a href="#fifthPage">Fifth</a></li>

        </ul>
        <div class="section">
          <startSection></startSection>
        </div>
        <div class="section">
          <introduction></introduction>
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
          <iktdetail> </iktdetail>
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
import iktdetail from './components/iktdetail.vue'
import impressum from './components/impressum.vue'
import kiincompany from './components/kiInCompany.vue'
import kiincompany2 from './components/kiInCompany2.vue'
import kiincompany3 from './components/kiInCompany3.vue'


export default {
  name: 'App',
  components: {
    startSection,
    impressum,
    introduction,
    iktdetail,
    kiincompany,
    kiincompany2,
    kiincompany3
  },
  data() {
    return {
      options: {
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthpage', 'seventhpage', 'lastPage'],
        menu: '#myMenu',
        navigation: true,
        fadingEffect: true,
        navigationTooltips: ['Home', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthpage', 'Impressum'],
        afterLoad: this.afterLoad,
      },
    }
  },
  methods: {
    afterLoad: function(origin, destination) {
      if(destination.anchor == "thirdPage"){
        this.startBar();
      }
    },

    startBar() {
      console.log("Animieren...");
      document.getElementById("verticalbar").classList.add("vertical-bar-animate");
    }
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import './main.css';
</style>
