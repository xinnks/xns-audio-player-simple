import XnsAudioPlayerSimple from "./XnsAudioPlayerSimple.vue";
import XnsSeekBar from 'xns-seek-bar'

export default {
    install(Vue, options = { progressBar: XnsSeekBar}) {
        // register component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.use(options.progressBar)
        Vue.component("xns-audio-player-simple", XnsAudioPlayerSimple);
    }
}