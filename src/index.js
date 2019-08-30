import App from './app';
import Vue from 'vue';
import ElementUI from 'element-ui';
import Register from "./lib/register-component"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Register);
Vue.use(ElementUI);
new Vue({
    el: '#app',
    template:'<App/>',
    components: { App }
})