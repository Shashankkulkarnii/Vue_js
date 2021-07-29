<template>
<div>
  <h1>indexedDB</h1>
  <button v-on:click="createDb">createDb</button>
  <button v-on:click="addnote">Add Note</button>
  <button v-on:click="viewnote">Vew Note</button>
  </div>
</template>

<script>
export default {
    name:'indexedDB',
    data(){
        return{
            db:"",
            request:indexedDB.open("notes1"),
            createDbrequest:"",
            notesDb:""
        }
    },
    methods:{
        //view note method
        viewnote(){
               const tx = this.db.transaction("notesDb","readwrite")
        const notesDb = tx.objectStore("notesDb")
        const request = notesDb.openCursor()
        request.onsuccess = e =>{
            const cursor = e.target.result
            // alert("i am vue notes func")

            if(cursor){
                alert(`Title: ${cursor.key} , Text: ${cursor.value.text}`)
            }
        }

        },
        //addnote method
        addnote(){
             const note={
                title:"notes11",
                Text:"hello i am note11"
            }
            
            const tx = this.db.transaction("notesDb","readwrite")
            tx.onsuccess = () => {
		alert("hello")
        const store = tx.objectStore("notesDb")
        store.add(note);
	};
        
        },
        //create db method
        createDb(){ 
            
              this.request.onupgradeneeded = (e) => {
                this.db = e.target.result
                console.log('on upgraded called');
                this.db.createObjectStore("notesDb", {keyPath:"title"})
                alert(`iam upgraded ${this.db.name}`);

            }

           this.request.onsuccess = e => {
               this.db = e.target.result
                alert('on success called');
                alert(this.db.name);


            }

            this.request.onerror = () => {

                alert('on error called');

            }

        
        }
    }

}
</script>

<style>

</style>