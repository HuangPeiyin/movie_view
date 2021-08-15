<template>
  <div>
    <div>
      <div>
        <div class="box">
          <label>输入用户名：</label>
          <Input v-model="username" placeholder="用户名" />
        </div>
        <div class="box">
          <label>输入邮箱：</label>
          <Input v-model="userMail" placeholder="邮箱" />
        </div>
        <div class="box">
          <label>输入手机：</label>
          <Input v-model="userPhone" placeholder="手机" />
        </div>
        <div class="box">
          <Button type="primary" @click="checkUser()">找回密码</Button>
        </div>
      </div>
      <div v-show="showRePassword">
        <div class="box">
          <label>输入新密码：</label>
          <Input v-model="rePassword" placeholder="输入新密码" />
        </div>
        <div class="box">
          <Button @click="changeUserPassword()">修改密码</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userMail: "",
      userPhone: "",
      username: "",
      rePassword: "",
      showRePassword: false,
      showUserInfo: true,
    };
  },
  methods: {
    checkUser: function () {
      this.$axios
        .post("api/users/findPassword", {
          username: this.username,
          userMail: this.userMail,
          userPhone: this.userPhone,
        })
        .then((req) => {
          if (req.data.status == 1) {
            alert(req.data.message);
          } else {
            alert(req.data.message);
            this.showRePassword = true;
            this.showUserInfo = false;
            console.log(this.showRePassword);
          }
        });
    },
    changeUserPassword: function () {
      this.$axios
        .post("api/users/findPassword", {
          username: this.username,
          userMail: this.userMail,
          userPhone: this.userPhone,
          repassword: this.rePassword,
        })
        .then((req) => {
          if (req.data.status == 1) {
            alert(req.data.message);
          } else {
            alert(req.data.message);
            this.$router.go(-1);
          }
        });
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
  width: 240px;
}
label{
  width: 90px;
  text-align: right;
}
</style>