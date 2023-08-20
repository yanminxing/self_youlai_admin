<template>
	<router-view></router-view>
	<HelloWorld></HelloWorld>
</template>

<script setup lang="ts">
	import {store} from './store';
	import HelloWorld from '@/components/HelloWorld.vue';

	console.log(store.state);
</script>

<style scoped></style>
