<template>
	<div class="header">
		<!-- 个人 -->
		<router-link to="/1" class="luyou myself"> <i class="iconfont icon-gengduo"></i></router-link>
		
		<div class="zhongxin">
			<!-- 我的音乐 -->
			<router-link to="/mymusic" class="luyou"> <i class="iconfont icon-yinyue"></i></router-link>
			<!-- 首页 -->
			<router-link to="/home" class="luyou"><i class="iconfont icon-vynil"></i></router-link>
			<!-- 视频 -->
			<router-link to="/shipin" class="luyou"><i class="iconfont icon-bofang"></i></router-link>
		</div>
		<!-- 搜索 -->
		<router-link to="/2" class="luyou sousuo" ><i class="iconfont icon-sousuo"></i></router-link>
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
	.header{
		width: 100%;
		height: 50px;
		background: #FF3333;
		position: fixed;
		z-index: 11;
	}
	.header span{
		line-height: 60px;
		color: #fff;
		font-size: 33px;
	}
	.header .zhongxin{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
	.header .zhongxin i{
		/*color: #777;*/
		font-size: 20px;
	}
	.header .myself{
		float: left;
	}
	.header .sousuo{
		float: right;
	}
	.header a{
		/*float: right;*/
		float: left;
		display: block;
		/*border: 1px solid #999;*/
		padding: 0px 10px 5px 10px; 

		text-decoration: none;
		border-radius: 10px;
		color: #fff;
		margin-top: 15px;
		margin-right: 10px;
	}
	a.router-link-active {
    color: blue;
  }
</style>