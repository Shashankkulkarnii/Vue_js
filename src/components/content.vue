<template>
    <div>Hello Here we trying to lern lifecycle
        <h1>{{add}}</h1>
        <input type="text" v-model="message">
        <p>{{typing}}</p>
    </div>
    
</template>
<script>
export default {
    name:'content',
    data()  {
        return{
            message:"",
            typing:""
        }
    },
    computed:{
      add:function(){
            return 20+20

        }
    },
    watch:{
        message(newvalue,oldvalue){
            console.log(oldvalue);
            console.log(newvalue);
             this.typing = "typing"

            setTimeout(() => {
                this.typing=""
                
            }, 2000);
            

        },
        typing(){
           
        }

    }

}
</script>