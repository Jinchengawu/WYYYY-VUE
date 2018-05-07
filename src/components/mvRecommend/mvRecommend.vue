<template>
  <div class="contents">
    <ul>
      <li v-for="(item,index) in NewMvLists" :key="index" @click="getid(item)"> 
        <video style="height:240px;" autoplay="true" controls :src="item.videoUrl" v-if="item.videoUrl"></video>
        <template v-else>
           <img :src="item.cover" alt="">
          <i class="iconfont icon-iconset0481 playVideo"></i>
        </template> 
        <p>{{item.name}}</p>
        <p>{{item.artistName}}</p>
      </li>
    </ul>
    <!-- <div class="more">
      <i class="iconfont icon-pinglun"></i>
      <i class="iconfont icon-fenxiang-copy"></i>
      <i class="iconfont icon-download"></i>
      <i class="iconfont icon-duoxuan"></i>
    </div>
    <div class="more1">
      <em>{{item.result.subscribedCount}}</em>
      <em>{{item.result.shareCount}}</em>
      <em>下载</em>
      <em>多选</em>
    </div> -->
    <router-view></router-view>
  </div>

</template>
<script>
  import Vue from 'vue';
  import {getNewMv,getMv,getPlayMv} from "@/api/index.js";
  export default {
    created(){
      this.NewMv();
    },
    data () {
      return {
        NewMvLists:[],
        url: '',
        currentPlay: ''
      }
    },
    methods: {
      async NewMv() {
        let {data} = await getNewMv(this.id);
        this.NewMvLists = (data.data.slice(0,10));
      },
      async getid(item){
        // 1.判断当前时候有视频在播放
        if(this.currentPlay) {
          // 2.先将播放的暂停掉
          Vue.set(this.currentPlay, 'videoUrl', '');
          this.currentPlay = item;
        }else {
          this.currentPlay = item;
        }
        let {data} = await getMv(item.id);
        // console.log(data.data.brs[720]);
        var url = 'http://192.168.1.45:3000/mv/url?url=' + data.data.brs[720];
        Vue.set(item, 'videoUrl', url);
      }
      
    }
  }
</script>
<style type="text/css" scoped="">
  .contents{
    /*height: 730px;*/
    width: 100%;
    overflow: hidden;
    position: relative;
    /* padding-bottom: 24px; */
  }
  .content ul {
    display: flex;
  }
  .contents li{
    list-style-type: none;
    width:100%;
    float:left;
    /*height:5.25rem;*/
    box-sizing: border-box;
    padding-left:1px;
    padding-right:1px;
    padding-bottom: 16px;
    position: relative;
  }
  .contents li:first-child{
    padding-left: 0;
    padding-right: 2px;
  }
  .contents img{
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    vertical-align: middle;
  }
  .contents  p{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 6px 2px 0 6px;
    line-height: 1.2;
    font-size: 20px;
    color: #303131;
  }
  .contents  p:last-child{
    color: #797a7b;
    font-size: 18px;
  }
  .playVideo {
    width: 60px;
    height: 60px;
    color: aliceblue;
    display: inline-block;
    position: absolute;
    font-size: 40px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: translate3d(0, -24px, 0);
  }
      
</style>
