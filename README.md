# xns-audio-player-simple
A simple yet powerful music player for VueJs inspired by [xns-audio-player](https://github.com/xinnks/xns-audio-player "xns-audio-player") 

## [Demo](https://xaps.jamesinkala.com "xns-audio-player-simple demo")

![xns-audio-player-simple](https://res.cloudinary.com/djx5h4cjt/image/upload/v1581286605/xns-audio-player-simple/xns-audio-player-simple-2.0.0.gif "xns-audio-player-simple")

[![](https://badgen.net/npm/v/xns-audio-player-simple)](https://badgen.net/npm/v/xns-audio-player-simple) [![](https://badgen.net/npm/license/xns-audio-player-simple)](https://badgen.net/npm/license/xns-audio-player-simple) [![](https://badgen.net/packagephobia/publish/xns-audio-player-simple)](https://badgen.net/packagephobia/publish/xns-audio-player-simple) [![](https://badgen.net/bundlephobia/minzip/xns-audio-player-simple)](https://badgen.net/bundlephobia/minzip/xns-audio-player-simple)

## Vue 2 Support
- Docs - [README](https://github.com/xinnks/xns-audio-player-simple/tree/87b89c3ad99e974d727f5639ad505a146e047c1d#readme)
- Last npm version - [xns-audio-player-simple@2.1.0](https://www.npmjs.com/package/xns-audio-player-simple/v/2.1.0)

## Vue 3 Support

**install**

```sh
$ npm i xns-audio-player-simple
```


**Import & initiate plugin on your entry js file**

```sh
import { createApp } from "vue";
import XnsAudioPlayerSimple from "xns-audio-player-simple";
import App from "./App.vue";

const app = createApp(App);
app.use(XnsAudioPlayerSimple);
app.mount("#app");
```

**Import plugin inside a Vue SFC**

```sh
<script>
import XnsAudioPlayerSimple from "xns-audio-player-simple";

export default {
  components: [XnsAudioPlayerSimple],
  data(){
    return {
      playlist: [...]
    }
  }
}
</script>
```

**Import plugin inside a Vue SFC with the script setup sugar**

```sh
<script setup>
import XnsAudioPlayerSimple from 'xns-audio-player-simple';
import { ref } from "vue";  
const playlist = ref([...]);
</script>
```

**On the template**

```sh
<xns-audio-player-simple :playlist="playlist"></xns-audio-player-simple>
```

**Supported song Object properties**
| Property | Type | Required |
| ------ | ---- | -------- |
| audio | String | true |
| artist | String | true |
| tittle | String | true |
| album | String | true |
| cover | String | true |

**Example**
```sh
export default {
  data () {
    return {
      playlist: [
        { audio: 'audio.mp3', artist: 'Superstar', tittle: 'Funky Disco House', album: 'Alpha Zulu', cover: 'cover-art.jpg' }, ...
      ]
    }
  }
}
```

## Options

| Option | Type | Required | Default |
| ------ | ---- | -------- | ------- |
| playerWidth | Number | false | 0 (100%) |
| playlist | Array | true | [] |
| repeatAll | Boolean | false | true |
| playerVolume | Number | false | 0.5 |
| stopPlayback | Boolean | false | false |
| pausePlayback | Boolean | false | false |
| showAudioDuration | Boolean | false | true |
| showAudioData | Boolean | false | true |
| progressBarColor | String (HEX color) | false | '#008080' |


### Options Details

__playerWidth__ : Lets you set the width of the player in pixels, when set to zero (the default value) the player's width adjusts to fit the content space width as prescribed by the parent.

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

### Player Width = 320px ###
![xns-audio-player-simple](https://res.cloudinary.com/djx5h4cjt/image/upload/v1581211589/xns-audio-player-simple/small-player.gif "xns-audio-player-simple")

### Player Width = 1300px ###
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
