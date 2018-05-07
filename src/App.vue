<template>
  <div id="app">
    <Bheader></Bheader>
    
    <!-- <shiyan></shiyan> -->
    <Play></Play>
    <router-view></router-view>
  </div>
</template>

<script>
import Bheader from "./base/Bheader.vue"
import qiehuan from "./base/qiehuan.vue"
import Play   from "./base/play.vue"

export default {
  name: 'App',
  data () {
   return {

   }
  },
  methods:{

  },
  components:{
    Bheader,
    qiehuan,
    Play
  }
}
</script>

<style>
  *{
  margin: 0px;
  padding: 0px;
}

</style>
