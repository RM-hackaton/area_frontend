<script setup>
import SectionNavigation from '@/components/SectionNavigation.vue'
import {ref} from 'vue'

const delNotification = i => {
	return notifications.value.splice(i, 1)
}

</script>
<template>

<section class="min-h-screen">
	

		<SectionNavigation :navBlocks="[
			{title: 'главная', link: '/'},
			{title: 'маркетплейс'}
		]" title="Маркетплейс услуг"></SectionNavigation>
<div class="flex space-x-4 justify-between w-full my-3">
				<button class="rounded-md w-1/2 bg-primary text-white text-lg py-2 font-semibold">снять</button>
				<button class="rounded-md w-1/2 bg-transparent border border-primary text-dark text-lg py-2 font-semibold">снять</button>
			</div>

	
			<hr class="my-10" style="color: rgba(0,0,0,.1)">
			
			<div class="similar flex flex-wrap justify-between">
				<div v-for="i in 10" class="block mb-10" style="width: 48%">
					<h4 class="font-bold text-lg leading-0">Пример услуги с фото</h4>
					<img class="my-2" src="@/assets/img/realty_example.png" alt="">
					<h5 class="font-bold text-xl">2000 руб.</h5>

				</div>

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
