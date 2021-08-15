<template>
    <div class="container">
        <div>
            <!-- 展示引入的header组件 -->
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <h1>{{detail.articleTitle}}</h1>
            <div>{{detail.articleTime}}</div>
            <div class="contentText">{{detail.articleContext}}</div>
        </div>
        <div>
            <comment v-bind:movie_id="article_id"></comment>
        </div>
        <div>
            <!-- 展示引入的footer组件 -->
            <common-footer></common-footer>
        </div>
    </div>
</template>
<script>
import MovieIndexHeader from '../components/MovieIndexHeader.vue'
import CommonFooter from '../components/CommonFooter.vue'
import Comment from '../components/Comment.vue'
let article_id = 0
export default {
    name: 'NewDatail',
    data () {
        return {
            detail: [],
            article_id: ''
        }
    },
    components: {
        MovieIndexHeader,
        CommonFooter,
        Comment
    },
    created(){
        article_id = this.$route.query.id
        this.article_id = article_id
        this.$axios.post('/api/articleDetail', {article_id: article_id}).then((req) => {
            this.detail = req.data.data[0]
            console.log(this.detail);
            this.detail.articleTime = new Date(parseInt(this.detail.articleTime)).toLocaleString()
        })
    },
    methods:{}
}
</script>
<style scoped>
.container{
    width: 100%;
    margin: 0 auto;
}
.contentMain{
    padding-top: 150px;
}
.contentText{
    font-size: 15px;
    padding-top: 20px;
}
</style>