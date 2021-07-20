import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter("uperCase",function(val){
  return val.toUpperCase();
})

//directive
Vue.directive('rgb',{
  bind(el,binding){
    if(binding.value=="red"){
      el.style.color = "red";
    }
    else if(binding.value=="blue"){
      el.style.color ="blue"; 
    }
      else if(binding.value=="green"){
        el.style.color="green";
      }
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
