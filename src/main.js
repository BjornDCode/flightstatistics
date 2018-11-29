import Vue from 'vue'
import Iridium from 'iridium-vue'

import App from './App.vue'

Vue.use(Iridium, {
    'prefix': 'ir-'
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
