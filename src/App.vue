<template>
  <div class="container-fluid">

    <nav  id='navigation' class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" @click="activeComponent='appSearch'">
          Search
        </button>
        <button type="button" class="btn btn-primary" @click="activeComponent='appViewer'">
          Viewer
        </button>
        <button type="button" class="btn btn-primary" @click="activeComponent='appAbout'">
          About
        </button>
      </div>
    </nav>

    <div class="row">
      <component :is="activeComponent"></component>
    </div>
  </div>
</template>

<script>

    import Header from './components/Header.vue'
    import Search from './components/Search.vue'
    import About from './components/About.vue'
    import Viewer from './components/viewer/Viewer.vue'
    export default {

        components: {
            appHeader: Header,
            appSearch: Search,
            appAbout: About,
            appViewer: Viewer,
        },
        data () {
            return {
              activeComponent : 'appSearch'
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
