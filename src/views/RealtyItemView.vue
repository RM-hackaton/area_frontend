<script setup>
import ItemNavigation from '@/components/ItemNavigation.vue'
import axios from 'axios'
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'

const delNotification = i => {
	return notifications.value.splice(i, 1)
}

let home = ref({})

const route = useRoute()
onMounted(() => {
	axios.get('http://194.67.121.186/api/commercials/?limit=1&offset=' + (route.params.id - 1))
		.then(response => {
			home.value = response.data[0]
		})
})

</script>
<template>

<section class="min-h-screen">

		<ItemNavigation :title="home.name"></ItemNavigation>
	
		<div class="list mt-4">
			<div class="block">
					<h2 class="mb-2 font-bold text-xl"></h2>
					<div class="images flex space-x-4 max-w-full overflow-auto">
						<img v-for="i in 4" :key="i" src="@/assets/img/realty_example.png" alt="">
					</div>
					<div class="price flex items-center my-2">
						<h3 class="price_full text-xl font-bold">{{ home.price }}</h3>
						<h3 class="price_full font-medium opacity-50 ml-3">{{ home.price_meter }} руб. / м2</h3>
					</div>
					<div class="location">Краснодарский край, Краснодар, микрорайон Квартальный, ул. Цоколя, 301</div>

					<p class="text-lg my-4 text-gray-400 text-center">{{ home.floor }} этаж, Комфорт-класс</p>


					
					<div class="flex justify-center items-center space-x-4 justify-between w-full mr-4">
						<button class="rounded-md w-1/2 border flex justify-center items-center border-primary text-dark text-lg py-2 font-semibold">
						<svg class="mr-4" style="transform: rotate(-90deg)" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.14821 5L5.39377 0.636508C5.5382 0.48807 5.53495 0.250655 5.38651 0.106228C5.23807 -0.038199 5.00065 -0.0349467 4.85623 0.113492L0.356228 4.73849C0.214591 4.88406 0.214591 5.11594 0.356228 5.26151L4.85623 9.88651C5.00065 10.0349 5.23807 10.0382 5.38651 9.89377C5.53495 9.74935 5.5382 9.51193 5.39377 9.36349L1.14821 5Z" fill="#222222"/>
</svg>
							1 месяц</button>
						<RouterLink to="/realty/success" class="block rounded-md text-center w-1/2 bg-primary text-white text-lg py-2 font-semibold">снять</RouterLink>
					</div>

				</div>

			</div>

			<hr class="my-10" style="color: rgba(0,0,0,.1)">
			
			<div class="similar flex flex-wrap justify-between">
				<div v-for="i in 10" class="block" style="width: 48%">
					<h4 class="font-bold text-lg leading-0">Офис, 200м² название текст</h4>
					<img class="my-2" src="@/assets/img/realty_example.png" alt="">
					<h5 class="font-bold text-xl">1 150 000 руб.</h5>
					<p class="text-sm">Краснодарский край, Краснодар, микрорайон Квартальный, ул. Цоколя, 301</p>

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
