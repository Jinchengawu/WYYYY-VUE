<template>
  <div class="content">
    <div class="title">
      推荐歌单
      <i class="icon"></i>
    </div>
    <ul class="mv-list">
      <li v-for="(item,index) in musicList" :key="index" @click="getid(item.id)">
        <img :src="item.picUrl" alt="">
        <span class="playCount">{{item.trackCount}}万</span>
        <p>{{item.name}}</p>
      </li>
    </ul>
    <router-view></router-view>
  </div>

</template>
<script>
  import {getMusicList,getgedanxiangqing} from "../api/index.js";
  export default {
    created(){
      this.getMusics1();
    },
    data () {
      return {
        musicList:[]
      }
    },
    methods: {
      async getMusics1() {
        let {data} = await getMusicList();
           console.log(data);
        this.musicList = data.result.slice(0,6);
      },
      getid(id){
        getgedanxiangqing(id);
        console.log(11);
        this.$router.push(`/xiangqing/${id}`);
      }
      
    }
  }
</script>
<style type="text/css" scoped="">
  .content{
    /*height: 730px;*/
    width: 100%;
    overflow: hidden;
    position: relative;
    padding-top: 20px;
    padding-bottom: 24px;
  }
  .title{
    position: relative;
    padding-left: 9px;
    margin-bottom: 14px;
    font-size: 17px;
    height: 20px;
    line-height: 20px;
  }
  .title:after{
    content: " ";
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -9px;
    width: 2px;
    height: 16px;
    background-color: #d33a31;
  }
  .content li{
    list-style-type: none;
    width:33.33%;
    float:left;
    /*height:5.25rem;*/
    box-sizing: border-box;
    padding-left:1px;
    padding-right:1px;
    padding-bottom: 10px;
    position: relative;
  }
  .content li:first-child{
    padding-left: 0;
    padding-right: 2px;
  }
  .content img{
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    vertical-align: middle;
  }
  .content .playCount{
    position: absolute;
    right: 5px;
    top: 2px;
    z-index: 3;
    padding-left: 13px;
    color: #fff;
    font-size: 12px;
    background-position: 0;
    background-repeat: no-repeat;
    background-size: 11px 10px;
    text-shadow: 1px 0 0 rgba(0,0,0,.15);
    background-image: url("erji.svg");
  }
  .content  p{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 6px 2px 0 6px;
    line-height: 1.2;
    font-size: 13px;
    /*height: 30px;*/
  }
</style>
