<template>
<div>
    <!-- input text -->
    <h3>input text</h3>
    <input type="text" v-model="message" placeholder="Enter message" >
    <p>Messsage is : {{message}}</p>
    
    <!-- input multiple lines -->
    <h3>Input multiple lines</h3>
    <textarea name="" placeholder="enter message" v-model="message1" id="" cols="30" rows="10"></textarea>
    <p>text area message is : {{message1}}</p>

    <!-- checkbox -->
    <h3>checkbox</h3>
      <label for="shashank">shashank</label>
    <input type="checkbox" name="" id="shashank" value="shashank" v-model="names">
      <label for="utkarsh">utkarsh</label>
    <input type="checkbox" name="" id="utkarsh" value="utkarsh" v-model="names">
      <label for="kapil">kapil</label>
    <input type="checkbox" name="" id="kapil" value="kapil" v-model="names">
    <p>{{names}}</p>

    <!-- radio -->
    <h3>radio</h3>
    <label for="male">male</label>
    <input type="radio" value="male" id="male" v-model="gender">
    <label for="female">Female</label>
    <input type="radio" value="female" id="female" v-model="gender">
    <p>{{gender}}</p>

    <!-- select -->
    <h3>Select</h3>
    <select name="cars" id="cars" v-model="car">
        <option disabled value="">select car</option>
        <option value="lembo">Lembo</option>
        <option value="hammer">Hammer</option>
        <option value="R8">R8</option>
        <option value="pagani">Pagani</option>
    </select>
        <p>{{car}}</p>

        <!-- select with loop -->
        <h3>select with loop</h3>
        <select name="color" id="color" v-model="color">
            <option v-for="color in colors" :key="color" v-bind:value="color.value">{{color.text}}</option>
        </select>
        <p>{{color}}</p>
</div>

</template>
<script>
export default {
    name:'forms',
    data(){
        return{
            message:'',
            message1:'',
            names:[],
            gender:"",
            car:"",
            colors:[
                {text:"red",value:"red"},
                {text:"blue",value:"blue"},
                {text:"green",value:"green"},
                {text:"pink",value:"pink"},
            ]
        }
    }
}
</script>