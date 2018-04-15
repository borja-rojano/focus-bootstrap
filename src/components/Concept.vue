<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Concept {{index + 1}}</h5>
      <input type="text t1" placeholder="Enter a valid PQL query" v-model="newQuery">
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          newQuery : this.query
        }
      },
      props: {
        index: {
          type:  Number,
          required: true
        },
        query: {
          type:  String,
          required: true
        },
        updateConcepts: {
          type:  Function,
          required: true
        }
      },
      watch: {
        newQuery (){
          this.updateConcepts(this.newQuery, this.index)

        }
      }
    }
</script>

<style scoped>
  input {
    border-width: 0;
  }
  input:focus{
    outline: none;
  }

  .card {
    margin-bottom: 20px;
  }

</style>
