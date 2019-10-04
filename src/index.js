import XnsAudioPlayerSimple from "./XnsAudioPlayerSimple.vue";
import xnsPlayerStore from './xnsPlayerStore.js';

export default {
    install(Vue, options = {}) {
        // register component globally
        // https://vuejs.org/v2/guide/components-registration.html
        if (!options.store) console.log('Please provide a store!!')

        Vue.component("xns-audio-player-simple", XnsAudioPlayerSimple);

    	options.store.registerModule('XnsPlayerStore', xnsPlayerStore)
    }
}
