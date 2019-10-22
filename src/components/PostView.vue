<template>

<div>
<label for ="images">IMAGES</label>
<input type="file" @change="uploadImage" class="form-control">
	</div>


</template>

<script>
import {fb,db} from '../services/firebase.js'
export default {
	name:"Images",
	methods:{
uploadImage(e){
	let file = e.target.files[0];
	var storageRef= fb.storage().ref('images/'+ file.name)
	storageRef.put(file)
	console.log(e.target.files[0])

}
	}
}
</script>