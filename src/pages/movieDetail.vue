<template>
    <div class="container">
        <div>
            <!-- 展示引入的header组件 -->
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <div class="">
                <h1>{{detail.movieName}}</h1>
                <div class="viewNum">下载次数：{{detail.movieNumDownload}}</div>
            </div>
            <div class="">
                <Button v-on:click=movieDownload()>点击下载</Button>
            </div>
            <div>
                <img class="headerImg" v-bind:src=detail.movieImg>
            </div>
            <div class="btnPosition">
                <div class="SupportBtn" v-on:click="support()">
                    点赞
                    <div>{{detail.movieNumSuppose}}</div>
                </div>
            </div>
        </div>
        <div>
            <comment v-bind:movie_id="movie_id"></comment>
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
let movie_id = 0
export default {
    name: 'MovieDatail',
    data () {
        return {
            detail: []
        }
    },
    components: {
        MovieIndexHeader,
        CommonFooter,
        Comment
    },
    created(){
        this.movie_id = this.$route.query.id
        movie_id = this.$route.query.id
        this.$axios.post('/api/users/detail', {movie_id: movie_id}).then((req) => {
            this.detail = req.data.data[0]
            console.log(this.detail);
        })
    },
    methods: {
        // 点赞
        support: function(){
            this.$axios.post('/api/users/support', {movie_id: movie_id}).then((req) => {
                let data_temp = req.data
                console.log(data_temp);
                if(data_temp.status === 0){
                    this.$axios.post('/api/users/detail', {movie_id: movie_id}).then((req) => {
                        this.detail['movieNumSuppose'] = req.data.data[0].movieNumSuppose
                    })
                }else{
                    alert(data_temp.message)
                }
            })
        },
        // 电影下载
        movieDownload: function () {
            this.$axios.post('/api/users/download', {movie_id: movie_id}).then((dataReback) => {
                if(dataReback.status == 1){
                    alert(dataReback.message)
                }else{
                    window.location = dataReback.data
                }
            })
        }
    }
}
</script>
<style scoped>
.headerImg{
    height: 200px;
}
.container{
    width: 100%;
    margin: 0 auto;
}
.contentMain{
    padding-top: 150px;
}
.btnPosition{
    padding-left: 48%;
}
.SupportBtn{
    border: 1px solid #000;
    width: 60px;
}
.viewNum{
    font-size: 10px;
}
</style>