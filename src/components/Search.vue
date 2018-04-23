<template>
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
