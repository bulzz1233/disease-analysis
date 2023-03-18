<template>
  <div id="app">

  </div>
</template>

<script>
import Home from "@/pages/Home.vue";
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
html,
body {
    height: 100%;
}
body {
    margin: 0;
}
::-webkit-scrollbar {
    width: 0px;
}
@media screen and (min-width: 320px) {
    html {
        font-size: 10px;
    }
}
@media screen and (min-width: 640px) {
    html {
        font-size: 13px;
    }
}
@media screen and (min-width: 1080px) {
    html {
        font-size: 15px;
    }
}
</style>
