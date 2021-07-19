<template>
<div>
    <h1>eventhendler</h1>
    <h3 v-on:click="clicked"  id="test1">click</h3>
    <h3 v-on:dblclick ="dblclick"  id="test2">double click me</h3>
    </div>
</template>
<script>
export default {
    name:"eventhendler",
    data(){
        return{
            
        }
    },
    methods:{
        dblclick:function(){
            console.log("Double clicked");
            document.getElementById("test2").style.backgroundColor="red";
            
        },
        clicked:function(){
            console.log("clicked");
            document.getElementById("test1").style.backgroundColor="red";    
        },
        
    }

}
</script>
