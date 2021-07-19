<style scoped>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>
<template>
  <div id="hello_nav">
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>

    <div style="padding-left: 16px">
      <h2>Hello Vue </h2>
      <p>This is my first vue app </p>
      <h1 ref="count">{{counter}}</h1>
      <button v-on:click="counter=counter+1">update</button>
    </div>
    <div id="nav_div"></div>

  </div>
</template>

<script>
export default {
    name:'navbar',
    data(){
      return{
        counter: 0,

      }
    },
    beforeCreate(){//automatically run before create component
      console.log(`before create `);
    },
    created(){//automatically run after create component
      console.log("created");
    },
    beforeMount(){//auntomatically runs before html elements load
      console.log("Before mount");
    },
    mounted(){//automatically rins after html elemts loaded
      console.log("Mounted");
    },
    beforeUpdate(){
      console.log("before update",this.$refs['count'].textContent);
    },
    updated(){
      console.log("after update",this.$refs['count'].textContent);
    }

}
</script>
