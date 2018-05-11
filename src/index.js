import Vue from 'vue'
import App from './app.vue'
import router from './router.js'

Vue.config.debug = true;
// const root= document.createElement('div');
// document.body.appendChild(root);
new Vue({
	el: '#app',
	router,
 render: h => h(App)
})
// .$mount(root)