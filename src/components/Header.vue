<template>
  <nav  id='navigation' class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      Focus
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">Search <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="#">Viewer</a>
        <a class="nav-item nav-link" href="#">Help</a>
      </div>
    </div>
  </nav>
</template>

<script>

  export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
