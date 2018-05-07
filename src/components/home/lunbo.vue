<template>
	<div class="guanggao">
		<div class="back"></div>
		
			<swiper :options="swiperOption" ref="mySwiper" class="myswiper">
		    <!-- slides -->
			    <swiper-slide class="lunbotu" >
			    	<img src="http://p1.music.126.net/ZiiDMcG2cr3jixe-pIMvaQ==/109951163219825737.jpg" alt="">
			    </swiper-slide>
			    <swiper-slide class="lunbotu" >
			    	<img src=" http://p1.music.126.net/tF84YZPUl3E2YnInQ-LVGg==/18729081069743886.jpg" alt="">
			    </swiper-slide>
			    <swiper-slide class="lunbotu" >
			    	<img src="http://p1.music.126.net/wpahk9cQCDtdzJPE52EzJQ==/109951163271025942.jpg" alt="">
			    </swiper-slide>
			    <div class="swiper-pagination" slot="pagination"></div>

			 </swiper>
			 
			 <!-- <i class="iconfont icon-gengduo"></i> -->
			 <div class="xuanxiangka">
			 	<span class="xuanxiang">
			 		<i class="iconfont icon-CN_doubanFM"></i>
			 		<em class="text">私人FM</em>
			 	</span>
			 	<span class="xuanxiang">
			 		<i class="iconfont icon-rili"></i>
			 		<em class="text">每日推荐</em>
			 	</span>
			 	<span class="xuanxiang">
			 		<i class="iconfont icon-icon-"></i>
			 		<em class="text">歌单</em>
			 	</span>
			 	<span class="xuanxiang">
			 		<i class="iconfont icon-paixingbang"></i>
			 		<em class="text">排行榜</em>
			 	</span>
			 </div>
	</div>
	
</template>
<script>
	export default{
		create(){
			console.log(666);
		},
		data(){
			return {
				swiperOption: {
					autoplay: true,
					loop:true,
    				scrollbar: {
				    	hide: false,
				  	},
				  	pagination: { 
					el: '.swiper-pagination', 
					clickable :true,
					}
				},
				
			}
		}
	}
</script>
<style type="text/css" scoped="">
	*{
		margin: 0px;
		padding: 0px;
	}
	.guanggao{
		position: relative;
		z-index: 9;
		/*height: 200px;*/
	}
	.back{
		/*height: 50px;*/
		top: 0px;
		width: 100%;
		height: 100px;
		position: relative;
		background: #FF3333;
	}
	.myswiper{
		height: 120px;
		width: 95%;
		text-align: center;
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
		border-radius:5px;
		display: block;
		z-index: 100;
		overflow: hidden;
	}
	.myswiper .lunbotu{
		border-radius: 5px;
	}
	.myswiper img{
		position: absolute;
		width: 100%;
		margin-top: 0px;
		display: block;
	}
	.guanggao .xuanxiangka {
		width: 100%;
		margin-top: 40px;
		padding-bottom: 20px;	
	}
	.guanggao .xuanxiangka .xuanxiang{
		display: inline-block;
		position: relative;
		border: 1px solid red;
		border-radius: 100%;
		width:15%;
		text-align: center;
		
		/*height: px;*/
		margin:5px 15px 10px 15px; 
	}
	.guanggao .xuanxiangka .xuanxiang i{
		width: 100%;
		/*height: 100%*/
		line-height: 53px;
		font-size: 30px;
		height: 53px;
		display: block;
	}
	.guanggao .xuanxiangka .xuanxiang em{
		position: absolute;
		width: 100%;
		display: block;
		font-size: 14px;
		line-height: 15px;
		font-style:normal;
		top: 60px;
		left: 50%;
		transform: translateX(-50%);
	}

</style>