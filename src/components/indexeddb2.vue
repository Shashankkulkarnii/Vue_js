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
         db:"",
         request:""
      }
   },
   methods:{
      createDb(){
      //   window.indexedDB = window.indexedDB || window.mozIndexedDB || 
      //    window.webkitIndexedDB || window.msIndexedDB;

          window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;

         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange

         if(!window.indexedDB){
            window.alert("Your browser does not support a indexed Db");
         }
         const employeeData = [ 
            { id: "00-01", name: "shashank", age: 23, email: "shashank@gmail.com" },
            { id: "00-02", name: "utkarsh;", age: 32, email: "utk@gamil.com.com" }
         ];
         this.request = window.indexedDB.open("myDb",1);
         this.request.onerror = function(){
            console.log("error");
         }
         this.request.onsuccess = function(){
             this.db= this.request.result;
           
            console.log("success: " +this.db);
         }
         this.request.onupgradeneeded = function (event) {
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
         //  window.indexedDB = window.indexedDB || window.mozIndexedDB || 
         // window.webkitIndexedDB || window.msIndexedDB;


         window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;

         
 window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange
         // this.request = window.indexedDB.open("myDb",1);
        this.db = this.request.result;
        this.request = this.db.transaction(["employee"],"readwrite")
         .objectStore("employee").add({id:"00-03", name:"kapil",age:24,email:"kp@gmail.com"});
         this.request.onsuccess =function(){
            alert("kapil has been added");
         };
         this.request.onerror-function() {
            alert("already exist")
            
         }

         alert("add method");
      },


      
      readAll(){
          window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;

         
 window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange

         // this.db = this.request.result;
         // var transcation = this.db.tansaction("employee");
         // var objectStore = this.db.tansaction("employee").objectStore("employee");
         this.request = this.db.transaction(["employee"],"readwrite")
         .objectStore("employee").openCursor();
         this.request.onsuccess = function(event){
            console.log(event);
            var cursor = event.target.result;
            if(cursor){
               alert("Name for id " + cursor.key + "is" + cursor.value.name+ "Age:" + cursor.value.age + "email:" + cursor.value.email);
               cursor.continue();
            }
         }
         
         alert("Read All Method")
      },




      read(){
          window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;

         
 window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange

         //  this.db = this.request.result;
         // var transcation= this.db.transcation(["employee"]);
         this.request = this.db.transaction(["employee"])
         .objectStore("employee").get("00-03");
         // this.request = objectStore.get("00-03");

         this.request.onerror = function(){
            alert("unable to retrive data from database");
         }
         this.request.onsuccess = function(event) {
            console.log(event.target.result.name);
            if(event.target.result){
               alert( "name" + event.target.result.name + " Age:" + event.target.result.age + " email:" + event.target.result.email);

            }
            else {
                  alert("Kapil couldn't be found in your database!");
               }
            
         }

      },



      remove(){
            window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;

         
 window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange


         // this.db = this.request.result;
          this.request = this.db.transaction(["employee"],"readwrite")
         .objectStore("employee").delete("00-03");

         this.request.onsuccess = function(){
            alert("kapil has removed from database");
         }
      }
      
   }
   

}
</script>

<style>

</style>