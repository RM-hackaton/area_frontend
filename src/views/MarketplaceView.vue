<script setup>
import SectionNavigation from '@/components/SectionNavigation.vue'
import {ref, onMounted} from 'vue'
import axios from 'axios'

const delNotification = i => {
	return notifications.value.splice(i, 1)
}

const marketItems = ref([])
onMounted(() => {
axios.get('http://89.108.70.47/marketplace/')
	.then(response => {
		marketItems.value = response.data
	})
})

</script>
<template>

<section class="min-h-screen">
	

		<SectionNavigation :navBlocks="[
			{title: 'главная', link: '/'},
			{title: 'маркетплейс'}
		]" title="Маркетплейс услуг"></SectionNavigation>
<div class="flex flex-wrap justify-between w-full my-3">
				<button class="rounded-md mb-2 w-1/2 bg-primary text-white text-lg py-2 font-semibold">демонтаж</button>
				<button class="rounded-md mb-2 w-1/2 bg-transparent border border-primary text-dark text-lg py-2 font-semibold">биометрия</button>
				<button class="rounded-md w-1/2 bg-transparent border border-primary text-dark text-lg py-2 font-semibold">юр. услуги</button>
				<button class="rounded-md w-1/2 bg-transparent border border-primary text-dark text-lg py-2 font-semibold">промоутеры</button>
			</div>

	
			<hr class="my-10" style="color: rgba(0,0,0,.1)">
			
			<div class="similar flex flex-wrap justify-between">
				<a target="_blank" :href="marketItem.url" v-for="marketItem in marketItems" class="block mb-10" style="width: 48%">
					<h4 class="font-bold text-lg leading-0">{{ marketItem.name }}</h4>
					<img class="my-2 w-16" :src="'http://89.108.70.47' + marketItem.image" alt="">
					<p class="font-bold text-lg">2000 руб.</p>

				</a>

			</div>

		</section>

</template>
<style scoped>
.searchbox {
	height: 50px;
	width: 100%;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid #FFFFFF;
	box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
	backdrop-filter: blur(5px);
	border-radius: 5px;
}
</style>
