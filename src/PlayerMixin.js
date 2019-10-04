import {mapActions, mapMutations } from 'vuex'
 const PlayerMixin = {
  watch:{
    playerVolume () {
        this.changeVolume({volume: this.playerVolume})
      },
      progressPercent(){
        this.playerProgressPercent = this.progressPercent
      },
    timeLapse () {
      if (this.timeLapse) {
        this.updateTimeLapse(false)
      }
      if((this.currentTrackDuration === 'NaN : NaN') || ((this.progressPercent === 'NaN') || (this.progressPercent === 0) || !(this.progressPercent))){ // fix to displaying track time 'NaN : NaN' & timeBufferMins being stuck at 0
        this.updateCountCheck({countCheck: 0})
          this.viewShit()
        }
      },
      volume(){
          this.playerVolume = this.volume
      },
      audio () {
        // changed Track
        this.currentTrackTime = parseInt(this.audio.currentTime);
        this.lastRecordedTrackTime = -1
      }
  },
    mounted(){
      let xns = this;
      setTimeout(function () {
        xns.addSongs({ songs: xns.songs })
        console.log(xns.Songs)
        console.log(xns.Songs.length)
        xns.updateLastSongId({lastSongId: xns.Songs.length - 1})
        xns.updateContinuousPlay({ status: xns.repeatAll })
        xns.playerVolume = xns.getVolume
        xns.playerProgressPercent = xns.getProgressPercent
      }, 2000);
    },
    methods:{
      scrubChange(){
        this.scrubToTime(this.playerProgressPercent)
      },
      changeContinuousPlay(){
        this.updateContinuousPlay({status: !this.continuousPlay})
      },
      ...mapActions([
        'viewShit',
        'playSong',
        'play',
        'nextSong',
        'prevSong',
        'stop',
        'scrubToTime',
        'updateTimeLapse'
      ]),
      ...mapMutations([
        'changeVolume',
        'updateCountCheck',
        'updateAudioCurrentTime',
        'updateLastSongId',
        'changeAudioVolume',
        'updateContinuousPlay',
        'addSongs'
      ])
    }
 }

export default PlayerMixin;
