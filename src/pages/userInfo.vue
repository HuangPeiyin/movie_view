<template>
  <div class="container">
    <div>
      <!-- 展示引入的header组件 -->
      <movie-index-header></movie-index-header>
    </div>
    <div class="userMessage">
      <user-message></user-message>
    </div>
    <div>
      <div class="box usermessage">用户名：{{ detail.username }}</div>
    </div>
    <div>
      <div class="box usermessage">用户邮箱：{{ detail.userMail }}</div>
    </div>
    <div>
      <div class="box usermessage">用户电话：{{ detail.userPhone }}</div>
    </div>
    <div>
      <div class="box usermessage">用户状态：{{ userStatus }}</div>
    </div>
    <div>
      <Button type="primary" @click="ShowChangeUserPassword()">修改密码</Button>
    </div>
    <div v-show="showRePassword" class="repassword">
      <div class="box">
        <label>输入旧密码：</label>
        <Input v-model="password" placeholder="输入旧密码" />
      </div>
      <div class="box">
        <label>输入新密码：</label>
        <Input v-model="repassword" placeholder="输入新密码" />
      </div>
      <div>
        <Button @click="changeUserPassword()">修改密码</Button>
      </div>
    </div>
    <div style="padding-top: 10px">
      <router-link to="/sendEmail">
        <Button type="primary">发送站内信</Button>
      </router-link>
    </div>
    <!-- 展示引入的footer组件 -->
    <common-footer></common-footer>
  </div>
</template>
<script>
import MovieIndexHeader from "../components/MovieIndexHeader.vue";
import CommonFooter from "../components/CommonFooter.vue";
import UserMessage from "../components/UserMessage.vue";
export default {
  name: "userInfo",
  data() {
    return {
      items: [],
      detail: [],
      userStatus: "",
      showRePassword: false,
      password: "",
      repassword: "",
    };
  },
  components: {
    MovieIndexHeader,
    CommonFooter,
    UserMessage,
  },
  created() {
    let userId = this.$route.query.id;
    if (userId) {
      this.$axios.post("/api/showUser", { user_id: userId }).then((req) => {
        if (req.data.status == 1) {
          alert(req.data.message);
        } else {
          this.detail = req.data.data;
          if (req.data.data.userStop) {
            this.userStatus = "用户已经被封停";
          } else {
            this.userStatus = "用户状态正常";
          }
        }
        console.log(req.data.data);
      });
    } else {
      alert("用户信息错误");
    }
  },
  methods: {
    ShowChangeUserPassword() {
      this.showRePassword = true;
    },
    changeUserPassword() {
      let token = localStorage.token;
      let user_id = localStorage._id;
      this.$axios
        .post("/api/users/findPassword", {
          token: token,
          user_id: user_id,
          repassword: this.repassword,
          password: this.password,
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}
.container {
  width: 100%;
  margin: 0 auto;
}
.repassword{
  display: flex;
  flex-direction: column;
}
.ivu-input-wrapper{
  width: 200px;
}
.ivu-btn{
  margin-top: 10px;
}
</style>