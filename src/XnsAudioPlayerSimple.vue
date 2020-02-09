<template>
  <div>
    <div class="tw-flex tw-flex-col tw-flex-wrap tw-z-20 tw-min-h-10 tw-max-h-simplePlyrmaxheightsm tw-py-0 tw-px-0 tw-mt-0 tw-mr-0 tw-mb-0 tw-ml-0 tw-bg-no-repeat tw-bg-center tw-bg-cover pp" :style="'max-width:'+localPlayerWidth+'px'">
      <div class="tw-flex tw-flex-row tw-w-full tw-items-center tw-justify-between px-4 py-1">
        <playback-progress :listen="playerIsPlaying || playerIsPaused" :current-time="currentTrackTime" :total-duration="currentTrackDuration" @seekedTo="seekPlayer" :intensity="volume"></playback-progress>
      </div>
      <div :title="songsCount > 0 ? songs[currentTrackId].artist +' - '+songs[currentTrackId].title : 'No Audio To Play'" class="tw-flex tw-flex-row tw-w-full tw-p-r-3 tw-p-l-1 tw-m-0 tw-w-full pp-controls">
        <div class="tw-inline-flex tw-flex-grow-0 tw-w-12 tw-m-1 tw-float-left" :style="!(songsCount > 0 && songs[currentTrackId].cover !== '') ? 'background-color: '+coverColor : ''">
          <img class="tw-h-auto tw-w-full" v-if="songsCount > 0 && songs[currentTrackId].cover !== ''" :src="songs[currentTrackId].cover">
          <MusicalNoteIcon v-else :root-class="'pp-icons tw-h-full tw-w-auto'" class="tw-cursor-pointer tw-text-white" w="40" h="40" />
        </div>
        <div class="tw-inline-flex tw-flex-grow tw-flex-col tw-items-center tw-w-full">
          <div class="tw-inline-flex tw-flex-row tw-w-full tw-items-center tw-align-middle tw-justify-between tw-p-l-3 tw-p-r-1 tw-py-1">
            <div class="tw-inline-flex tw-flex-row tw-justify-start">
              <div v-if="((currentTrackId > 0) || continuousPlaybackStatus) && (songsCount > 0)" class="tw-flex-1 tw-m-1 tw-justify-center tw-align-middle" @click="previous()">
                <SkipBackwardIcon :root-class="'pp-icons'" class="tw-cursor-pointer tw-text-white" w="30" h="30" />
              </div>
              <div class="tw-flex-1 tw-m-1 tw-justify-center tw-align-middle">
                
                <span @click="playTrack()" v-show="!playerIsPlaying && !playerIsLoading">
                  <PlayIcon :root-class="'pp-icons'" class="tw-cursor-pointer tw-text-white" w="30" h="30"/>
                </span>
                
                <span @click="pause()" v-show="playerIsPlaying && !playerIsLoading" :disabled="songsCount <= 0">
                  <PauseIcon :root-class="'pp-icons'" class="tw-cursor-pointer tw-text-white" w="30" h="30" />
                </span>
                
                <span>
                  <BufferingIcon :root-class="'pp-icons'" class="tw-text-white tw-cursor-pointer" animate="beat" v-show="playerIsLoading" w="30" h="30" />
                </span>
              </div>
              <div class="tw-flex-1 tw-m-1 tw-justify-center tw-align-middle" @click="stop()" :disabled="songsCount <= 0">
                <SquareIcon :root-class="'pp-icons'" class="tw-cursor-pointer tw-text-white" w="30" h="30" />
              </div>
              <div v-if="((currentTrackId < lastSongId) || continuousPlaybackStatus) && (songsCount > 0)" class="tw-flex-1 tw-m-1 tw-justify-center tw-align-middle" @click="next()" :disabled="songsCount <= 0">
                <SkipForwardIcon :root-class="'pp-icons'" class="tw-cursor-pointer tw-text-white" w="30" h="30"/>
              </div>
            </div>

            <div v-if="(localPlayerWidth >= 600) && (songs[currentTrackId].audio !== '') && showAudioData" class="tw-inline-flex tw-flex-row tw-justify-start tw-text-white tw-truncate">
              {{songs[currentTrackId].artist || 'Unknown'}} - {{songs[currentTrackId].title || 'Unknown'}}
            </div>

            <div class="tw-inline-flex tw-flex-row tw-justify-end">
              <div v-if="(localPlayerWidth >= 400) && showAudioDuration " class="tw-inline-flex tw-flex-row tw-justify-end tw-text-white timer">
                {{(localPlayerWidth >= 600) ? $options.filters.doubleDigits(currentTrackTime) : ''}} {{(localPlayerWidth >= 600) ? '-' : ''}} {{currentTrackDuration | doubleDigits}}
              </div>
              <div class="tw-flex-1 tw-mx-1">
                <div @click="decreaseVolume()" :disabled="(volume <= 0.1) || (songsCount <= 0)" :class="(localPlayerWidth >= 400) ? 'tw-bg-transparent tw-float-right tw-text-white tw-p-t-2' : 'tw-bg-transparent tw-float-right tw-text-white'">
                  <VolumeReduceIcon v-if="volume > 0" class="tw-cursor-pointer tw-text-white" :root-class="'pp-icons'" :w="localPlayerWidth >= 500 ? '35' : '25'" :h="localPlayerWidth >= 500 ? '35' : '25'"/>
                  <VolumeReduceIconInactive v-else class="tw-cursor-pointer tw-text-white" :root-class="'pp-icons'" :w="localPlayerWidth >= 500 ? '35' : '25'" :h="localPlayerWidth >= 500 ? '35' : '25'"/>
                </div>
              </div>
              <div :class="(localPlayerWidth >= 400) ? 'tw-flex-1 tw-mx-2 tw-p-t-2' : 'tw-flex-1 tw-mx-2'">
                <div @click="increaseVolume()" :disabled="(volume >= 1) || (songsCount <= 0)" class="tw-bg-transparent tw-float-right tw-text-white">
                  <VolumeAddIcon v-if="volume < 1" class="tw-cursor-pointer tw-text-white" :root-class="'pp-icons'" :w="localPlayerWidth >= 500 ? '35' : '25'" :h="localPlayerWidth >= 500 ? '35' : '25'"/>
                  <VolumeAddIconInactive v-else class="tw-cursor-pointer tw-text-white" :root-class="'pp-icons'" :w="localPlayerWidth >= 500 ? '35' : '25'" :h="localPlayerWidth >= 500 ? '35' : '25'"/>
                </div>
              </div>
              <div :class="(localPlayerWidth >= 400) ? 'tw-flex-1 tw-mx-1 tw-p-t-2' : 'tw-flex-1 tw-mx-1'">
                <span @click="updateContinuousPlaybackStatus()" :class="continuousPlaybackStatus ? 'tw-bg-transparent tw-float-right tw-text-white tw-text-primary-green' : 'tw-bg-transparent tw-float-right tw-text-white'"><RepeatIcon :root-class="continuousPlaybackStatus ? 'pp-icons-green' : 'pp-icons'" class="tw-cursor-pointer tw-text-white" :w="localPlayerWidth >= 500 ? '35' : '25'" :h="localPlayerWidth >= 500 ? '35' : '25'"/></span>
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
import RepeatIcon from 'vue-ionicons/dist/ios-repeat'
import SkipBackwardIcon from 'vue-ionicons/dist/ios-skip-backward'
import PlayIcon from 'vue-ionicons/dist/ios-play'
import PauseIcon from 'vue-ionicons/dist/ios-pause'
import SquareIcon from 'vue-ionicons/dist/ios-square'
import SkipForwardIcon from 'vue-ionicons/dist/ios-skip-forward'
import BufferingIcon from 'vue-ionicons/dist/ios-more'
import VolumeAddIconInactive from 'vue-ionicons/dist/ios-add-circle-outline'
import VolumeAddIcon from 'vue-ionicons/dist/ios-add-circle'
import VolumeReduceIconInactive from 'vue-ionicons/dist/ios-remove-circle-outline'
import VolumeReduceIcon from 'vue-ionicons/dist/ios-remove-circle'
import MusicalNoteIcon from 'vue-ionicons/dist/ios-musical-note'
import PlaybackProgress from './PlaybackProgress'
export default {
  name: 'XnsAudioPlayerSimple',
  components: {
    RepeatIcon, SkipBackwardIcon, PlayIcon, PauseIcon, SquareIcon, SkipForwardIcon, BufferingIcon, VolumeAddIcon, VolumeReduceIcon, VolumeReduceIconInactive, VolumeAddIconInactive, MusicalNoteIcon, PlaybackProgress
  },
  props: {
    playlist: {type: Array, default: () => []},
    playerWidth: {
      type: Number,
      default: 320
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
    }
  },
  data(){
    return {
      // player details
      localPlayerWidth: 320,
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
      coverColor: ''
    }
  },
  watch: {
    immediate: true,
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
      this.validateProgressColor(this.progressBarColor)
    }
  },
  filters:{
    doubleDigits (val) {
      if(isNaN(val)){
        return '00'
      }else{
        if(val < 60){
          return val.toFixed() < 10 ? '0 : 0' + val.toFixed() : '0 : ' + val.toFixed()
        } else {
          let seconds = (val.toFixed() % 60) == 60 ? '00' : (val % 60).toFixed()
          let minutes = Math.floor(val.toFixed()/60).toFixed()
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
  },
  methods: {
    adjustPlayerDimensions(width){
      this.localPlayerWidth = (width < 320 ) ? 320 : (width > 1366) ? 1366 : width
    },
    validateProgressColor(color){
      this.localProgressBarColor = (this.coverColors.indexOf(color) !== -1) ? color : '#008080'
    },
    pickRandomColor(){
      return this.coverColors[Math.floor(Math.random() * this.coverColors.length)];
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
        // console.log("'Fixed' CurrentTrackDuration")
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
        // console.log("currentTrackId ",this.currentTrackId)
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
            // eslint-disable-next-line
            console.log("Reached start of playlist")
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
</style>
