<style></style>
<template>
  <h1>Opgave 5</h1>
  <emitter @liftoff="liftoff"></emitter>
  <canvas ref="canvas"></canvas>
</template>
<script>
export default {
  methods: {
    liftoff() {
      let ctx = this.$refs.canvas.getContext("2d"), stjerner = 1000, bredde = ctx.canvas.width, højde = ctx.canvas.height;
      ctx.fillStyle = "black"; ctx.fillRect(0, 0, bredde, højde); ctx.fillStyle = "lightblue";
      let id = setInterval(() => {
        ctx.fillRect(Math.random() * bredde, Math.random() * højde, 1, 1);
        if ((stjerner--) === 0) clearInterval(id);
      })
    }
  }
}
</script>