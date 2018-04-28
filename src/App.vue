<template>

      <router-view></router-view>

</template>

<script>
    import Search from './components/search/mainSearch.vue'
    import About from './components/About.vue'
    export default {

        components: {
            appSearch: Search,
            appAbout: About,
        },
        data () {
            return {
              activeComponent : 'appSearch',
            }
        },
        methods: {

        }
    }
</script>

<style>
  body {
    background-color: #f0f0f9;
  }


</style>
