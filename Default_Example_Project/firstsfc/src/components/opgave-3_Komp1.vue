<template>
	<img v-bind:src="images" alt="">
</template>
<script>
export default {
	props: ['images'],
	computed: {
		billedeSti() {
			return new URL(`../assets/${this.images}`, import.meta.url).href;
		},
	},
};
</script>
