import Vue from 'vue'
import ElementUI from 'element-ui'
import AwesomeSwiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-default/index.css'
import './assets/styles/main.css'
import App from './App.vue'
import Login from './component/Login.vue'
import Index from './component/index/Index.vue'
import Home from './component/index/Home.vue'
import ArticleDetail from './component/index/ArticleDetail.vue'
import VueRouter from 'vue-router'

Vue.use(ElementUI)
Vue.use(AwesomeSwiper)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/', component: Index,name:'index',redirect: { name: 'index.home' },
            children:[
                {path:'home',component:Home,name:'index.home'},
                {path:'articledetail/:id',component:ArticleDetail,name:'index.articledetail'}
            ]
        },
        { path: '/login', component: Login }
    ]
})

new Vue({
  el: '#app',
  render: h => h(App),
    router
})
