<template>
  <button v-on:click="send($event,'start')">Start</button>
  <button v-on:click="send($event,'stop')">Stop</button>
</template>

<script>
  export default {
    methods:{
      send(e,x){this.$emit("tryk",x);}
    }
  }
</script>