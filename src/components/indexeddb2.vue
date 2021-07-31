<template><div>
   <h1>Indexed Db</h1>
  <button @click="createDb">Create db</button>
  <button @click="addData">add data</button>
  <button @click="readAll">read all</button>
  <button @click="read">read</button>
  <button @click="remove">remove</button>
  </div>
</template>

<script>
export default {
   name:'indexedDb',
   data(){
      return{
         db:""
      }
   },
   methods:{
      createDb(){
      //  window.indexedDB = window.indexedDB || window.mozIndexedDB || 
      //    window.webkitIndexedDB || window.msIndexedDB;

          window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;

         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange

         if(!window.indexedDB){
            window.alert("Your browser does not support a indexed Db");
         }
         const employeeData = [ 
            { id: "01", name: "shashank", age: 23, email: "shashank@gmail.com" },
            { id: "02", name: "utkarsh;", age: 32, email: "utk@gamil.com.com" }
         ];
         var request = window.indexedDB.open("myDb",1);
         request.onerror = function(){
            console.log("error");
         }
         request.onsuccess = function(){
             this.db= request.result;
           
            console.log("success: " +this.db);
         }
         request.onupgradeneeded = function (event) {
            var db1= event.target.result;
            var objectStore = db1.createObjectStore("employee",{keyPath: "id"});
            for(var i in employeeData){
               objectStore.add(employeeData[i]);
            }
         }
         alert("created sucessfully")
         console.log(this.db);

      },
      addData(){
         var request = this.db.transcation(["employee"],"readwrite")
         .objectStore("employee").add({id:"03", name:"kapil",age:"24",email:"kp@gmail.com"});
         request.onsuccess =function(){
            alert("kapil has been added");
         };
         request.onerror-function() {
            alert("already exist")
            
         }

         alert("add method");
      },
      readAll(){
         
         var transcation = this.db.tansaction("employee");
         var objectStore = transcation.objectStore("employee");
         objectStore.openCursor().onsuccess = function(event){
            var cursor = event.target.result;
            if(cursor){
               alert("Name for id " + cursor.key + "is" + cursor.value.name+ "Age:" + cursor.value.age + "email:" + cursor.value.email);
               cursor.continue();
            }
         }
         
         alert("Read All Method")
      },
      read(){
         var transcation= this.db.transcation(['employee']);
         var objectStore = transcation.objectStore("employee");
         var request = objectStore.get("02");

         request.onerror = function(){
            alert("unable to retrive data from database");
         }
         request.onsuccess = function() {
            if(request.result){
               alert( "name" + request.result.name+ "Age:" + request.result.age + "email:" + request.result.email);

            }
            
         }

      },
      remove(){
         var request = this.db.transcation(["employee"],"readwrite")
         .objectStore("employee").delete("03");

         request.onsuccess = function(){
            alert("kapil has removed from database");
         }
      }
      
   }
   

}
</script>

<style>

</style>