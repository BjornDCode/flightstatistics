import Vue from 'vue'
import Iridium from 'iridium-vue'

import App from './App.vue'
import TransitionStepIn from './components/TransitionStepIn'

Vue.use(Iridium, {
    'prefix': 'ir-'
})

Vue.component('transition-step-in', TransitionStepIn)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
