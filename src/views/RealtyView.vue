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
			{title: 'профиль', link: '/profile'},
			{title: 'общие'}
		]" title="Выберите коммерческую недвижимость"></SectionNavigation>


		<input type="text" placeholder="Поиск по вашему городу" class="text-lg searchbox text-center font-semibold my-6 outline-none">
		
		<div class="flex justify-between">
			<div class="flex space-x-4 justify-between w-full mr-4">
				<button class="rounded-md w-1/2 bg-primary text-white text-lg py-2 font-semibold">снять</button>
				<button class="rounded-md w-1/2 bg-transparent border border-primary text-dark text-lg py-2 font-semibold">снять</button>
			</div>
			<img src="@/assets/img/icons/filter.svg" alt="">
		</div>


		<div class="list mt-4">

			<div v-for="i in 8" class="block mb-10">
				<RouterLink to="/realty/item">
					<h2 class="mb-2 font-bold text-xl">Офис, 200м² название текст</h2>
					<div class="images flex space-x-4 max-w-full overflow-auto">
						<img v-for="i in 4" :key="i" src="@/assets/img/realty_example.png" alt="">
					</div>
					<div class="price flex items-center my-2">
						<h3 class="price_full text-xl font-bold">1 150 000 руб.</h3>
						<h3 class="price_full font-medium opacity-50 ml-3">72 000 руб. / м2</h3>
					</div>
					<div class="location">Краснодарский край, Краснодар, микрорайон Квартальный, ул. Цоколя, 301</div>
				</RouterLink>

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
