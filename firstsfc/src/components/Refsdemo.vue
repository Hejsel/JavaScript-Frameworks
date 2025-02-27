<template>
  <h2 ref="overskrift">Her kommer det du skriver</h2>
  <input ref="inp" v-on:input="getOverskrift" placeholder="Skriv en overskrift">
</template>

<script>
  export default {
    methods: {
      getOverskrift() {
        this.$refs.overskrift.innerHTML = this.$refs.inp.value;
      }
    }
  }
</script>