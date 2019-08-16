<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/heart.png" class="small">
    <HelloWorld msg="Matching de parejas"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
img.small{
  width: 25%; height: 25%;
}
</style>

