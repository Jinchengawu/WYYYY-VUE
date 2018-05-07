<template>
	<!-- 播放 -->
	<div class="play">
		<div class="left">
			<img src="http://p1.music.126.net/QnEfpW9taEfWccVDg-MctA==/109951163267578612.jpg">
			<div class="gequxiangqing">
				<!-- 歌曲名字 -->
				<span class="musicname">勇气</span>
				<!-- 横划可切换上下首哦 -->
				<span class="jianjie">横划可切换上下首哦</span>
			</div>
		</div>
		<div class="right">
			<!-- 播放按钮 -->
			<span class="bofang"><i class="iconfont icon-iconset0481"></i></span>
			<!-- 歌单按钮 -->
			<span class="gedan"><i class="iconfont icon-jiarugedan"></i></span>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {

			}
		},
		methods:{

		}

	}
</script>
<style type="text/css" scoped="">
	.play {
    width: 100%;
    position: fixed;
    bottom: 0;
    left:0;
    height:50px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 0 10px #666;
    z-index: 10;
    background: white;
  }
  .play .left img{
  	width: 40px;
  	display: block;
  	margin-top: 5px;
  	margin-left: 5px;
  }
  .play .left .gequxiangqing {
  	margin-left: 50px;
  	margin-top: -40px;
  }
  .play .left .gequxiangqing .musicname{
  	font-size: 15px;
  	display: block;
  	margin-top: -15px;
  }
  
  .play .left .gequxiangqing .jianjie{
  	font-size: 13px;
  	display: block;
  	color: #999;
  }
  .play .right span i{
  	font-size:24px;
  }
  .play .right{
  	margin-top: 10px;
  }
  .play .right span{
  	margin-right: 10px;
  }
</style>