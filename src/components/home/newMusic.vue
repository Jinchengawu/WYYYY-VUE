<template>
		
	<div class="newMusic">
		<div class="title">
    		 最新音乐
   		   <i class="icon"></i>
    	</div>
		<ul>
			<li v-for="item in musicList" @click="">
				<h4>{{item.name}}</h4>
				<p>{{item.song.artists[0].name}} - {{item.name}}</p>
				<i class="iconfont icon-iconset0481"></i>
			</li>

		</ul>
	</div>
</template>
<script type="text/javascript">
	
	import {getMusics} from "../../api/index.js"
	export default {
		created(){
			this.getMusics();
		},
		data(){
			return {
				musicList:[]
			}
		},
		methods:{
			async getMusics(){
				let {data} = await getMusics();
				this.musicList= data.result;
			},
			mcPlay(){

			}
		}
	}
</script>
<style type="text/css" scoped="">
	.newMusic ul li {text-decoration: none;list-style: none;}
	.newMusic ul{width: 97%;margin-left: 3%;padding-top: 20px;}
	.newMusic ul li{
		width: 100%;
		height: 60px;
		line-height: 30px;
		position: relative;
		border-bottom: 1px solid #ddd;
	}
	.newMusic ul li h4{
		font-size: 18px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 85%;
	}
	.newMusic ul li p{
		font-size: 14px;
		width: 85%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.newMusic ul li .iconfont{
		position: absolute;
		right: 0;
		top:14px;
		font-size: 26px;
		width: 10%;
	}
	.newMusic .title{
    position: relative;
    padding-left: 9px;
    margin-bottom: 14px;
    font-size: 17px;
    height: 20px;
    line-height: 20px;
  }
  .newMusic .title:after{
    content: " ";
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -9px;
    width: 2px;
    height: 16px;
    background-color: #d33a31;
  }
</style>