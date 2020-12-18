<template>
  <div id="app">
    <div>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <ul id="myMenu">
          <li data-menuanchor="firstPage" class="active"><a href="#firstPage">First</a></li>
          <li data-menuanchor="secondPage"><a href="#secondPage">Second</a></li>
          <li data-menuanchor="thirdPage"><a href="#thirdPage">Third</a></li>
          <li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth</a></li>
        </ul>
        <div class="section">
          <startSection></startSection>
        </div>
        <div class="section">
          Second section ...
        </div>
        <div class="section">
          3 section ...
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
import impressum from './components/impressum.vue'

export default {
  name: 'App',
  components: {
    startSection,
    impressum
  },
  data() {
    return {
      options: {
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
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
