<template>
    <div ref="trackprogress" class="progress-wrapper" :style="'position: inherit; display: flex; flex: 1; width: inherit; height: 20px; position: relative; background: '+progressShadeColor+'; overflow: hidden;'">
        <div :style="'background: rgba(3,169,244, .8); width: '+progress+'%;position: absolute; left: 0; right: 0; bottom: 0; top: 0; height: inherit; background: '+progressColor+''+colorIntensity" class="progressbar">
        </div>
    </div>
</template>

<script>
export default {
    name: "PlaybackProgress",
    props: {currentTime: {type: Number, default: 0}, totalDuration: {type: Number, default: 300 /* seconds */}, listen: {type: Boolean, default: true}, progressColor: {type: String, default: '#008080'}, progressShadeColor: {type: String, default: '#e1e1e1'}, intensity: {type: Number, default: 0.5}},
    data() {
        return {
            progress: 0, // % of total time
            localTotalDuration: 0, // total playback time
            progressTotalWidth: 0,
            colorIntensity: ''
            // localListen: true, // listen to taps
        }
    },
    computed: {
        localListen(){return this.listen}
    },
    watch: {
        immediate: true,
        currentTime() {
            let max = ((this.currentTime / this.totalDuration) *100)
            this.progress = max <= 100 ? max : 100
        },
        listen(){
            this.listenToEvents(this.listen)
        },
        intensity(){
            this.colorIntensity = (50+(this.intensity * 50)) >= 100 ? '' : (50+(this.intensity * 50))
        }
    },
    mounted() {
        let max = ((this.currentTime / this.totalDuration) *100)
        this.progress = max <= 100 ? max : 100
        this.colorIntensity = 50 // progress opacity value
        this.listenToEvents(this.localListen)
        // recalibrate progress width on window width resize
        window.addEventListener('resize', this.windowResize, false)
    },
    methods: {
        getClickPosition(el){

            el = el || window.event;

            // get target element
            let targ = el.target || el.srcElement;
            if (targ.nodeType == 3) targ = targ.parentNode; // defeat Safari bug
            this.progressTotalWidth = this.progressTotalWidth || targ.offsetWidth // set initial progressbar width
            let seekWidth = el.offsetX

            //change seek position
            this.progress = (seekWidth / this.progressTotalWidth) *100

            // convert seeked posiion(%) to track time
            let trackTime = (this.progress / 100) * this.totalDuration

            // emit seeked time
            this.$emit('seekedTo', trackTime)
        },
        detectMouseDown(e){
          e.preventDefault() // prevent browser from moving objects, following links etc

          // start listening to mouse movements
          this.$refs.trackprogress.addEventListener("mousemove", this.getClickPosition, false)
        },
        detectMouseUp(){
          // stop listening to mouse movements
          this.$refs.trackprogress.removeEventListener("mousemove", this.getClickPosition, false)
        },
        windowResize(){
            let pp = this
            setTimeout(()=>{
                pp.progressTotalWidth = pp.$refs.trackprogress.offsetWidth
            }, 200)
        },
        listenToEvents(listen = true){
            if (listen){
                this.$refs.trackprogress.addEventListener("click", this.getClickPosition, false)
                this.$refs.trackprogress.addEventListener("mousedown", this.detectMouseDown, false)
                this.$refs.trackprogress.addEventListener("mouseup", this.detectMouseUp, false)
            }
            else{
                this.$refs.trackprogress.removeEventListener("click", this.getClickPosition, false)
                this.$refs.trackprogress.removeEventListener("mousedown", this.detectMouseDown, false)
                this.$refs.trackprogress.removeEventListener("mouseup", this.detectMouseUp, false)
            }
        }
    }
}
</script>

<style scoped>
  ::selection{
    background: none;
  }
  *, *:hover{
    cursor: default;
  }
</style>