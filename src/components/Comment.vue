<template>
    <div>
        <label>评论</label>
        <hr>
        <div>
            <li v-for="item in items" :key="item.index">
                {{item.username}} 评论：{{item.context}}
            </li>
        </div>
        <div style="padding:5px">
            <textarea v-model="context" style="width:80%;height:50px;" placeholder="内容"></textarea>
        </div>
        <div style="padding-top:10px">
            <Button v-on:click="send_comment">评论</Button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['movie_id'],
    data(){
        return{
            items: [],
            context: '',
        }
    },
    created(){
        this.$axios.post('/api/users/comment', {movie_id: this.movie_id}).then((req) => {
            if(req.data.status == 0){
                this.items = req.data.data
                console.log(req.data);
            }else{
                alert("获取失败")
            }
        })
    },
    methods:{
        send_comment(){
            let send_data
            if(typeof(localStorage.username)!="undefined"){
                send_data={
                    movie_id: this.movie_id,
                    context: this.context,
                    username: localStorage.username
                }
            }else{
                send_data={
                    movie_id: this.movie_id,
                    context: this.context
                }
            }
            this.$axios.post('/api/users/postComment', send_data).then((req) => {
                alert(req.data.message)
            })
        }
    }
}
</script>
<style scoped>

</style>