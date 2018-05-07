//导出函数
import axios from "axios";
axios.defaults.baseURL = "http://192.168.1.45:3000";


//01.歌曲获取接口
export let getMusics = function() {
  	return axios.get(`/personalized/newsong`);
};

//02.推荐歌单获取接口
export let getMusicList = function(){
	//
	return axios.get("/personalized");
}

//03.获取歌单详情
export let getgedanxiangqing = function(id) {
	
  	return axios.get(`/playlist/detail?id=${id}`);
};

//04.获取最新mv
export let  getNewMv = function(){
	return axios.get(`top/mv`);
}

//05.电台推荐
export let  getDj = function(){
	return axios.get(`/dj/recommend`);
}
//06.电台推荐
export let  getNewDj = function(){
	return axios.get(`/personalized/djprogram`);
}

//07.获取MV数据
export let  getMv = function(id){
	return axios.get(`/mv?mvid=${id}`);
}
//获取歌曲id
export let getPlayMic=function(id){
	return axios.get(`/music/url?id=${id}`)
}
// // 08.播放mv
// export let  getPlayMv = function(url){	

// 	return axios.get(`/mv/url?url=${url}`);
// }
