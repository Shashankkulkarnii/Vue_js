<template>
        
        
        <h1>i am destroy component</h1>
       
        
</template>
<script>
export default {
    name:"distroyecomponent",
      beforeDestroy(){
        alert("before distroy");
        console.log("before distroy");
    },destroyed(){
        alert("distroyed");
        console.log("distroyed");
    },    
}


</script>