<template>
  <button v-on:click="send">Klik her for at starte nedtællingen</button>
  <p style="font-size: 100px;">{{ sekunder }}</p>
</template>

<script>
export default {
  data() {
    return {
      sekunder: ""
    }
  },
  methods: {
    send() {
      if (!isNaN(parseInt(this.sekunder))) return;
      this.sekunder = 10;
      let id = setInterval(() => {
        if ((this.sekunder--) === 0) {
          clearInterval(id); this.sekunder = "Lift off!";
          this.$emit("liftoff");
        };
      }, 1000);
    }
  }
}
</script>