<template>
  <p></p>
  <p>
    <span v-for="o in ord" v-bind:class="klasse">{{ o + " "}}</span>
  </p>
</template>

<script>
export default {    
  props: [
    'ord', 'klasse'
  ]
}
</script>

<style></style>