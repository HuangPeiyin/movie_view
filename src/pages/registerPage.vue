<template>
    <div>
        <div>
            <div>
                <div class="box">
                    <label>输入用户名：</label>
                    <Input type="text" v-model="username" placeholder="用户名"></Input>
                </div>
                <div class="box">
                    <label>输入密码：</label>
                    <Input v-model="password" placeholder="密码"></Input>
                </div>
                <div class="box">
                    <label>重复输入密码：</label>
                    <Input v-model="rePassword" placeholder="密码"></Input>
                </div>
                <div class="box">
                    <label>输入邮箱：</label>
                    <Input v-model="userMail" placeholder="邮箱"></Input>
                </div>
                <div class="box">
                    <label>输入手机：</label>
                    <Input v-model="userPhone" placeholder="手机"></Input>
                </div>
                <div class="box">
                    <Button type="primary" @click="userRegister()">注册</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username: '',
            password: '',
            userMail: '',
            userPhone: '',
            rePassword: ''
        }
    },
    methods:{
        userRegister: function(){
            if(this.password!=this.rePassword){
                alert("两次密码不一致")
            }else{
                let sendDate={
                    username: this.username,
                    password: this.password,
                    userMail: this.userMail,
                    userPhone: this.userPhone
                }
                this.$axios.post('/api/users/register', sendDate).then((req) => {
                    if(req.data.status == 1){
                        alert(req.data.message)
                    }else{
                        alert(req.data.message)
                        this.$router.go(-1)
                    }
                })
            }
        }
    }
}
</script>
<style scoped>
.box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
}
label{
    text-align: right;
    /* text-align-last: justify; */
    width: 120px;
    padding-right: 10px;
}
.ivu-input-wrapper{
    width: 200px;
}
</style>