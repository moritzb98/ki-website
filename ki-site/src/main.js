import Vue from 'vue'
import App from './App.vue'

// Import Fullpage
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'

// Import Highcharts
import HighchartsVue from 'highcharts-vue'
import More from 'highcharts/highcharts-more'
import Highcharts from 'highcharts'

// Scrollmagic
import VueScrollmagic from 'vue-scrollmagic'

Vue.use(VueScrollmagic, {
  verical: true,
  globalSceneOptions: {},
  loglevel: 2,
  refreshInterval: 100
})

Vue.config.productionTip = false

Vue.use(VueFullPage);
Vue.use(HighchartsVue);
More(Highcharts);

new Vue({
  el: '#app',
  render: h => h(App),
});