<template>
  <div>
    <div>
      <input v-model="toUserName" placeholder="发送用户名" />
    </div>
    <div style="padding: 10px">
      <input v-model="title" placeholder="发送标题" />
    </div>
    <div style="padding: 5px">
      <textarea
        style="width: 80%; height: 50px"
        placeholder="内容"
        v-model="context"
      ></textarea>
    </div>
    <div style="padding-top: 10px">
      <button @click="send_mail()">发送站内信</button>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      toUserName: "",
      context: "",
      title: "",
    };
  },
  methods: {
    send_mail() {
      let send_data = {
        token: localStorage.token,
        user_id: localStorage._id,
        toUserName: this.toUserName,
        title: this.title,
        context: this.context,
      };
      this.$axios.post("/api/users/sendEmail", send_data).then((req) => {
        if (req.data.status == 1) {
          alert(req.data.message);
        } else {
          alert("发送成功");
        }
      });
    },
  },
};
</script>
<style scoped>
</style>