import Vue from "vue"
import VueRouter from "vue-router"
import AboutMe from "../views/AboutMe";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'AboutMe',
            component: AboutMe
        }
    ]
})