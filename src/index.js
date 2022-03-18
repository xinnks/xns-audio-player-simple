import XnsAudioPlayerSimple from "./XnsAudioPlayerSimple.vue";

const xaps = {
    install (app) {
        app.component("XnsAudioPlayerSimple", XnsAudioPlayerSimple);
    }
}

export default xaps

export { XnsAudioPlayerSimple }