<template>
  <p>Fra uret</p>
</template>

<script>
export default {
  data() {
    return { intervalId: null };
  },
  mounted() {
    this.startEmitting();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startEmitting() {
      setInterval(() => {
        this.$emit("tidsUpdate", new Date().getSeconds());
      }, 1000);
    }
  }
};
</script>
