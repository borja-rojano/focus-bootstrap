<template>
  <div class="container-fluid">
    <appHeader></appHeader>
    <div class="row">
      <!-- <component
      :is="activeComponent"
      :updateWorkingList='updateWorkingList'
      ></component> -->
      <router-view></router-view>
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
              activeComponent : 'appSearch',
              workingList : [],
            }
        },
        methods: {
          updateWorkingList(callback){
            callback(this.workingList)
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
