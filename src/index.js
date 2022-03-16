import XnsAudioPlayerSimple from "./XnsAudioPlayerSimple.vue";

export default {
    install(app, options) {
        // register component globally
        // https://vuejs.org/v2/guide/components-registration.html
        app.component("xns-audio-player-simple", XnsAudioPlayerSimple);
    }
}