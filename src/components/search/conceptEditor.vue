<template>
<div class="row" >
  <div class="col-12" >
    <concept
      v-for="(entry, index) in concepts"
      :index="index"
      :query="concepts[index].q"
      :updateConcepts="updateConcepts"
    ></concept>
    <div id="newConcept">
      <button @click="newConcept" class="btn btn-outline-primary">Add New Concept</button>
      <button @click="runSearch" class="btn btn-outline-success">Search</button>
      <button @click="returnWL" class="btn btn-outline-success">Update</button>
    </div>
  </div>
</div>
</template>

<script>
  import Concept from './Concept.vue'
  export default {
    components: {
      concept: Concept
    },

    computed: {
      searchQuery (){
          var combined = 'and '
          for (var i = 0; i < this.concepts.length; i++)  {
              combined+= `(${this.concepts[i].q}),`
          }
          return combined
      }
    },
    props:{
      updateWorkingList: {
        type:  Function,
        required: true
      }
    },

    data () {
      return {
        concepts:[
          { name: '',
            q: '',
          },
        ],
      }
    },
    methods: {
      newConcept (){
        this.concepts.push(
          { name: '',
            q: '',
          }
        )
      },
      runSearch(){
          console.log(this.searchQuery)
      },
      updateConcepts(query, index){
        this.concepts[index].q = query
      },
      returnWL(){
        this.updateWorkingList(
          function (wl) {
            wl.push('EP0000001')
            console.log(wl.length);
          }
        )
      }
    }
  }
</script>

<style scoped>
  button:focus{
    outline: none;
  }

  #newConcept{
    margin-bottom: 40px;
  }
</style>
