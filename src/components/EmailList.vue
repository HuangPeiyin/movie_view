<template>
    <div class="messgae">
        <div>{{title}}</div>
        <div>{{fromUser}}</div>
        <div>{{context}}</div>
    </div>
</template>
<script>
export default {
    props: ['title', 'fromUser', 'context']
}
</script>
<style scoped>
.message{
    border: 1px solid;
}
</style>