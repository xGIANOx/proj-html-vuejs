<script>
import AppHeader from './components/AppHeader.vue'
import Appmain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'



export default{
  name: "App",
  components: {
    AppHeader,
    Appmain,
    AppFooter,
  }
}

</script>

<template>
  
<AppHeader id="home"></AppHeader>
<Appmain></Appmain>
<AppFooter id="reservation"></AppFooter>


</template>

<style scoped>

</style>
