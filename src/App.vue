<template>
	<router-view></router-view>
</template>

<script setup lang="ts">
	import {store} from './store';
	console.log(store.state);
</script>

<style scoped></style>
