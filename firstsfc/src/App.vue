<script></script>
<style>
.kompa {
	background-color: blue;
	color: yellow;
}
.kompb {
	background-color: greenyellow;
	color: blueviolet;
}
</style>
<template>
	<h1>Vue-demo</h1>
	<h2>kompa aka Komponent 1</h2>
	<komp1 class="kompa"></komp1>
	<h2>kompb aka Komponent 2</h2>
	<kompb class="kompb" v-for="x in 3"></kompb>
</template>
