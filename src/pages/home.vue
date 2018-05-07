<template>
<div class="box">
	<qiehuan></qiehuan>
	<swiper :options="swiperOption" ref="mySwiper" class="myswiper" @slideChangeTransitionStart="changePage" @slideChangeTransitionEnd="loadingNext">
	    
	    <!-- slides -->
	    <swiper-slide v-model="index"  style="height:auto">
			<div>
				<!-- 轮播 -->
				<lunbo></lunbo>
			</div>
			<div>
				<!-- 推荐歌单-->
				<tuijiangedan></tuijiangedan>
			</div>
			<div>
				<!-- 热门MV -->
				<MVList></MVList>
			</div>
			<div>
				<!-- 推荐电台 -->
				<DjList></DjList>
			</div>
	    </swiper-slide>
	    <swiper-slide v-model="index">
			<!-- mv推荐 -->
			<mvRecommend :init="isInit"></mvRecommend>
		</swiper-slide>
	    <swiper-slide>
			<!-- 电台推荐 -->
			<djRecommend></djRecommend>
		</swiper-slide>
		<!-- <div class="swiper-pagination" slot="pagination"></div> -->
	</swiper>
	
</div>
</template>
<script type="text/javascript">
	import qiehuan from "../base/qiehuan.vue"
	import tuijiangedan from "../components/home/tuijiangedan.vue"
	import newMusic from "../components/home/newMusic.vue"
	import lunbo from "../components/home/lunbo.vue"
	import MVList from "../components/home/MVlist.vue"
	import DjList from "../components/home/DjList.vue"
	import mvRecommend from "../components/mvRecommend/mvRecommend.vue"
	import djRecommend from "../components/djRecommend/djRecommend.vue"

	export default {
		data(){
			return {
				swiperOption: {
					autoplay: false,
					nextEl: '.swiper-button-next',
    				prevEl: '.swiper-button-prev',
    				scrollbar: {
				    	hide: false
				  	},
				  	pagination :{
				  		pagination : '.swiper-pagination',
						paginationClickable :true,
						el: '.swiper-pagination', 
						clickable :true,
				 	},
				 	autoHeight: true,
				 	uniqueNavElements: true

				},
				index:0,
				allPagesIndex: [],
				currenPage: 0,
				isInit: false
			}
		},
		 components:{
   			tuijiangedan,
   			newMusic,
   			lunbo,
   			qiehuan,
   			MVList,
			DjList,
			mvRecommend,
			djRecommend
 		 },
 		 mounted() {
 		 	this.initAllPagesIndex();
 		 },
 		 methods: {
 		 	callback() {
 		 		console.log("123");
 		 	},
 		 	//滑屏触发事件
 		 	changePage() {
 		 		// 1.先保留前一个页面的值scroll值
 		 		this.allPagesIndex[this.currenPage] = document.documentElement.scrollTop;

 		 		// 2.滚东到记忆的位置
 		 		console.log(this.allPagesIndex[this.currenPage]);
 		 		console.log(this.$refs.mySwiper.swiper.activeIndex);
 		 		console.log(this.allPagesIndex[this.$refs.mySwiper.swiper.activeIndex]);
 		 		window.scrollTo(0, this.allPagesIndex[this.$refs.mySwiper.swiper.activeIndex]);

 		 		// 3.给当前页赋新值
 		 		this.currenPage = this.$refs.mySwiper.swiper.activeIndex;

 		 		// 
 		 	},
 		 	//
 		 	initAllPagesIndex() {
 		 		// 将数据进行初始化
 		 		for(var i = 0; i < this.$refs.mySwiper.swiper.slides.length; i++) {
 		 			this.allPagesIndex[i] = 0;
 		 		}
 		 	},
 		 	loadingNext() {
 		 		console.log("切换页面");
 		 		if(this.$refs.mySwiper.swiper.activeIndex == 1) {
 		 			this.isInit = !this.isInit;
 		 		}
 		 	}
 		 },

	}
</script>
<style type="text/css" scoped="">
.box{
	margin-bottom: 50px;
}

.myswiper {
	padding-top: 90px;
}


</style>