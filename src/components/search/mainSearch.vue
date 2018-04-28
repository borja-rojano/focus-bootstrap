<template>
  <div class="container" id="mainSearch">
  <div class="row">
    <div class="col" >
<!-- Welcome Jumbortron -->

    <div class="jumbotron jumbotron-fluid" >
        <div class="container">
            <h1 class="display-3">hackSERA <small class="text-muted">beta</small></h1>

            <p class="lead">Search with the ANSERA tehcnology using the commands and workflow you already know.</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
        </div>
    </div>

<!-- Card -->
        <div class="card" v-for="(query, index) in queryList">
          <div class="card-body">
            <h5 class="card-title">Query {{index + 1}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{query.families}} Families found</h6>
            <p class="card-text">{{query.query}}</p>
            <a href="#" class="card-link">Send to Viewer</a>
            <a href="#" class="card-link">Limit to this set</a>
          </div>
        </div>




<!-- New Search Statement -->
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Enter New Query</h5>
            <form ref='form' v-on:submit.prevent="submitQuery">
              <input type="text"
              placeholder="Enter a PQL query, or open a dossier with ..open <Application Number>"
              v-model.trim='newQuery'
              >
            </form>
          </div>
        </div>

<!-- End New Search Statement -->

    </div>
<!-- End of console -->
  </div>
</div>
</template>

<script>
export default {
  data () {
      return {
        queryList : [],
        newQuery: '',
      }
  },
  watch: {

  },

//methods

  methods: {
    submitQuery (){
      let queryResults = {}
      queryResults.query = this.newQuery
      // Here we need to launch the search method and when done, with a callback we need to get the number of results.
      queryResults.families = 1990
      this.queryList.push(queryResults)
      console.log(this.queryList)
      this.newQuery = ''
    },
  },

  mounted: function () {
  }
}
</script>

<style scoped>


#mainSearch {
  padding-top: 20px
}


#console {
  position: fixed;
  bottom: 0;
}

#panel {
  border-left: 1px solid grey;
}

.jumbotron {
    background-image: url(./cover.jpg);
    background-position: 0% 25%;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 60px;
    padding-bottom: 280px;
}

.card {
  width: 100%;
  margin-bottom: 20px;
}


input {
  width: 100%
}
</style>
