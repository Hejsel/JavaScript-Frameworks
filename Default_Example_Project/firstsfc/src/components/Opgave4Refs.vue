<template>  
  <input ref="inp" v-on:input="tælBogstaver" placeholder="Skriv noget her">
  <p>Du har skrevet {{bogstaver}} bogstav{{ bogstaver!==1?"er":"" }}</p>
</template>

<script>
  export default {
    data(){
      return {bogstaver:0}
    },
    methods: {
      tælBogstaver() {
        this.bogstaver=0;
        for(let b of this.$refs.inp.value) if(/\p{L}/u.test(b)) this.bogstaver++;
      }
    }
  }
</script>