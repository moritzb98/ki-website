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
          First section ...
        </div>
        <div class="section">
          Second section ...
        </div>
        <div class="section">
          3 section ...
        </div>
        <div class="section">
          4 section ...
        </div>
      </full-page>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  data() {
    return {
      options: {
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#myMenu',
        navigation: true,
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
