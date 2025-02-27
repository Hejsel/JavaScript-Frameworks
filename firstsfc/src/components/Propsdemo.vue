<template>
  <div v-on:click="countClicks">
    <h2>{{ foodName }}</h2>  
    <p>{{ message + foodName.toLowerCase()}}</p>
    <p id="red">Du har klikket mig {{ clicks }} gang{{clicks === 1 ? '':'e'}}.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {      
      message: 'Jeg kan lide ',
      clicks: 0
    }
  },
  methods: {
    countClicks() {
      this.clicks++;
    }
  },
  props: [
      'foodName'
    ]
}
</script>

<style>
  #red {
    font-weight: bold ;
    color: rgb(144, 12, 12);
  }
</style>