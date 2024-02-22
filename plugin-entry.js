import ExpandOnTap from './components/ExpandOnTap.vue'

const ExpandOnTapPlugin = {
    install(Vue) {
        Vue.component(ExpandOnTap.name, ExpandOnTap)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ExpandOnTapPlugin)
}

export default ExpandOnTapPlugin