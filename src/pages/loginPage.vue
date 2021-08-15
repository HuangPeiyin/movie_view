<template>
  <div>
    <div class="box">
      <div style="padding-top: 10%">
        <label>LOGIN</label>
        <div>
          <Input type="text" v-model="username" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </div>
        <div class="box">
          <Input type="password" v-model="password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </div>
      </div>
    </div>
    <div class="box">
      <Button type="primary" @click="userLogin()">登录</Button>
      <Button style="margin-left: 10px" @click="userRegister()">
        注册
      </Button>
      <Button type="text" style="margin-left: 10px" @click="findBackPassword()">
        忘记密码
      </Button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    userLogin: function () {
      this.$axios
        .post("/api/users/login", {
          username: this.username,
          password: this.password,
        })
        .then((req) => {
          console.log(req.data);
          if (req.data.status == 1) {
            alert(req.data.message);
          } else {
            let save_token = {
              token: req.data.data.token,
              username: this.username,
            };
            localStorage.setItem("token", req.data.data.token);
            localStorage.setItem("username", req.data.data.user[0].username);
            localStorage.setItem("_id", req.data.data.user[0]._id);
            this.$router.go(-1);
            console.log(save_token);
          }
        });
    },
    userRegister: function () {
      this.$router.push({ path: "/register" });
    },
    findBackPassword: function () {
      this.$router.push({ path: "/findPW" });
    },
  },
};
</script>
<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
.ivu-input-wrapper{
    width: 280px;
}
</style>