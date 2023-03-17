// import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import ArcoVue from '@arco-design/web-vue';
// import '@arco-design/web-vue/dist/arco.css';

import { createApp } from 'vue';
import App from './App.vue';

import TassUI from 'tass-ui';
import 'tass-ui/es/style.css';

const app = createApp(App);
app.use(TassUI).mount('#app');

// Vue.use(ElementUI);
// new Vue({
// 	el: '#app',
// 	render: h => h(App)
// });
