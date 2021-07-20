<template>
    <div >
        <div id="loops">
        <h1>rendering data from array thought loops</h1>
        <!-- <h1>{{vm.db[1].}}</h1> -->

        <ul >
         
            <li v-for="items in vm.persons" :key=items>{{items}}</li>
        </ul>
        <h1>aray with objects rendering data</h1>
        <ul>    
           <h5> <li v-for="employe in vm.db" :key=employe>name: {{employe.name}} age:{{employe.age}} company:{{employe.company}}</li></h5>
        </ul>
        
</div>
        

    </div>
  
</template>
<script>
import Vue from 'vue'
 var vm=new Vue({
    el:'#loops',
    data:{
        name:"shashank",
        lastname:"kulkarni",
        persons:["shashank","utkarsh","kapil","mohit","himsnshu"],
        db:[{name:"shashank",age:22,company:'HotWax'},
        {name:"Utkarsh",age:23,company:'HP'},
        {name:"Himanshu",age:24,company:'Infosys'},
        
        ]
    },
})
export default {
    name:"loopsAndConditions",
    data(){
        return{
            vm:vm
        }
    }
  
}
</script>