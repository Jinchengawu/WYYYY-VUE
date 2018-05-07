<!-- 实验歌单 -->
<template>
	<div class="gedan">
		123
	</div>
</template>
<script type="text/javascript">
	import { getMusicList,getMusics,getNewMv } from "../api/index.js"
	export default {
		created(){
			this.getMusicLists();
		},
		data(){
			return {
				MusicList:[]
			}
		},
		methods:{
		async getMusicLists(){
				let {data} = await getMusicList();
				let {data2}= await getMusics();
				let {data3}= await getNewMv();
				console.log("run1");
				/*for(let i in data){
					console.log(i);
					console.log(data);
					console.log(data[i]);
				}*/
				/*console.log(data);
				console.log(data2);*/
				console.log(data3);
				console.log("run2");
				// this.MusicList
			}
		}
	}
</script>
<style type="text/css">
	
</style>