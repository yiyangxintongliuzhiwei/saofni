import axios from 'axios'
import store from '../store'

const Axios = axios.create({
    baseURL: process.env.VUE_APP_API,
    // timeout: 5000                    // 超时
})



let tempAxios = 0;
  Axios.interceptors.response.use(response => {
    if(!response.config.loadingHide) {
        tempAxios -- ;
    }
    if(tempAxios == 0){
        store.commit('hideLoading')
    }

    
   
    if(response.data.errorCode == 2){
        alert("系统异常");
    } else if(response.data.errorCode == 3){
        alert(response.data.errorMsg)
    } else {
        return response;
    }
},error => {
    store.commit('hideLoading')
    alert('系统异常')
})

Axios.interceptors.request.use(config => {
    let ret = new FormData();
    for (let it in config.data) {
        ret.append(it, config.data[it]);  
    }
    
    if(!config.loadingHide) {
        tempAxios ++;
        store.commit('showLoading');
    }  
    config.data.token = sessionStorage.getItem("token");   // 添加token参数
    config.data = ret;
    return config;
}, error => {
        store.commit('hideLoading')
        console.log("发送失败");
        return Promise.reject(error);
    });


  
export default Axios