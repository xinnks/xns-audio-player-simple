# xns-audio-player-simple
A simple yet powerful music player for vuejs based on [xns-audio-player](https://github.com/xinnks/xns-audio-player "xns-audio-player") 

## [Demo](https://jamesinkala.me/awesomeness "xns-audio-player-simple demo")

![xns-audio-player-simple](https://res.cloudinary.com/djx5h4cjt/image/upload/v1581286605/xns-audio-player-simple/xns-audio-player-simple-2.0.0.gif "xns-audio-player-simple")

[![](https://badgen.net/npm/v/xns-audio-player-simple)](https://badgen.net/npm/v/xns-audio-player-simple) [![](https://badgen.net/npm/license/xns-audio-player-simple)](https://badgen.net/npm/license/xns-audio-player-simple) [![](https://badgen.net/packagephobia/publish/xns-audio-player-simple)](https://badgen.net/packagephobia/publish/xns-audio-player-simple) [![](https://badgen.net/bundlephobia/minzip/xns-audio-player-simple)](https://badgen.net/bundlephobia/minzip/xns-audio-player-simple)

### install

```sh
$ npm i xns-audio-player-simple
```


### Import & initiate plugin on your entry js file

```sh
import XnsAudioPlayerSimple from 'xns-audio-player-simple'

Vue.use(XnsAudioPlayerSimple)
```

### Example

```sh
<xns-audio-player-simple :playlist="songs"></xns-audio-player-simple>
```

```sh
export default {
  data () {
    return {
      songs: [
        { audio: 'audio.mp3', artist: 'Superstar', tittle: 'Funky Disco House', album: 'Alpha Zulu', cover: 'cover-art.jpg' }, ...
      ]
    }
  }
}
```

## Options

| Option | Type | Required | Default |
| ------ | ---- | -------- | ------- |
| playerWidth | Number | false | 320 (1366 max) |
| playlist | Array | true | [] |
| repeatAll | Boolean | false | true |
| playerVolume | Number | false | 0.5 |
| stopPlayback | Boolean | false | false |
| pausePlayback | Boolean | false | false |
| showAudioDuration | Boolean | false | true |
| showAudioData | Boolean | false | true |
| progressBarColor | String (HEX color) | false | '#008080' |


### Options Details

__playerWidth__ : Lets you set the width of the player in pixels, 320 <= __playerWidth__ <= 1366.

__playlist__ : Pass audio list as an array.

__repeatAll__ : Enable repetition of all audio files in the playlist

__playerVolume__ : Lets you set the player's volume programatically, from 0 to 1.

__stopPlayback__ : Lets you programatically stop audio playback.

__pausePlayback__ : Lets you programatically pause audio playback.

__showAudioDuration__ : Let's the player show the total duration of the audio file. (This is true for __playerWidth__ >= 400px)

__showAudioData__ : Let's the player show the audio data, specifically artist & title (This is true for __playerWidth__ >= 600px)

__progressBarColor__ : Let's you choose colors for the progress bar from the following array of colors 
```sh
['#008080', '#009688', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#4caf50', '#ff9800', '#607d8b', '#795548']
```

### Player Default Width ###
![xns-audio-player-simple](https://res.cloudinary.com/djx5h4cjt/image/upload/v1581211589/xns-audio-player-simple/small-player.gif "xns-audio-player-simple")

### Player Width = 450 ###
![xns-audio-player-simple](https://res.cloudinary.com/djx5h4cjt/image/upload/v1581211587/xns-audio-player-simple/medium-player.gif "xns-audio-player-simple")

### Player Max Width (1366) ###
![xns-audio-player-simple](https://res.cloudinary.com/djx5h4cjt/image/upload/v1581211588/xns-audio-player-simple/large-player.gif "xns-audio-player-simple")


## Events

__PlayerStatus__
Returns a string describing the status that the player is in, whether 'playing', 'paused' or 'stopped'

__PlaybackTimer__
Returns an obect containing playing item's duration and current position in seconds:
```sh
{
	playingItemDuration: *Number*,
	playingItemTime: *Number*
}
```

### Important Note: ###

To avoid playback and player seek issues you should make sure that where your audio files are served from are done so as a stream. [More Here](http://pervasivecode.blogspot.com/2012/09/currenttime-not-working-with-html5.html)

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/default-orange.png)](https://www.buymeacoffee.com/Xinnks)
