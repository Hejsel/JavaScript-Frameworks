<template>
  <label>Skriv noget her
    <input type="text" v-model="tekst">
    <p>{{ g }}</p>
  </label>
</template>

<script>
export default {
  data() {
    return {
      tekst: ""
    }
  },
  emits: ["nyTekst"],
  methods: {
    nyTekst() {
      this.$emit("nyTekst", this.g)
    }
  },
  computed: {
    g() { this.$emit("nyTekst", this.tekst); return this.tekst }
  }
}
</script>

<style></style>