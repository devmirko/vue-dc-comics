<template>
<div id="App">
    <HeaderApp/>
    <main>
    <MainCard/>
    </main>
    <FooterGroup/>
</div> 
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'
import FooterGroup from './components/FooterGroup.vue'
import MainCard from './components/MainCard.vue'

export default {
  name: 'App',
  components: {
    HeaderApp,
    FooterGroup,
    MainCard

  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}


</style>
