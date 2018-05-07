<template>
  <div class="contents">
    <div class="title">
      电台推荐
      <i class="icon"></i>
    </div>
    <ul>
      <li v-for="(item,index) in NewDjList" :key="index" @click="getid(item.id)">
        <img :src="item.picUrl" alt="">
        <!-- <span class="playCount">{{item.playCount}}</span> -->
        <span>{{item.name}}</span>
        <p>{{item.rcmdtext}}</p>
      </li>
    </ul>
    <router-view></router-view>
  </div>

</template>
<script>
  import {getDj} from "@/api/index.js";
  export default {
    data () {
      return {
        NewDjList:[]
      }
    },
    created(){
      this.NewDj();
    },
    methods: {
      async NewDj() {
        let {data} = await getDj();
           // console.log(data.djRadios);
        this.NewDjList = data.djRadios.slice(0,6);
      },
      
    }
  }
</script>
<style type="text/css" scoped="">
  .contents{
    /*height: 730px;*/
    width: 100%;
    overflow: hidden;
    position: relative;
    padding-top: 20px;
    /* padding-bottom: 24px; */
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
  .contents li{
    list-style-type: none;
    width:33.33%;
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
  .contents span{
    color:white;
    position: absolute;
    bottom: 30%;
    padding-left: 10px;
  }
  .contents  p{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 6px 2px 0 6px;
    line-height: 1.2;
    font-size: 13px;
    float: left;
  }
</style>
