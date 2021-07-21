<template>
  <div>
      <h1>mixincom2 for mixin example with button click</h1>
      <button v-on:mouseover="counter()">hoverd: {{count}} Times</button>
  </div>
</template>

<script>
import counter from '../mixins/counter'
export default {
    name:'mixincom2',
    mixins:[counter], 

}
</script>

<style>

</style>