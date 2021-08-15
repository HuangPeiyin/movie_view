<template>
    <div class="container">
        <div>
            <!-- 展示引入的header组件 -->
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <div>
                <div class="contentLeft">
                    <ul class="cont-ul">
                        <!-- 引入MovieList -->
                        <movie-list v-for="item in movieItems" 
                            :key="item._id"
                            :id="item._id"
                            :movieName="item.movieName"
                            :movieTime="item.movieTime"
                            ></movie-list>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <!-- 展示引入的footer组件 -->
            <common-footer></common-footer>
        </div>
    </div>
</template>
<script>
import MovieIndexHeader from "../components/MovieIndexHeader.vue"
import CommonFooter from "../components/CommonFooter.vue"
import MovieList from "../components/MovieList.vue"
export default {
    data(){
        return{
            movieItems: []
        }
    },
    components: {
        MovieIndexHeader,
        CommonFooter,
        MovieList
    },
    created(){
        this.$axios.get("/api/admin/movie").then((req) => {
            this.movieItems = req.data.data
            console.log(req.data.data);
        })
    }
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