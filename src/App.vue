<template>
  <div id="app">
    <navbar />
    <div v-if="display">
     <distroyecomponent />
    </div>
      <button v-on:click="toggle">Distroyer</button>  
        <br>
    <img alt="Vue logo" src="./assets/logo.png">
    <contect /> 
    <loopsAndConditions/>
    <classbinding/>
    <eventhendler/>
    <forms/>
    <transition/>
    <props name="shashank" v-bind:arydata="arydata" /> 
    <filters/>
    <customDirective/>
    <mixincom1/> 
    <mixincom2/>
    <axious/>
    <!-- <indexedDB/> -->
    <indexeddb2/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import navbar from './components/navbar.vue'
import contect from './components/content.vue'
import distroyecomponent from './components/distroyecomponent.vue'
import loopsAndConditions from './components/loops&conditions.vue'
import classbinding from  './components/classbinding.vue'
import eventhendler from  './components/envenhendeler.vue'
import forms from './components/forms.vue'
import transition from './components/transition.vue'
import Props from './components/propes.vue'
import filters from './components/filter.vue'
import customDirective from './components/customDirectives.vue'
import mixincom1 from './components/mixincom1.vue'
import mixincom2 from './components/mixincom2.vue'
import axious from './components/axios.vue'
// import indexedDB from './components/indexedDB.vue'
import indexeddb2 from './components/indexeddb2.vue'

export default {
  name: 'App',
      methods:{
        toggle(){
            this.display=!this.display;
        }
        
    },
      data(){
        return{
          display:true,
          arydata:[
            {name:'shashank',lname:'kulkarni'},
            {name:'amul',lname:'jaiswal'},
            {name:'shubham',lname:'kulkarni'},
          ]
          
          }
    },
  
  components: {
    // HelloWorld,
    contect,
    distroyecomponent,
   navbar,
   loopsAndConditions,
   classbinding,
   eventhendler,
   forms,
   transition,
    Props,
    filters,
    customDirective,
    mixincom1,
    mixincom2,
    axious,
    // indexedDB,
    indexeddb2
   
  },
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
