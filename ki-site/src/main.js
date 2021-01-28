import Vue from 'vue'
import App from './App.vue'


// Import Pop-Up
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

// Import Fullpage
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'

// Import Highcharts
import HighchartsVue from 'highcharts-vue'
import More from 'highcharts/highcharts-more'
import Highcharts from 'highcharts'

// Scrollmagic
import VueScrollmagic from 'vue-scrollmagic'

// Particles.js
import Particles from "particles.vue";
 
Vue.use(Particles);

Vue.use(VueScrollmagic, {
  globalSceneOptions: {
    triggerHook : 'onLeave'
  },
})

Vue.config.productionTip = false

Vue.use(VueFullPage);
Vue.use(HighchartsVue);
More(Highcharts);

new Vue({
  el: '#app',
  render: h => h(App),
});