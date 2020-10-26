import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bulma/css/bulma.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    render: h => h(App),
}).$mount('#app')