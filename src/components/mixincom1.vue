<template>
  <div>
      <h1>mixincom1 for mixin example with button click</h1>
      <button v-on:click="counter()">pressed: {{count}} Times</button>
  </div>
</template>

<script>
import counter from '../mixins/counter'
export default {
    name:'mixincom1',
    mixins:[counter],
    
  

}
</script>

<style>

</style>