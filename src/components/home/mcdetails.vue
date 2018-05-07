<template>
  <div class="details">
    <div class="back">
      <i @click="back" class="iconfont icon-fanhui delef"></i>
      <div class="derig">
        <h4>歌单</h4>
        <p>根据你喜欢的单曲《空空如也》推荐</p>
      </div>
    </div>
    <div class="contend">
      <ul>
        <li v-for="item in musicList">
          <img :src="item.coverImgUrl" alt="">
          <span>{{item.name}}</span>
          <div class="more">
              <i class="iconfont icon-pinglun"></i>
              <i class="iconfont icon-fenxiang-copy"></i>
              <i class="iconfont icon-download"></i>
              <i class="iconfont icon-duoxuan"></i>
          </div>
          <div class="more1">
              <em>{{item.subscribedCount}}</em>
              <em>{{item.shareCount}}</em>
              <em>下载</em>
              <em>多选</em>
          </div>
        </li>
       <!--  <li>
         <img :src="musicList.result.coverImgUrl" alt="">
         <span>{{musicList.result.name}}</span>
         <div class="more">
             <i class="iconfont icon-pinglun"></i>
             <i class="iconfont icon-fenxiang-copy"></i>
             <i class="iconfont icon-download"></i>
             <i class="iconfont icon-duoxuan"></i>
         </div>
       </li> -->
        
      </ul>
      <ul class="list">
          <li v-for="(item,index) in musicTab" @click="getId(item.id)">
            <em>{{index}}</em>
            <p>{{item.name}}</p>
            <p class="pp">{{item.artists[0].name}} - {{item.name}}</p>
            <i class="iconfont icon-bofang1"></i>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getMusicList,getgedanxiangqing,getPlayMic} from '@/api/index.js'
export default {
  
  data () {
    return {
      musicList:[],
      musicTab :{}
    }
  },
  created () {
    this.getgedanxiangqing();
  },
  methods: {
  async getgedanxiangqing () {
      let {data} = await getgedanxiangqing(this.$route.params.id)
      this.musicList.push(data.result)
      this.musicTab = data.result.tracks;
    },
    getId(id){
      getPlayMic(id)
      this.$router.push(`/playMusic/${id}`);
    },
    back(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped="">
  ul{list-style: none;}
  .details{
    position: absolute;
    height: 280px;
    width: 100%;
    background: #2B3A41;
    top: 0;
    left: 0;
  }
  .details .back{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 70px;
    width: 100%;
    background: #2B3A41;
  }
  .details .back i{
    width: 50px;
    height: 70px;
    float: left;
    font-size: 22px;
    color: #fff;
    line-height: 70px;
    text-align: center;
    display: inline-block;
  }
  .details .back .derig{
    float: left;
    padding-top: 12px;
    padding-left: 4px;
    height: 70px;
  }
  .details .back .derig h4{
    color: #fff;
    font-size: 18px;
  }
  .details .back .derig p{
    color: #666;
  }
  .details .contend{
    margin-top: 70px;
  }
  .details .contend ul li{
    position: relative;
  }
  .details .contend ul li img{
    width: 30%;
    margin-left: 10px;
  }
  .details .contend ul li span{
    width: 60%;
    height: 80px;
    font-size: 18px;
    line-height: 30px;
    color: #fff;
    margin-left: 5%;
    position: absolute;
  }

  .details  .more{
    width: 100%;
    display: flex;
    margin-top: 10px;
    text-align: center;
  }
  .details .more i{
    font-size: 30px;
    color: #fff;
    flex: 1;
  }
  .details  .more1{
    width: 100%;
    display: flex;
    margin-top: 10px;
    text-align: center;
  }
  .details .more1 em{
    font-size: 20px;
    color: #fff;
    font-style: normal;
    flex: 1;
  }
  .details .list{
    background-color: #fff;
    border-radius: 8px;
    margin-top: 40px;
    position: relative;z-index: 20;
  }
  .details .list li{
    height: 70px;
    border-bottom: 1px solid #ddd;
    line-height: 30px;
  }
  .details .list li em{
    width: 12%;
    height: 100%;
    font-size: 22px;
    line-height: 70px;
    font-style: normal;
    display: block;
    color: #999;
    /*margin-left: 16px;*/
    text-align: center;
    float: left;
  }
  .details .list li p{
    width: 68%;
    color: #000;
    height: 35px;
    font-size: 18px;
    line-height: 35px;
    float: left;
    margin-left: 2%;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .details .list li .pp{
    color: #666;
    font-size: 16px;
  }
  .details .list li i{
    position: absolute;
    right: 28px;
    font-size: 24px;
    color: #aaa;
    top: 20px;
  }
</style>
