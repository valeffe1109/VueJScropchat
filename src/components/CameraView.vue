
<template>
  <div class="camera-modal">
    <video id="video" ref="video" class="camera-stream"/>
    <div class="camera-modal-container">
            <span @click.prevent="capture" class="take-picture-button take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
              <i class="material-icons">camera</i>
            </span>
    </div>
  </div>
</template>

<script>
  import { storage } from '@/services/firebase'
  import {fb,db} from '../services/firebase.js'
  import convert from '../mixins/convert'

  export default {
    data () {
      return {
		mediaStream: null,
		imageURL:{
			image:null
		}
      }
    },
    mounted () {
		this.$nextTick(()=>{navigator.mediaDevices.getUserMedia({ video: true })
	
        .then(mediaStream => {
          this.mediaStream = mediaStream
          this.$refs.video.srcObject = mediaStream
          this.$refs.video.play()
        })
        .catch(error => console.error('getUserMedia() error:', error))})
	  
    },
    destroyed () {
      const tracks = this.mediaStream.getTracks()
      tracks.map(track => track.stop())
    },
    methods: {
      capture () {
	   const canvas = document.createElement("canvas")
	   canvas.width = video.videoWidth
	   canvas.height =500
	   const ctx = canvas.getContext("2d")
	
	   ctx.drawImage(video,0,0,canvas.width,canvas.height)

	   // const image = document.createElement("img")
	   const image = new Image()
	   image.src= canvas.toDataURL()
	   document.body.appendChild(image)
	   console.log(image)
	var storageRef= fb.storage().ref('images/'+ Date.now())
	var newIMG = new convert().dataToURL(image.src,Date.now())
	let uploadTask = storageRef.put(newIMG)
 
	
	}
	}
  }
  
</script>

<style scoped>
  .camera-modal {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: white;
    z-index: 10;
  }
  .camera-stream {
    width: 100%;
    max-height: 100%;
  }
  .camera-modal-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    align-items: center;
    margin-bottom: 24px;
  }
  .take-picture-button {
    display: flex;
  }
</style>