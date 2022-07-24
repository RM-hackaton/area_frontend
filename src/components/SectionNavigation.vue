<script setup>
import {defineProps, ref} from 'vue'

const navBlocks = ref([])
const title = ref(null)

const props = defineProps({
	title: String,
	navBlocks: Array,
	white: {
		type: Boolean,
		default: false
	}
})
</script>
<template>
	<div class="my-3 flex flex-wrap text-xl" :class="{'text-white': props.white}">
		<div v-for="(navBlock, navBlockI) in props.navBlocks" :key="navBlock">
			<span :class="{'font-bold': navBlockI == props.navBlocks.length - 1}">{{ navBlock.title }}</span>
			<span v-show="navBlockI != props.navBlocks.length - 1">
			>
			</span>
		</div>
	</div>

<h1 class="text-3xl font-extrabold" :class="{'text-white': props.white}">{{ props.title }}</h1>

</template>
<style>

</style>
