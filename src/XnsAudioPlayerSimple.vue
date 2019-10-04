<template>
  <div>
    <div class="tw-flex tw-flex-row tw-flex-wrap tw-z-20 tw-min-h-10 tw-max-h-simplePlyrmaxheightsm tw-py-0 tw-px-0 tw-mt-0 tw-mr-0 tw-mb-0 tw-ml-0 tw-bg-no-repeat tw-bg-center tw-bg-cover pp" :style="'max-width:'+playrWidth+'px'">
      <div class="tw-flex tw-flex-row tw-w-full tw-p-r-3 tw-p-l-1 tw-m-0 tw-w-full pp-controls">
        <div class="tw-inline-flex tw-flex-grow-0 tw-w-12 tw-m-1 tw-float-left">
          <img class="tw-h-full tw-w-auto" :src="Songs[presentSongId].cover">
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
              <vue-slider :width="150" :duration="0.1" :min="0" :max="1" v-model="playerVolume" :process="true" :interval="0.01"></vue-slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex'
import './style.css'
import RefreshIcon from 'vue-ionicons/dist/ios-refresh'
import SkipBackwardIcon from 'vue-ionicons/dist/ios-skip-backward'
import PlayIcon from 'vue-ionicons/dist/ios-play'
import PauseIcon from 'vue-ionicons/dist/ios-pause'
import SquareIcon from 'vue-ionicons/dist/ios-square'
import SkipForwardIcon from 'vue-ionicons/dist/ios-skip-forward'
import BufferingIcon from 'vue-ionicons/dist/ios-refresh-circle'
import PlayerMixin from './PlayerMixin'
export default {
  name: 'XnsAudioPlayerSimple',
  components: {
    RefreshIcon,SkipBackwardIcon, PlayIcon, PauseIcon, SquareIcon, SkipForwardIcon, BufferingIcon
  },
  mixins: [PlayerMixin],
  props: {songs: {type: Array, default: () => [{ audio: 'https://www.zapsplat.com/wp-content/uploads/2015/music-one/music_zapsplat_chiller.mp3', artist: 'Chiller', tittle: 'funky disco house', album: '', cover: 'https://i.pinimg.com/originals/a3/81/72/a3817233df6f98ecd03f399bbdc114f4.jpg' }]}, playrWidth: {type: Number, default: 300}, repeatAll: {type: Boolean, default: false}},
  data(){
    return { playerVolume: 1, playerProgressPercent: 0}
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
  computed:{
    ...mapState([
      'Songs',
      'presentSongId',
      'lastSongId',
      'isPlaying',
      'audio',
      'isPaused',
      'timeBufferSecs',
      'timeBufferMins',
      'currentTrackTime',
      'lastRecordedTrackTime',
      'countCheck',
      'currentTrackDuration',
      'color',
      'progressPercent',
      'continuousPlay',
      'timeLapse',
      'volume',
      'playerIsBuffering'
  ]),
    ...mapGetters([
      'getVolume',
      'getProgressPercent',
      'getProgressPercent'
      ])
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
  [v-cloak]{
    display: none;
  }
</style>
