import bus from './bus'
import manager from './components/main.vue'
import Vue from 'vue'
import VuePaginate from 'vue-paginate'

Vue.use(VuePaginate)

export default manager;
export {bus, manager};