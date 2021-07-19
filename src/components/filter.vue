<template>
<div>
<h1>Filter</h1>
    <h1>{{carname | uperCase}}</h1> <!-- this upper case filter defiend in main js -->
</div>
</template>
<script>
export default {
    name:'filters',
    data(){
        return{
            carname:"freestyle"
        }
    }
}
</script>