# xns-audio-player-simple
[xns-audio-player](https://github.com/xinnks/xns-audio-player "xns-audio-player") vue plugin with a simple ui

![xns-audio-player-simple](https://res.cloudinary.com/djx5h4cjt/image/upload/v1570172265/random/xns-audio-player-simple.jpg "xns-audio-player-simple")


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
<xns-audio-player-simple :songs="playlist"></xns-audio-player-simple>
```

```sh
export default {
  data () {
    return {
      playlist: [
        { audio: 'audio.mp3', artist: 'Superstar', tittle: 'Funky Disco House', album: 'Alpha Zulu', cover: 'cover-art.jpg' }
      ]
    }
  }
}
```

## Options

| Option | Type | Required | Default |
| ------ | ---- | -------- | ------- |
| plarWidth | Number | false | 300 |
| songs | Array | true | (a demo track) |
| repeatAll | Boolean | false | true |
