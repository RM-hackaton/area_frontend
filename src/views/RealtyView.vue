<script setup>
import SectionNavigation from '@/components/SectionNavigation.vue'
import {ref, onMounted} from 'vue'
import axios from 'axios'

const delNotification = i => {
	return notifications.value.splice(i, 1)
}

const items = ref([])

axios.get('http://194.67.121.186/api/commercials/?limit=20&offset=0')
.then((response) => {
	items.value = response.data
}, (error) => {
  console.log(error);
});


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
			<div class="flex space-x-4 justify-between w-full">
				<button class="rounded-md w-1/2 bg-primary text-white text-lg py-2 font-semibold">снять</button>
				<button class="rounded-md w-1/2 bg-transparent border border-primary text-dark text-lg py-2 font-semibold">купить</button>
			</div>
		</div>


		<div class="list mt-4">

			<div v-for="item in items" class="block mb-10">
				<RouterLink to="/realty/item">
					<h2 class="mb-2 font-bold text-2xl">{{ item.name }}</h2>
					<div class="images flex space-x-4 max-w-full overflow-auto">
						<img v-for="i in 1" :key="i" class="w-full w-80 mx-auto" :src="item.plan" alt="">
					</div>
					<div class="price flex items-center my-2">
						<h3 class="price_full mb-2 text-2xl font-bold">{{ item.price }} руб.</h3>
						<h3 class="price_full font-medium opacity-50 ml-3">{{ item.price_meter }} руб. / м2</h3>
					</div>
					<button class="rounded-md bg-primary w-full text-white text-lg py-2 font-semibold" data-v-50321569="">Смотреть больше</button>
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
