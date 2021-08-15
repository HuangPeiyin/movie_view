<template>
  <div class="container">
    <div>
      <!-- 展示引入的header组件 -->
      <movie-index-header></movie-index-header>
    </div>
    <div class="userMessage">
      <!-- 展示引入的用户信息组件 -->
      <user-message></user-message>
    </div>
    <div class="contentPic">
      <!-- 展示引入的大图组件 -->
      <index-header-pic
        v-for="item in headerItems"
        :key="item._id"
        :recommendImg="item.recommendImg"
        :recommendSrc="item.recommendSrc"
        :recommendTitle="item.recommendTitle"
      ></index-header-pic>
    </div>
    <div class="contentMain">
      <Row>
        <Col span="11" offset="1">
          <Card>
            <p slot="title"><Icon type="ios-film" />电影</p>
            <ul class="cont-ul">
              <!-- 引入MovieList -->
              <movie-list
                v-for="item in movieItems"
                :key="item._id"
                :id="item._id"
                :movieName="item.movieName"
                :movieTime="item.movieTime"
              ></movie-list>
            </ul>
          </Card>
        </Col>
        <Col span="10" offset="1">
          <Card>
            <p slot="title"><Icon type="ios-brush" />新闻</p>
            <ul class="cont-ul">
              <!-- list组件展示区 -->
              <news-list
                v-for="item in newsItems"
                :key="item._id"
                :id="item._id"
                :articleTitle="item.articleTitle"
                :articleTime="item.articleTime"
              ></news-list>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
    <!-- 展示引入的footer组件 -->
    <common-footer></common-footer>
  </div>
</template>
<script>
import MovieIndexHeader from "../components/MovieIndexHeader.vue";
import CommonFooter from "../components/CommonFooter.vue";
import NewsList from "../components/NewsList.vue";
import MovieList from "../components/MovieList.vue";
import IndexHeaderPic from "../components/IndexHeaderPic.vue";
import UserMessage from "../components/UserMessage.vue";
export default {
  data() {
    return {
      headerItems: [],
      newsItems: [],
      movieItems: [],
    };
  },
  components: {
    MovieIndexHeader,
    CommonFooter,
    NewsList,
    MovieList,
    IndexHeaderPic,
    UserMessage,
  },
  // 这里用于获取数据，需要获取主页推荐、主页新闻列表和主页电影列表
  created() {
    // 主页推荐
    this.$axios.get("/api/showIndex").then((req) => {
      this.headerItems = req.data.data;
      console.log(req.data.data);
    });
    // 获取新闻
    this.$axios.get("/api/showArticle").then((req) => {
      this.newsItems = req.data.data;
      console.log(req.data.data);
    });
    // 获取所有电影
    this.$axios.get("/api/showRanking").then((req) => {
      this.movieItems = req.data.data;
      console.log(req.data.data);
    });
  },
};
</script>
<style scoped>
.containter {
  width: 100%;
  margin: 0 auto;
}
.contentMain {
  padding-top: 15px;
}
.userMessage {
  /* padding-top: 60px; */
  margin-top: 0px;
  margin-left: 0px;
}
.contentPic {
  padding-top: 5px;
}
.cont-ul {
  padding-top: 0.5rem;
  background-color: #fff;
}
.cont-ul::after {
  content: '';
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
</style>