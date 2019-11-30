import Vue from 'vue'
import Router from 'vue-router'
import Methods from '@/components/Methods'
import Computed from '@/components/Computed'
import Watchers from '@/components/Watchers'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect:'/methods'
        },
        {
            path:'/methods',
            name:'Methods',
            component: Methods
        },
        {
            path:'/computed',
            name:'Computed',
            component: Computed
        },
        {
            path:'/watchers',
            name:'Watchers',
            component: Watchers
        }
    ]
})

export default router