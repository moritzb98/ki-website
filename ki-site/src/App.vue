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
          3 section ...
        </div>
        <div class="section">
          4 section ...
        </div>
        <div class="section">
          <impressum></impressum>
        </div>
        <div class="section">
          <iktdetail> </iktdetail>
        </div>
      </full-page>
    </div>
  </div>
</template>

<script>
import startSection from './components/startSection.vue'
import impressum from './components/impressum.vue'
import introduction from './components/introduction.vue'
import iktdetail from './components/iktdetail.vue'

export default {
  name: 'App',
  components: {
    startSection,
    impressum,
    introduction,
    iktdetail
  },
  data() {
    return {
      options: {
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
        menu: '#myMenu',
        navigation: true,
        //scrollBar: true,
      }
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import './main.css';
</style>
