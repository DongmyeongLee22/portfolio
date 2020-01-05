import Vue from "vue"
import VueRouter from "vue-router"
import AboutMe from "../views/AboutMe";
import Contact from "../views/Contact";
import Projects from "../views/Projects";
import Beacon from "../views/Beacon";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'About Me',
            component: AboutMe
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/beacon',
            name: '',
            component: Beacon
        },
    ]
})