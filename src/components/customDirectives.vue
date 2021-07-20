<template>
<div id="app">
    <h1>Custom directive</h1>
    <h3 v-rgb="'green'">{{name}}</h3>
    </div>
</template>
<script>
export default {
    name:'customDirective',
    data(){
        return{
            name:'shashank'
        }
    }
}
</script>