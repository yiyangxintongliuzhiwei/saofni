<template>
    <div>
        <van-cell-group class="input">
            <van-field v-model="form.userAccount" placeholder="请输入用户名" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="form.userPwd" placeholder="请输入密码" />
        </van-cell-group>
         <van-cell-group>
        <select name="" id="" v-model="state">
            <option value="1">页面1</option>
            <option value="2">页面2</option>
            <option value="3">页面3</option>
            <option value="4">页面4</option>
        </select>
        </van-cell-group>
        <van-button type="primary" @click="submit">提交</van-button>
      
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {},
            state:"",
        }
    },
    methods: {
        submit() {
            // this._post(this.API.login, this.form).then(res=> {
            //     if(res.errorCode ==0) {
            //         // 存用户信息
            //         this.Tools.setCookie("token",res.token);

            //         // 跳转
            //         this.$router.push("/index?state="+this.state);
            //     }
                
            // })
            
            // 需要取消loading,则_post的第三个参数为 {"loadingHide":true}
            // this._post(this.API.login, this.form,{"loadingHide":true}).then(res=> {
            //     console.log(res)
            // })
        },
        
    }
}
</script>

<style lang="less">
.one {
    height:200px;
    overflow: auto;
}
</style>