<template>
  <div class="container">
    <div>
      <!-- 展示引入的header组件 -->
      <movie-index-header></movie-index-header>
    </div>
    <div class="userMessage">
      <user-message></user-message>
    </div>
    <label>收件箱</label>
    <div>
      <email-list
        v-for="item in receive_items"
        :key="item.index"
        :title="item.mailTitle"
        :fromUser="item.mailFromUser"
        :context="item.mailContext"
      ></email-list>
    </div>
    <label>发件箱</label>
    <div>
      <email-list
        v-for="item in send_items"
        :key="item.index"
        :title="item.mailTitle"
        :fromUser="item.mailFromUser"
        :context="item.mailContext"
      ></email-list>
    </div>
    <send-talk-box></send-talk-box>
    <!-- 展示引入的footer组件 -->
    <common-footer></common-footer>
  </div>
</template>
<script>
import MovieIndexHeader from "../components/MovieIndexHeader.vue";
import CommonFooter from "../components/CommonFooter.vue";
import UserMessage from "../components/UserMessage.vue";
import EmailList from "../components/EmailList.vue";
import SendTalkBox from "../components/SendTalk-Box.vue";
export default {
  data() {
    return {
      receive_items: [],
      send_items: [],
      detail: [],
    };
  },
  components: {
    MovieIndexHeader,
    CommonFooter,
    UserMessage,
    EmailList,
    SendTalkBox,
  },
  created() {
    let userId = localStorage._id;
    let send_data = {
      token: localStorage.token,
      user_id: localStorage._id,
      receive: 1,
    };
    let receive_data = {
      token: localStorage.token,
      user_id: localStorage._id,
      receive: 2,
    };
    if (userId) {
      this.$axios.post("api/users/showEmail", send_data).then((req) => {
        if (req.data.status == 1) {
          alert(req.data.message);
        } else {
          this.send_items = req.data.data;
        }
        console.log(req.data.data);
      });
      this.$axios.post("api/users/showEmail", receive_data).then((req) => {
        if (req.data.status == 1) {
          alert(req.data.message);
        } else {
          this.receive_items = req.data.data;
        }
        console.log(req.data.data);
      });
    } else {
      alert("用户信息错误");
    }
  },
};
</script>
<style scoped>
.box {
  display: inline-flex;
}
.container {
  width: 100%;
  margin: 0 auto;
}
.userMessage {
  padding-top: 60px;
  margin-top: -10px;
  margin-left: -10px;
}
</style>