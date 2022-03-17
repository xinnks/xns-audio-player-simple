<template>
  <div>
    <div class="tw-flex tw-flex-row tw-flex-wrap tw-z-20 tw-min-h-10 tw-max-h-simplePlyrmaxheightsm tw-py-0 tw-px-0 tw-mt-0 tw-mr-0 tw-mb-0 tw-ml-0 tw-bg-no-repeat tw-bg-center tw-bg-cover pp" :style="`width: ${localPlayerWidth === 0 ? '100%' : localPlayerWidth+'px'}`">
      <div class="tw-flex tw-flex-row tw-w-full tw-items-center tw-justify-between">
        <div ref="trackprogress" class="xns-seeker-progress-wrapper" :style="'height: '+progressBarHeight+'px; background: '+progressBarShadeColor">
          <div :style="'width: '+progress+'%; background: '+localProgressBarColor" class="xns-seeker-progress-bar">
          </div>
        </div>
      </div>
      <div :title="songsCount > 0 ? songs[currentTrackId].artist +' - '+songs[currentTrackId].title : 'No Audio To Play'" class="tw-flex tw-flex-row tw-w-full tw-p-r-3 tw-p-l-1 tw-m-0 tw-w-full pp-controls">
        <div class="tw-inline-flex tw-flex-grow-0 tw-w-12 tw-m-1 tw-float-left" :style="!(songsCount > 0 && songs[currentTrackId].cover !== '') ? 'background-color: '+coverColor : ''">
          <img class="tw-h-auto tw-w-full" v-if="songsCount > 0 && songs[currentTrackId].cover !== ''" :src="songs[currentTrackId].cover">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-else class="tw-cursor-pointer tw-text-white pp-icons tw-h-full tw-w-auto" width="40" height="40"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z"/></svg>
        </div>
        <div class="tw-inline-flex tw-flex-grow tw-flex-col tw-items-center tw-w-full">
          <div class="tw-inline-flex tw-flex-row tw-w-full tw-items-center tw-align-middle tw-justify-between tw-p-l-3 tw-p-r-1 tw-py-1">
            <div class="tw-inline-flex tw-flex-row tw-justify-start">
              <div v-if="((currentTrackId > 0) || continuousPlaybackStatus) && (songsCount > 0)" class="tw-flex-1 tw-m-1 tw-justify-center tw-align-middle" @click="previous()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="tw-cursor-pointer tw-text-white pp-icons" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M8 11.333l10.223-6.815a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L8 12.667V19a1 1 0 0 1-2 0V5a1 1 0 1 1 2 0v6.333z"/></svg>
              </div>
              <div class="tw-flex-1 tw-m-1 tw-justify-center tw-align-middle">
                
                <span @click="playTrack()" v-show="!playerIsPlaying && !playerIsLoading">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" class="pp-icons tw-cursor-pointer tw-text-white"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"/></svg>
                </span>
                
                <span @click="pause()" v-show="playerIsPlaying && !playerIsLoading" :disabled="songsCount <= 0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="tw-cursor-pointer tw-text-white pp-icons" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 5h2v14H6V5zm10 0h2v14h-2V5z"/></svg>
                </span>
                
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="tw-text-white tw-cursor-pointer pp-icons beat" width="30" height="30" v-show="playerIsLoading"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </span>
              </div>
              <div class="tw-flex-1 tw-m-1 tw-justify-center tw-align-middle" @click="stop()" :disabled="songsCount <= 0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" class="tw-cursor-pointer tw-text-white pp-icons"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/></svg>
              </div>
              <div v-if="((currentTrackId < lastSongId) || continuousPlaybackStatus) && (songsCount > 0)" class="tw-flex-1 tw-m-1 tw-justify-center tw-align-middle" @click="next()" :disabled="songsCount <= 0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="tw-cursor-pointer tw-text-white pp-icons" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 12.667L5.777 19.482A.5.5 0 0 1 5 19.066V4.934a.5.5 0 0 1 .777-.416L16 11.333V5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0v-6.333z"/></svg>
              </div>
            </div>

            <div v-if="checkPlayerWidth(600) && songs[currentTrackId] && showAudioData" class="tw-inline-flex tw-flex-row tw-justify-start tw-text-white tw-truncate">
              {{songs[currentTrackId].artist || 'Unknown'}} - {{songs[currentTrackId].title || 'Unknown'}}
            </div>

            <div class="tw-inline-flex tw-flex-row tw-justify-end">
              <div v-if="checkPlayerWidth(400) && showAudioDuration " class="tw-inline-flex tw-flex-row tw-justify-end tw-text-white timer">
                {{checkPlayerWidth(600) ? currentTrackTimeOutput : ''}} {{checkPlayerWidth(600) ? '-' : ''}} {{currentTrackDurationOutput}}
              </div>
              <div class="tw-flex-1 tw-mx-1">
                <div @click="decreaseVolume()" :disabled="(volume <= 0.1) || (songsCount <= 0)" :class="checkPlayerWidth(400) ? 'tw-bg-transparent tw-float-right tw-text-white tw-p-t-2' : 'tw-bg-transparent tw-float-right tw-text-white'">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-if="volume > 0" class="tw-cursor-pointer tw-text-white pp-icons" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11v2h10v-2H7z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-else class="tw-cursor-pointer tw-text-white pp-icons" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-9h10v2H7v-2z"/></svg>
                </div>
              </div>
              <div :class="checkPlayerWidth(400) ? 'tw-flex-1 tw-mx-2 tw-p-t-2' : 'tw-flex-1 tw-mx-2'">
                <div @click="increaseVolume()" :disabled="(volume >= 1) || (songsCount <= 0)" class="tw-bg-transparent tw-float-right tw-text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-if="volume < 1" class="tw-cursor-pointer tw-text-white pp-icons" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-else class="tw-cursor-pointer tw-text-white pp-icons" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/></svg>
                </div>
              </div>
              <div :class="checkPlayerWidth(400) ? 'tw-flex-1 tw-mx-1 tw-p-t-2' : 'tw-flex-1 tw-mx-1'">
                <span @click="updateContinuousPlaybackStatus()" :class="continuousPlaybackStatus ? 'tw-bg-transparent tw-float-right t' : 'tw-bg-transparent tw-float-right tw-text-white'">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="continuousPlaybackStatus ? 'pp-icons-green' : 'pp-icons'" class="tw-cursor-pointer tw-text-white" width="25" height="25"><path fill="none" d="M0 0h24v24H0z"/><path d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z"/></svg>
                
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './output.css'
export default {
  name: 'XnsAudioPlayerSimple',
  props: {
    playlist: {
      type: Array,
      default: () => []
    },
    playerWidth: {
      type: Number,
      default: 0
    },
    repeatAll: {
      type: Boolean,
      default: false
    },
    playerVolume: {
      type: Number,
      default: 0.5
    },
    stopPlayback: {
      type: Boolean,
      default: false
    },
    pausePlayback: {
      type: Boolean,
      default: false
    },
    showAudioDuration: {
      type: Boolean,
      default: true
    },
    showAudioData: {
      type: Boolean,
      default: true
    },
    progressBarColor: {
      type: String,
      default: '#008080'
    },

    // progress bar
    progressBarListen: {
      type: Boolean,
      default: true
    },
    progressBarHeight: {
      type: Number,
      default: 20
    },
    progressBarShadeColor: {
      type: String,
      default: '#e1e1e1'
    },
    progressBarColorIntensity: {
      type: Number,
      default: 0.5
    }
  },
  data(){
    return {
      // player details
      localPlayerWidth: 0,
      localProgressBarColor: '',

      // audio tracks list
      songs: [],
      songsCount: 0,

      //bools - playback helpers
      playerIsPlaying: false,
      playerIsPaused: false,
      playerIsStopped: false,
      isFirstTrack: true,
      isMuted: false,
      playerIsLoading: false,
      continuousPlaybackStatus: false,

      // player element
      audio: new Audio(),

      // player properties
      volume: 0.5,
      buffered: 0,

      // custom helper properties
      currentTrackId: 0,
      currentTrackTime: 0,
      currentTrackDuration: 0,
      lastSongId: 0,

      // cover art colors
      coverColors: [ '#009688', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#4caf50', '#ff9800', '#607d8b', '#795548', '#008080' ],
      coverColor: '',


      // progress bar
      progress: 0, // % of currentTrackDuration
      progressBarTotalWidth: 0
    }
  },
  watch: {
    playerVolume () {
      this.updatePlayerVolume(this.playerVolume)
    },
    repeatAll(){
      this.updateContinuousPlaybackStatus(this.repeatAll)
    },
    playlist(){
      this.updateSongs(this.playlist)
    },
    // let user programatically stop playback
    stopPlayback(){
      if(this.stopPlayback){
        this.stop()
      }
    },
    // let user programatically pause playback
    pausePlayback(){
      if(this.pausePlayback){
        this.pause()
      }
    },
    // observe player width adjustment
    playerWidth(){
      this.adjustPlayerDimensions(this.playerWidth)
    },
    // observe changes on the progress-bar color
    progressBarColor(){
      this.validateProgressColor(this.progressBarColor) // validate progressBarColor
    },

    // progress bar
    currentTrackTime() {
      this.calibrateProgress(this.currentTrackTime)
    },
    currentTrackDuration(){
      this.calibrateProgress(this.currentTrackTime, this.currentTrackDuration)
    },
    progressBarListen(){
      this.listenToEvents(this.progressBarListen)
    },
    progressBarColorIntensity(){
      this.hexOpacity(this.progressBarColor, this.progressBarColorIntensity)
    },
  },
  computed: {
    currentTrackTimeOutput () {
      if(isNaN(this.currentTrackTime)){
        return '00'
      }else{
        if(this.currentTrackTime < 60){
          return this.currentTrackTime.toFixed() < 10 ? '0 : 0' + this.currentTrackTime.toFixed() : '0 : ' + this.currentTrackTime.toFixed()
        } else {
          let seconds = (this.currentTrackTime.toFixed() % 60) == 60 ? '00' : (this.currentTrackTime % 60).toFixed()
          let minutes = Math.floor(this.currentTrackTime.toFixed()/60).toFixed()
          return minutes + ' : ' + (seconds < 10 ? '0' + seconds : seconds)
        }
      }
    },
    currentTrackDurationOutput () {
      if(isNaN(this.currentTrackDuration)){
        return '00'
      }else{
        if(this.currentTrackDuration < 60){
          return this.currentTrackDuration.toFixed() < 10 ? '0 : 0' + this.currentTrackDuration.toFixed() : '0 : ' + this.currentTrackDuration.toFixed()
        } else {
          let seconds = (this.currentTrackDuration.toFixed() % 60) == 60 ? '00' : (this.currentTrackDuration % 60).toFixed()
          let minutes = Math.floor(this.currentTrackDuration.toFixed()/60).toFixed()
          return minutes + ' : ' + (seconds < 10 ? '0' + seconds : seconds)
        }
      }
    },
  },
  mounted () {
    let xns = this;
    this.songs = this.playlist
    setTimeout(function () {
      xns.coverColor = xns.pickRandomColor() // assign random color
      xns.lastSongId = xns.songs.length - 1
      xns.updatePlayerVolume(xns.playerVolume)
      xns.updateContinuousPlaybackStatus(xns.repeatAll)
      xns.adjustPlayerDimensions(xns.playerWidth)
      xns.updateSongs(xns.playlist)
      xns.validateProgressColor(xns.progressBarColor)
    }, 300);
    this.audio.volume = this.volume


    // progress bar
    // calibrate progress
    this.calibrateProgress(this.currentTrackTime, this.currentTrackDuration)

    // set seek bar color
    this.hexOpacity(this.progressBarColor, this.progressBarColorIntensity)

    // start listening to taps and clicks
    this.listenToEvents(this.progressBarListen)

    // recalibrate progress width on window width resize
    window.addEventListener('resize', this.windowResize, false)
  },
  methods: {
    // progress bar
    getClickPosition(el){

      el = el || window.event;

      // get target element
      let targ = el.target || el.srcElement;
      if (targ.nodeType == 3) targ = targ.parentNode; // defeat Safari bug
      this.progressBarTotalWidth = this.progressBarTotalWidth || targ.offsetWidth // set initial progressbar width
      let seekWidth = el.offsetX

      //change seek position
      this.progress = (seekWidth / this.progressBarTotalWidth) *100

      // convert seeked posiion(%) to value
      let trackTime = (this.progress / 100) * this.currentTrackDuration

      // emit seeked value
      this.seekPlayer(trackTime)
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
      setTimeout(()=>{
        this.progressBarTotalWidth = this.$refs.trackprogress.offsetWidth
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
    },

    // calibrate progress
    calibrateProgress(currentVal = this.currentTrackTime, totalVal = this.currentTrackDuration){
      let max = ((currentVal / totalVal) *100)
      this.progress = max <= 100 ? max : 100
    },

    // apply opacity to color
    hexOpacity(hex, opacity){
      let op = ((opacity + this.volume) * 100) <= 99 ? ((opacity + this.volume) * 100) : 99
      this.localProgressBarColor = `${hex}`+op
    },

    adjustPlayerDimensions(width){
      this.localPlayerWidth = ((width < 320) && (width !== 0)) ? 320 : width
    },
    validateProgressColor(color){
      this.localProgressBarColor = (this.coverColors.indexOf(color) !== -1) ? color : '#008080'
      this.hexOpacity(this.localProgressBarColor, this.progressBarColorIntensity) // apply intensity to progressBarColor
    },
    pickRandomColor(){
      return this.coverColors[Math.floor(Math.random() * this.coverColors.length)];
    },

    // check player width
    checkPlayerWidth(val){
      return ((this.localPlayerWidth >= val) || (this.localPlayerWidth === 0))
    },

    emitPlayerStatus(status){
      let  xns = this
      setTimeout(()=>{
        xns.$emit('player-status', status)
      }, 200)
    },
    decreaseVolume(){
      this.updatePlayerVolume((this.volume - 0.1) >= 0 ? (this.volume - 0.1) : 0)
    },
    increaseVolume(){
      this.updatePlayerVolume((this.volume + 0.1) <= 1 ? (this.volume + 0.1) : 1)
    },
    audioListening(listen = true){

      if(listen){
        // start listening
        this.audio.addEventListener('loadeddata', this.proccessPlaybackStart, false)
        this.audio.addEventListener('timeupdate', this.proccessPlaybackTimeUpdate, false)
        this.audio.addEventListener('pause', this.proccessPlaybackPause, false)
        this.audio.addEventListener('emptied', this.proccessPlaybackEmptied, false)
        this.audio.addEventListener('ended', this.proccessPlaybackStop, false)
      } else {
        // stop listening
        this.audio.removeEventListener('loadeddata', this.proccessPlaybackStart, false)
        this.audio.removeEventListener('timeupdate', this.proccessPlaybackTimeUpdate, false)
        this.audio.removeEventListener('pause', this.proccessPlaybackPause, false)
        this.audio.removeEventListener('emptied', this.proccessPlaybackEmptied, false)
        this.audio.removeEventListener('ended', this.proccessPlaybackStop, false)
      }
    },
    updateUi(status){
      this.updateLoadingStatus(status.loading)
      this.updatePlayingStatus(status.playing)
      this.updatePauseStatus(status.pause)
      this.updateStopStatus(status.stop)
    },

    // when first frame of media has finished loading
    proccessPlaybackStart() {
      this.updateUi({loading: false, playing: true, pause: false, stop: false}) // update UI
      this.updateCurrentTrackDuration(this.audio.duration) // get track duration
      this.emitPlayerStatus('playing')
    },

    // when time indicated by the currentTime attribute has been updated
    proccessPlaybackTimeUpdate() {
      // check if track duration is NaN or zero and rectify
      if(isNaN(this.currentTrackDuration) || !isFinite(this.currentTrackDuration)){
        this.updateCurrentTrackDuration(260) // give reasonable track duration
      }  else {
        this.updateCurrentTrackDuration((isNaN(this.audio.duration) || !isFinite(this.audio.duration)) ? 260 : this.audio.duration) // get track duration
      }
      // debug loading
      if(this.playerIsLoading){
        this.updateLoadingStatus(false)
      }

      this.updateCurrentTrackTime(this.audio.currentTime) // get current track time
      this.updateUi({loading: false, playing: true, pause: false, stop: false}) // update UI
    },

    // called when element is paused
    proccessPlaybackPause() {
      this.updateUi({loading: false, playing: false, pause: true, stop: false}) // update UI
      this.emitPlayerStatus('paused')
    },

    // called when loaded() is called
    proccessPlaybackEmptied() {
      // kill all event listeners
      this.audio.removeEventListener('loadeddata', this.proccessPlaybackStart, false)
      this.audio.removeEventListener('timeupdate', this.proccessPlaybackTimeUpdate, false)
      this.audio.removeEventListener('pause', this.proccessPlaybackEmptied, false)
      // update times
      this.updateCurrentTrackTime(0)
      this.updateCurrentTrackDuration(100)

      this.updateUi({loading: false, playing: false, pause: false, stop: true}) // update UI
      this.emitPlayerStatus('stopped')
    },

    // when playback stops at the end of the media
    proccessPlaybackStop() {
      this.emitPlayerStatus('stopped')
      // kill all event listeners
      this.audio.removeEventListener('loadeddata', this.proccessPlaybackStart, false)
      this.audio.removeEventListener('timeupdate', this.proccessPlaybackTimeUpdate, false)
      this.audio.removeEventListener('pause', this.proccessPlaybackPause, false)
      // update times
      this.updateCurrentTrackTime(0)
      this.updateCurrentTrackDuration(100)

      this.updateUi({loading: false, playing: false, pause: false, stop: true}) // update UI

      // check if continuous playback is true
      if(this.continuousPlaybackStatus){
        // check if there's a next track on the playlist
        if((this.currentTrackId + 1) <= this.lastSongId){
          // play next song
          this.updatePlayingStatus(true)  // show player loading animation on UI
          this.updateCurrentTrackId(this.currentTrackId + 1) // update current track id
          this.playTrack() // play audio
        } else {
          // play first track
          this.updatePlayingStatus(true)  // show player loading animation on UI
          this.updateCurrentTrackId(0) // update current track id
          this.playTrack() // play audio
        }
      }
    },
    updateSongs(songs){
      this.songs = songs
      this.songsCount = songs.length
      this.lastSongId = songs.length - 1
    },
    updateContinuousPlaybackStatus(status = !this.continuousPlaybackStatus){
      this.continuousPlaybackStatus = status
    },
    updateCurrentTrackId(trackId){
      this.currentTrackId = trackId
    },
    updateCurrentTrackTime(time){
      this.currentTrackTime = time
      this.$emit('playback-timer', {playingItemDuration: this.currentTrackDuration, playingItemTime: this.currentTrackTime})
    },
    updateCurrentTrackDuration(time){
      this.currentTrackDuration = time
    },
    updatePlayerVolume(volume){
      this.volume = volume
      this.audio.volume = this.volume
    },
    updateLoadingStatus(status) {
      this.playerIsLoading = status
    },
    updatePlayingStatus(status) {
        this.playerIsPlaying = status
    },
    updatePauseStatus(status) {
      this.playerIsPaused = status
    },
    updateStopStatus(status) {
      this.playerIsStopped = status
    },
    playTrack(trackId = this.currentTrackId, skip = false /* next / pevious skips */){
      if(this.songsCount <= 0){ // play is only functional when there are songs on the playlist
        return false
      }
      let xns = this
      // if currentTrackTime is not 0, resume play
      if(this.playerIsPaused & !skip){
        this.audio.currentTime = this.currentTrackTime
        setTimeout(() => {
          this.audio.play()
          xns.audioListening() // resume listening to audio oject
        }, 10)
      } else {
        // abort current player progress
        this.audio.load()
        this.coverColor = this.pickRandomColor() // assign random cover color
        
        this.playerIsLoading = true // show player loading animation on UI

        this.currentTrackId = trackId // update current track id
        this.audio.src = this.songs[trackId].audio
        this.audio.play() // play audio
        setTimeout(() => {
          xns.audioListening() // listen to audio events
        }, 10)
      }
      this.audio.volume = this.volume
    },
    pause(){
      let xns = this
      this.audioListening(false) // stop listening to audio events
      setTimeout(() => {
        xns.audio.pause()
        xns.updateUi({loading: false, playing: false, pause: true, stop: false}) // update UI
      }, 10)
    },
    stop(){
      let xns = this
      xns.audio.load();
      setTimeout(() => {
        this.currentTrackTime = 0
        this.audio.currentTime = 0
        xns.updateUi({loading: false, playing: false, pause: false, stop: true}) // update UI
        xns.audioListening(false) // stop listening to audio events
      }, 10)
    },
    next(){
      let xns = this
      // check if there's a next track on the playlist
      if((this.currentTrackId + 1) <= this.lastSongId){
        // play next song
        this.currentTrackId += 1
        this.audioListening(false) // stop listening to audio events
        setTimeout(() => {
          xns.playTrack(this.currentTrackId, true);
        }, 10)
      } else {
        // check if continuous playback is true
        // TODO convert this, to repeat all check instead
        if(this.continuousPlaybackStatus){
          // play first track
          this.currentTrackId = 0
          this.audioListening(false) // stop listening to audio events
          setTimeout(() => {
            xns.playTrack(this.currentTrackId, true);
          }, 10)
        } else {
            // console.log("Reached end of playlist")
        }
      }
    },
    previous(){
      let xns = this
      // check if there's a previous track on the playlist
      if((this.currentTrackId - 1) >= 0){
        // play previous song
        this.currentTrackId -= 1
        this.audioListening(false) // stop listening to audio events
        setTimeout(() => {
          xns.playTrack(this.currentTrackId, true)
        }, 10)
      } else {
        // check if continuous playback is true
        // TODO convert this, to repeat all check instead
        if(this.continuousPlaybackStatus){
          // play last song
          this.currentTrackId = this.lastSongId
          this.audioListening(false) // stop listening to audio events
          setTimeout(() => {
            xns.playTrack(this.currentTrackId, true)
          }, 10)
        } else {
            // console.log("Reached start of playlist")
        }
      }
    },
    seekPlayer(time){
      let xns = this
      this.audioListening(false) // stop listening to audio events
      this.currentTrackTime = time // seek to given time
      this.audio.currentTime = time // seek to given time
      setTimeout(() =>{
          xns.audioListening() // resume listening to audio oject
      }, 10)
    },
  },
}
</script>

<style scoped>
  .pp{
    background: #232526;
    background: -webkit-linear-gradient(to right, rgba(35, 37, 38, .8), rgba(65, 67, 69, .8));
    background: linear-gradient(to right, rgba(35, 37, 38, .8), rgba(65, 67, 69, .8));
  }
  .pp-controls{
    background: #303942;
    background: -webkit-linear-gradient(to right, rgba(43, 51, 59, 0.95), rgba(41, 50, 60, .95));
    background: linear-gradient(to right, rgba(43, 51, 59, 0.95), rgba(41, 50, 60, .95));
  }
  .pp-icons{
    fill: white !important;
  }
  .pp-icons:focus{
    fill: grey !important;
  }
  .pp-icons-green{
    fill: limegreen;
  }
  ::selection{
    background: none;
  }
  .timer{
    margin: auto;
    padding: 10px;
  }
  .tw-p-t-2{
    padding-top: 7px;
  }

  /*progress bar*/
   .xns-seeker-progress-wrapper{
     display: flex;
     flex: 1;
     width: inherit;
     position: relative;
     overflow: hidden;
   }
  .xns-seeker-progress-bar{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: inherit;
  }
</style>
