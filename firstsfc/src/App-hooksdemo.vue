<template>  
  <h1><sekunder @tidsUpdate="updateTid" /></h1>
  <p>Sekunder: {{ sekunder }}</p>
</template>

<script>
//import ChildComponent from "./ChildComponent.vue";

export default {
  //components: { ChildComponent },
  data() {
      return { sekunder: 0 };
  },
  methods: {
      updateTid(tid) {
          this.sekunder = tid;
      }
  }
};
</script>
