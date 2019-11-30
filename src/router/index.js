import Vue from 'vue'
import Router from 'vue-router'
import Usage from '@/components/Usage'
import Playground from '@/components/Playground'
import Simple from '@/components/Simple'
import VuelidateV from '@/components/VuelidateV'
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
            path:'/usage',
            name:'Usage',
            component: Usage
        },
        {
            path:'/playground',
            name:'Playground',
            component: Playground
        },
        {
            path:'/simple',
            name:'Simple',
            component: Simple
        },
        {
            path:'/vuelidate',
            name:'VuelidateV',
            component: VuelidateV
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