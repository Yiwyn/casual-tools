import {createMemoryHistory, createRouter} from 'vue-router'

import PcControl from "../pages/PcControl.vue";

const routes = [
    {path: '/', component: PcControl},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router