import XnsAudioPlayerSimple from "./XnsAudioPlayerSimple.vue";

export default {
    install(Vue, options = {}) {
        // register component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("xns-audio-player-simple", XnsAudioPlayerSimple);
    }
}
