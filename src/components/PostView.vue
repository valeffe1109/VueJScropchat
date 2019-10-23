<template>

<div>
<label for ="images">IMAGES</label>
<input type="file" @change="uploadImage" class="form-control">


	<h6>DOWNLOAD UPLOADED PIC : {{this.imageURL.image}}</h6>

	</div>



</template>

<script>
import {fb,db} from '../services/firebase.js'
export default {
	data () {
      return {
		imageURL:{
			image:null
		}
      }
    },
	name:"Images",
	methods:{
uploadImage(e){
	let file = e.target.files[0];
	var storageRef= fb.storage().ref('images/'+ file.name)
	storageRef.put(file)
	console.log(e.target.files[0])
	let uploadTask = storageRef.put(file)
 uploadTask.on('state_changed',(snapshot)=>{

 },(error) => {

 },()=>{

     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
		 this.imageURL.image = downloadURL;
		 console.log('file available at' , downloadURL)
	 })
 })

}
	}
}
</script>