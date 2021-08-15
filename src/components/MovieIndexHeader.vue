// 主页的头部
<template>
    <Menu mode="horizontal" theme="dark" active-name="1">
        <router-link to="/">
            <MenuItem name="1">
                <Icon type="ios-paper" />主页
            </MenuItem>
        </router-link>
        <router-link to="/movieList">
            <MenuItem name="2">
                <Icon type="ios-people" />电影
            </MenuItem>
        </router-link>
        <Button @click="removeLogin()">
            退出登录
        </Button>
    </Menu>
</template>
<script>
export default {
    methods:{
        removeLogin(){
            localStorage.clear()
            console.log(localStorage);
            this.$router.go(0)
        }
    }
}
</script>
<style scoped>
.header{
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    top: 0;
    color: #000;
    background-color: #a5a5a5;
    border-bottom: 2px solid #000;
}
.header_menu{
    padding-left: 60px;
    padding-top: 20px;
    float: left;
    color: #fff;
}
.ivu-btn{
    float: right;
    margin-top: 13px;
    margin-right: 20px;
}
</style>