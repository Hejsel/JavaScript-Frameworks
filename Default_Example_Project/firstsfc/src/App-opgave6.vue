<script>
export default {
  data() {
    return {
      flestV: [],
      flestK: [],
      øvrige: [],
      tekst: "",
    }
  },
  methods: {
    vokaler(o) {
      let cntr = 0;
      for (let c of o) if ("aeiouyæøå".includes(c.toLowerCase())) cntr++;
      return cntr;
    },
    konsonanter(o) {
      let cntr = 0;
      for (let c of o) if ("bcdfghjklmnpqrstvwxz".includes(c.toLowerCase())) cntr++;
      return cntr;
    },
    nyTekst(tekst) {
      let t = tekst.split(" ");
      this.flestK.length = 0; this.flestV.length = 0; this.øvrige.length = 0;
      for (let o of t) {
        let c = this.konsonanter(o), w = this.vokaler(o);
        if (c > w) this.flestK.push(o);
        else if (w > c) this.flestV.push(o);
        else this.øvrige.push(o);
      }
    }
  }
}
</script>

<template>
  <h1>Opgave 6</h1>
  <Input @nyTekst="nyTekst" />
  <Output v-bind:ord="flestK" klasse="flestK" />
  <Output v-bind:ord="flestV" klasse="flestV" />
  <Output v-bind:ord="øvrige" klasse="øvrige" />
</template>

<style>
.flestK {
  background-color: green;
  color: white;
}

.flestV {
  background-color: red;
  color: yellow;
  text-decoration-style: double;
}

.øvrige {
  background-color: blue;
  color: gold;
}
</style>