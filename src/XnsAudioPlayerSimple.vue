<template>
  <div>
    <div class="tw-flex tw-flex-row tw-flex-wrap tw-z-20 tw-min-h-10 tw-max-h-simplePlyrmaxheightsm tw-py-0 tw-px-0 tw-mt-0 tw-mr-0 tw-mb-0 tw-ml-0 tw-bg-no-repeat tw-bg-center tw-bg-cover pp" :style="'max-width:'+playrWidth+'px'">
      <div class="tw-flex tw-flex-row tw-w-full tw-p-r-3 tw-p-l-1 tw-m-0 tw-w-full pp-controls">
        <div class="tw-inline-flex tw-flex-grow-0 tw-w-12 tw-m-1 tw-float-left">
          <img class="tw-h-full tw-w-auto" :src="songs[presentSongId].cover">
        </div>
        <div class="tw-inline-flex tw-flex-grow tw-flex-col tw-items-center tw-w-full">
          <div class="tw-inline-flex tw-flex-row tw-w-full tw-items-center tw-align-middle tw-justify-around tw-px-4 tw-py-1">
            <div v-if="presentSongId > 0 && lastSongId > 0" class="tw-flex-1 tw-m-1 tw-justify-center tw-align-middle" @click="prevSong()">
              <SkipBackwardIcon class="tw-cursor-pointer tw-text-white" w="30" h="30" />
            </div>
            <div class="tw-flex-1 tw-m-1 tw-justify-center tw-align-middle" @click="play()">
              <PlayIcon class="tw-cursor-pointer tw-text-white" v-show="!isPlaying && !playerIsBuffering" w="30" h="30"/>
              <PauseIcon class="tw-cursor-pointer tw-text-white" v-show="isPlaying && !playerIsBuffering" w="30" h="30" />
              <BufferingIcon class="tw-text-white tw-cursor-pointer" animate="rotate" v-show="playerIsBuffering" w="30" h="30" />
            </div>
            <div class="tw-flex-1 tw-m-1 tw-justify-center tw-align-middle" @click="stop()">
              <SquareIcon class="tw-cursor-pointer tw-text-white" w="30" h="30" />
            </div>
            <div v-if="presentSongId < lastSongId && lastSongId > 0" class="tw-flex-1 tw-m-1 tw-justify-center tw-align-middle" @click="nextSong()">
              <SkipForwardIcon class="tw-cursor-pointer tw-text-white" w="30" h="30"/>
            </div>
            <div class="tw-flex-1 tw-w-1/5">
              <span @click="changeContinuousPlay()" :class="continuousPlay ? 'tw-bg-transparent tw-float-right tw-text-white tw-text-primary-green' : 'tw-bg-transparent tw-float-right tw-text-white'"><RefreshIcon w="25" h="25"/></span>
            </div>
          </div>
          <div class="tw-inline-flex tw-flex-row tw-w-full tw-items-center tw-justify-between px-4 py-1">
            <div class="tw-flex-1 tw-w-full">
              <!-- <vue-slider :width="150" :duration="0.1" :min="0" :max="1" v-model="playerVolume" :process="true" :interval="0.01"></vue-slider> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './output.css'
import RefreshIcon from 'vue-ionicons/dist/ios-refresh'
import SkipBackwardIcon from 'vue-ionicons/dist/ios-skip-backward'
import PlayIcon from 'vue-ionicons/dist/ios-play'
import PauseIcon from 'vue-ionicons/dist/ios-pause'
import SquareIcon from 'vue-ionicons/dist/ios-square'
import SkipForwardIcon from 'vue-ionicons/dist/ios-skip-forward'
import BufferingIcon from 'vue-ionicons/dist/ios-refresh-circle'
export default {
  name: 'XnsAudioPlayerSimple',
  components: {
    RefreshIcon,SkipBackwardIcon, PlayIcon, PauseIcon, SquareIcon, SkipForwardIcon, BufferingIcon
  },
  props: {songs: {type: Array, default: () => [{ audio: 'https://www.zapsplat.com/wp-content/uploads/2015/music-one/music_zapsplat_chiller.mp3', artist: 'Chiller', tittle: 'funky disco house', album: '', cover: 'https://i.pinimg.com/originals/a3/81/72/a3817233df6f98ecd03f399bbdc114f4.jpg' }]}, playrWidth: {type: Number, default: 300}, repeatAll: {type: Boolean, default: false}},
  data(){
    return { 
      playerVolume: 1,
      playerProgressPercent: 0,
      presentSongId: 0,
      lastSongId: 0,
      isPlaying: false,
      audio: new Audio(),
      isPaused: false,
      volume: 0.5,
      //
      timeLapse: false,
      timeBufferSecs: 0,
      timeBufferMins: 0,
      playerIsBuffering: false,
      currentTrackTime: 0,
      lastRecordedTrackTime: -1,
      countCheck: 0,
      currentTrackDuration: 0,
      //
      color: '#8dff97',
      progressPercent: 0,
      continuousPlay: false
    }
  },
  filters: {
    doubleDigits (val) {
      if(isNaN(val)){
        return '00'
      }else{
        return val < 10 ? '0' + val : val
      }
    }
  },
  watch: {
    volume () {
      this.audio.volume = this.volume
    },
    timeLapse () {
      let xns = this
      if (this.timeLapse) {
        this.timeLapse = false;
        this.viewShit()
      }
      if((this.currentTrackDuration === 'NaN : NaN') || ((this.progressPercent === 'NaN') || (this.progressPercent === 0))){ // fix to displaying track time 'NaN : NaN' & timeBufferMins being stuck at 0
        this.countCheck = 0
        this.viewShit()
        setTimeout(()=>{
          if((this.progressPercent === 'NaN') || (this.progressPercent === 0)){
              xns.audio.currentTime = xns.audio.currentTime;
              xns.viewShit()
          }
        }, 2000)
      }
    },
    audio () {
      this.currentTrackTime = parseInt(this.audio.currentTime);
      this.lastRecordedTrackTime = -1
      // console.log('changed Track')
    }
  },
  mounted () {
    let xns = this;
    setTimeout(function () {
      xns.lastSongId = xns.songs.length - 1
    }, 1500);
    this.audio.volume = this.volume
  },
  methods: {
    viewShit () {
      let xns = this;
      setTimeout(function () {
        xns.currentTrackTime = parseInt(xns.audio.currentTime);
        // console.log('Current Track Time: ' + xns.currentTrackTime + ' lstRecTime: ' + xns.lastRecordedTrackTime)
        xns.progressPercent = (xns.currentTrackTime / xns.audio.duration) * 100;
        if (xns.countCheck === 0) { // initializer start check
            // console.log('Current Track Time: ' + xns.currentTrackTime + ' lstRecTime: ' + xns.lastRecordedTrackTime)
            let ctdSecs = (parseInt(xns.audio.duration) % 60) < 10 ? '0' + parseInt(xns.audio.duration) % 60 : (parseInt(xns.audio.duration) % 60);
            xns.currentTrackDuration = parseInt(parseInt(xns.audio.duration) / 60) + ' : ' + ctdSecs
          }
          if (xns.currentTrackTime !== xns.lastRecordedTrackTime) {
            // console.log(parseInt(xns.audio.currentTime))
            if (parseInt(xns.audio.currentTime) >= 60) {
                xns.timeBufferMins = Math.floor(xns.audio.currentTime / 60);
                xns.timeBufferSecs = parseInt(Math.floor(xns.audio.currentTime)) % 60
            } else {
                xns.timeBufferSecs = parseInt(Math.floor(xns.audio.currentTime))
            }
            xns.duration -= 1;
            xns.timeLapse = !xns.timeLapse;
            xns.timeLapse = true; // continue time lapse
            xns.countCheck += 1;
            //
            xns.lastRecordedTrackTime = parseInt(Math.floor(xns.audio.currentTime))
          } else {
            if (!xns.audio.paused) {
                xns.isPlaying = true;
                xns.isPaused = false
            } else {
              xns.timeBufferMins = 0;
              xns.timeBufferSecs = 0;
              xns.timeLapse = false; // stop time lapse
              this.countCheck = 0; // initializer end
              xns.isPlaying = false;
              xns.isPaused = false;
              if (xns.continuousPlay) { // if continuous play === true
                xns.nextSong()
              }
            }
          }
      }, 1000)
    },
    play (songId = this.presentSongId, type = '') {
      let xns = this
      this.progressPercent = 0 // reset playback progress
      if (this.isPlaying && !this.isPaused) {
        if (type !== '') { // next/previous
          this.audio.src = this.songs[songId].audio;
          this.audio.play();
          // initial track timer
          this.timeBufferMins = 0
          this.currentTrackDuration = 0
          // change player controls icons
          this.isPlaying = true;
          this.isPaused = false
          // begin buffering of track
          this.playerIsBuffering = true
          this.audio.addEventListener('loadeddata', () => {
            xns.playerIsBuffering = false // enough media to begin playback
          })
          this.audio.addEventListener('playing', () => {
            // Audio has started playing
            xns.countCheck = 0;
            xns.lastRecordedTrackTime = -1;
            xns.timeBufferMins = 0;
          })
        } else { // pause
          this.audio.pause();
          this.isPlaying = false;
          this.isPaused = true
        }
      } else if (!this.isPlaying && this.isPaused) {
        if (type !== '') { // next/previous
          this.audio.src = this.songs[songId].audio;
          this.audio.play();
          // initial track timer
          this.timeBufferMins = 0
          this.currentTrackDuration = 0
          // change player controls icons
          this.isPlaying = true;
          this.isPaused = false
          // begin buffering of track
          this.playerIsBuffering = true
          this.audio.addEventListener('loadeddata', () => {
            xns.playerIsBuffering = false // enough media to begin playback
          })
          this.audio.addEventListener('playing', () => {
            // player has moved to +type+ song
            xns.countCheck = 0;
            xns.lastRecordedTrackTime = -1;
            xns.timeBufferMins = 0;
          })
        } else { // resume playing
          this.audio.play();
          // initial track timer
          this.timeBufferMins = 0
          this.currentTrackDuration = 0
          // change player controls icons
          this.isPlaying = true;
          this.isPaused = false
          // begin buffering of track
          this.playerIsBuffering = true
          this.audio.addEventListener('loadeddata', () => {
            xns.playerIsBuffering = false // enough media to begin playback
          })
          this.audio.addEventListener('playing', () => {
            // Audio has resumed playing
            xns.countCheck = 0;
            xns.lastRecordedTrackTime = -1;
            xns.timeBufferMins = 0;
          })
        }
      } else if (!this.isPlaying && !this.isPaused) {
        this.audio.src = this.songs[songId].audio;
        this.audio.play();
        // initial track timer
        this.timeBufferMins = 0
        this.currentTrackDuration = 0
        // change player controls icons
        this.isPlaying = true;
        this.isPaused = false
        // begin buffering of track
        this.playerIsBuffering = true
        this.audio.addEventListener('loadeddata', () => {
          xns.playerIsBuffering = false // enough media to begin playback
        })
        this.audio.addEventListener('playing', () => {
          // Audio has started playing for the first time
          xns.countCheck = 0;
          xns.lastRecordedTrackTime = -1;
          xns.timeBufferMins = 0;
        })
      }
      //
      this.countCheck = 0;
      this.lastRecordedTrackTime = -1;
      this.timeBufferMins = 0;
      this.viewShit()
    },
    nextSong () {
    if ((this.presentSongId + 1) <= this.lastSongId) {
        this.presentSongId += 1;
        this.play(this.presentSongId, 'next')
      } else {
        if (this.continuousPlay) { // if continuous play === true
            this.play(0) // restart the playlist
        } else {
          this.stop()
          // console.log('We\'ve arrived at the end of the playlist!')
        }
        
      }
      this.countCheck = 0;
      this.lastRecordedTrackTime = -1;
      this.timeBufferMins = 0;
      this.viewShit()
    },
    prevSong () {
      if ((this.presentSongId - 1) >= 0) {
        this.presentSongId -= 1;
        this.play(this.presentSongId, 'prev')
      } else {
        this.stop()
        // console.log('We\'ve arrived at the start of the playlist!')
      }
      this.countCheck = 0;
      this.lastRecordedTrackTime = -1;
      this.timeBufferMins = 0;
      this.viewShit()
    },
    stop () {
      if (this.audio) {
        this.audio.load();
        this.isPlaying = false;
        this.isPaused = false;
        this.continuousPlay = false // halt continuous play
      } else {
        // console.log('Nothing Playing!')
      }
      this.countCheck = 1;
      this.lastRecordedTrackTime = -1;
      this.timeBufferMins = 0
    },
    scrubToTime(){
      this.audio.currentTime = (this.progressPercent * this.audio.duration) / 100;
      this.viewShit()
    }
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
</style>
