import Vue from "vue"
import VueRouter from "vue-router"
import Contact from "../views/Contact";
import Projects from "../views/Projects";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'About Me',
            component: () => import('../views/AboutMe')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('../views/Contact')
        },
        {
            path: '/projects',
            name: 'Projects',
            component: () => import('../views/Projects')
        },
        {
            path: '/beacon',
            name: '',
            component: () => import('../views/Beacon')
        },
    ]
});

export {router}

router.afterEach(() => {
    window.scrollTo(0, 0);
});
