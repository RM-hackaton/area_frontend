<script setup>
import {defineProps, ref} from 'vue'

const navBlocks = ref([])
const title = ref(null)

const props = defineProps({
	title: String,
	navBlocks: Array
})
</script>
<template>
	<div class="my-3 flex text-white text-xl">
		<div v-for="(navBlock, navBlockI) in props.navBlocks" :key="navBlock">
			<span :class="{'font-bold': navBlockI == props.navBlocks.length - 1}">{{ navBlock.title }}</span>
			<span v-show="navBlockI != props.navBlocks.length - 1">
			>
			</span>
		</div>
	</div>

<h1 class="text-3xl font-extrabold text-white">{{ props.title }}</h1>

</template>
<style>

</style>
