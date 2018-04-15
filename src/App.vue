<template>
  <div class="container-fluid">

    <app-header></app-header>

    <div class="row">
      <app-search></app-search>

      <div class="col-4 panel" id="preview">
        <h5>Preview Panel</h5>
      </div>
    </div>
  </div>
</template>

<script>

    import Header from './components/Header.vue'
    import Search from './components/Search.vue'
    export default {

        components: {
            appHeader: Header,
            appSearch: Search,
        },
        data () {
            return {

            }
        }
    }
</script>

<style>
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 5px;
    height: 100%;
  }

  #navigation {
    margin-bottom: 20px;
  }
  .panel {

  }

  #preview {
    background-color: inherit;
  }

  h1, h2 {
    font-weight: normal;
  }



  a {
    color: #42b983;
  }
</style>
