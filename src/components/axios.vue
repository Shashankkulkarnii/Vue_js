<template>
  <div>
      <h1>Axios</h1>
      <!-- <p>{{apidata.data.data}}</p> -->
      <table class="table">
          <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Salary</td>
          </tr>
          <tr v-for="api in apidata.data.data" :key="api">
              <td>{{api.employee_name}}</td>
              <td>{{api.employee_age}}</td>
              <td>{{api.employee_salary}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default {
    name:'axious',
    data(){
        return{
            apidata:""
        }
    },
    mounted(){
        Vue.axios("https://dummy.restapiexample.com/api/v1/employees")
        .then((resp)=>{
            this.apidata=resp;
            console.log(resp.data.data);
        })
    }
}
</script>

<style>
.table{
    text-align: center;
    margin-left: 400px;
}
</style>