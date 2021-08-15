// 主页的用户模块
<template>
    <div v-if=!isLogin class="header">
        <Row>
            <router-link to="/loginPage">
                <div class="header_menu"><Icon type="ios-person" />登录</div>
            </router-link>
        </Row>
        
    </div>
    <div v-else class="header">
        <Row>
            <router-link :to="{path: '/userInfo', query: {id: id}}">
                <div class="header_menu"><Icon type="ios-person" />已登录：{{username}}</div>
            </router-link>
        </Row>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            isLogin: false,
            username: '',
        }
    },
    created(){
        let token = localStorage.getItem('token')
        if(token){
            this.isLogin = true
            this.username = localStorage.getItem('username')
            this.id = localStorage.getItem('_id')
        }else{
            console.log('用户登录失败');
        }
    }
}
</script>
<style scoped>
.header{
    width: 103%;
    height: 30px;
    left: 0;
    top: 0;
    color: #000;
    background-color: #C3bbbb;
}
.header_menu{
    padding-top: 6px;
    color: #fff;
    font-size: 12px;
    float: right;
    margin-right: 50px;
}
</style>