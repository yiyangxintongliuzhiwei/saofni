<template>
    <div>
        index
    </div>
</template>

<script>
export default {
  
    mounted(){
        // this.Tools.cookieTosetItem("http://登录地址.com");  // 把cookie中的值存储到sessionStorage中
        // let state = this.Tools.getState() ? this.Tools.getState():1;  // 获取页面中state的值,  int型   若是没传,值为NAN 
        /**
         * 若是有用户权限校验, 直接在后面做判断修改state的值即可
         */

        switch(state){
            case 1:
                this.$router.push("Scroll");  // 推荐使用replace,替换掉当前的路由,确保返回不会到此页面
                break;
                
        }
    },
}
</script>

<style lang="less">
    
</style>