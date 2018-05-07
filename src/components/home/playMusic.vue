<template>
	<div class="playMic">
	<div class="back">
      <i @click="back" class="iconfont icon-fanhui delef"></i>
      <div class="derig">
        
      </div>
    </div>
		<div>
			<audio :src="play.url" controls=""></audio>
		</div>
	</div>
</template>
<script type="text/javascript">
import {getMusicList,getgedanxiangqing,getPlayMic} from '@/api/index.js'
	export default{
		created(){
			this.getPlayMic();

		},
		data(){
			return{
				play:[]
			}
		},
		methods:{
			async getPlayMic(){
				let {data} = await getPlayMic(this.$route.params.id);
        console.log(data);
				this.play= data.data[0];
				console.log(data.data[0]);
        console.log(this.play.url);
			},
			back(){
		      this.$router.go(-1);
		    }
		}
	}
</script>
<style type="text/css" scoped="">
	.playMic .back{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 70px;
    width: 100%;
    background: #2B3A41;
  }
  .playMic .back i{
    width: 50px;
    height: 70px;
    float: left;
    font-size: 22px;
    color: #fff;
    line-height: 70px;
    text-align: center;
    display: inline-block;
  }
  .playMic .back .derig{
    float: left;
    padding-top: 12px;
    padding-left: 4px;
    height: 70px;
  }
</style>