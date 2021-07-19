<template>
    <div>
        <h1>class binding</h1>
        <h1 v-bind:class="isred">test 1</h1>
        <h1 v-bind:class="{red:red,blue:blue}">test 2</h1>
        <h1 v-bind:class="[n?r:b]">binding with function</h1>
        <h1 v-bind:style="{color:green,fontSize:fontsize}">inline css binding</h1>
        <h1 v-bind:style="[bgcolor,color]">inline css binding array format</h1>
    </div>
</template>
<script>
export default {
    name:'classbinding',
    data(){
        return{
            r:"red",
            b:"blue",
            red:true,
            blue:false,
            n:false,
            green:"green",
            fontsize:"50px",
            bgcolor:{
                backgroundColor:"orange",
                fontSize:"90px",
            },
            color:{
                color:"purple"
            }
        }

    }
}
</script>
<style  scoped>
.red{
    color: red;
}
.blue{
    color: blue;
}



</style>