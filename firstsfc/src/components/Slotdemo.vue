<style>
footer {
  color: brown;
}
</style>
<template>
  <h1>
    <slot name="headline"></slot>
  </h1>
  <div>
    <slot></slot>
  </div> <!-- Default slot -->
  <footer>
    <slot name="footer"></slot>
  </footer>
  <slot name="dato" :dato="dato"></slot>
</template>
<script>
export default {
  data(){
    return {dato:new Date()};
  }
}
</script>