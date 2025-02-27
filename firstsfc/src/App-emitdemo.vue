<style>
</style>
<template>
  <h1>$emit-demo</h1>
  <emitter @tryk="tryk"></emitter>
  <p>Der blev trykket {{ vis }}</p>
</template>
<script>
export default {
  data(){
    return {
      vis:""
    }
  },
  methods:{
    tryk(besked){
      this.vis= besked;
    }
  }
}
</script>