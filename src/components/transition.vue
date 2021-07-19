<template>
    <div>
        <h1>transition</h1>
        <!-- <transition name="fade"> -->
            <h1 v-if="show">Hello i am transition element</h1>
            <!-- </transition> -->
            <button @click="show=!show">click</button>
    </div>
</template>
<script>
export default {
    name:'transition',
    data(){
        return{
            show:false
        }
    }
}
</script>
<style scoped>
.fade-enter-from{
    opacity: 0;
}
.fade-enter-to{
    opacity: 1;
}
.fade-enter-active{
    transition: all;
}
</style>