<template>
	<div class="qiehuan">
			<router-link to="home" class="luyou" >推荐</router-link>
			<router-link to="MvList" class="luyou">视频</router-link>
			<router-link to="diantai" class="luyou">电台</router-link>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				type:true
			}
		}

	}

</script>
<style type="text/css" scoped="">

	.qiehuan{
		position: fixed;
		z-index:10;
		width: 100%;
		height: 40px;
		background: #FF3333;
		top: 50px;
	}
	.qiehuan .luyou{
		width: 32.9%;
		height: 100%;
		float: left;
		display: block;
		text-align: center;
		line-height: 40px;
		/*border: 1px solid #666;*/
		text-decoration: none;
		color: #fff
	}

	a.router-link-active {
    color: blue;
    }
</style>