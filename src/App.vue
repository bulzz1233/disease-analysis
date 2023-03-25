<template>
  <div id="app">
      <home/>
            
  </div>
</template>

<script>
import home from "@/components/base/home";
export default {
  name: 'App',
  components: {
    home
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
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 0px;
}

#app{
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 320px) {
    html {
        font-size: 10px;
    }
}
@media screen and (min-width: 640px) {
    html {
        font-size: 11px;
    }
}
@media screen and (min-width: 1080px) {
    html {
        font-size: 12px;
    }
    
}
@media screen and (min-width: 2000px) {
    html {
        font-size: 14px;
    }
    
}
</style>
