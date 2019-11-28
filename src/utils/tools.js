const Tools = {

    // 获取URL参数
    getUrlParamsString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.href.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },

    // 时间戳
    fromatDate(timestemp) { 
        if (timestemp == null) {        
            return '';    
        }        
        var time = new Date(timestemp);    
        var y = time.getFullYear(); //年
        var m = time.getMonth() + 1; //月
        var d = time.getDate(); //日
        var h = time.getHours(); //时
        var mm = time.getMinutes(); //分
        var s = time.getSeconds(); //秒
        if (m < 10) {        
            m = '0' + m;    
        }    
        if (d < 10) {        
            d = '0' + d;    
        }    
        if (h < 10) {        
            h = '0' + h;    
        }    
        if (mm < 10) {        
            mm = '0' + mm;    
        }    
        if (s < 10) {        
            s = '0' + s;    
        }    
        return y + "-" + m + "-" + d + " " + h + ":" + mm + ":" + s;
    },
    // 获取cookie中的某个参数
    getCookie(name){
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            
            return decodeURI(arr[2]);
        } else {
            return null;
        }
    },

    // 设置cookie的参数 name:名字  value:值
    setCookie(name,value){
        var enval = encodeURI(value);
        var Days = 30; 
        var exp = new Date(); 
        exp.setTime(exp.getTime() + 60*1000); 
        document.cookie = name + "="+ enval + ";path=/;expires=" + exp.toGMTString();  
    },

    //把cookie中的值存储到sessionStorage中   url:用户未登陆的情况下跳转到登录页地址
    cookieTosetItem(url){  
        let cookieText = document.cookie;
        if(Tools.getCookie("token") &&  Tools.getCookie("token") != 'undefined') {
            document.cookie.split(";").forEach(item=>{
                let cookie = item.split("=");
                sessionStorage.setItem(cookie[0].trim(),decodeURI(cookie[1]))
            })
        }else {
            sessionStorage.clear();
            window.location.href=url;
        }
    },

    // 返回index页中的state的值
    getState(){
        let url = window.location.href.split("&")[0];
        let state = parseInt(url.substring(url.lastIndexOf("=")+1));
        return state;
    }

}

/**
 * 使用方法
 * this.Tools.getUrlParamsString
 * 
 */
export default Tools;