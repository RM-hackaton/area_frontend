<script setup>
import SectionNavigation from '@/components/SectionNavigation.vue'
import {ref} from 'vue'

const notifications = ref([
	'пожалуйста, подтвердите электронную почту',
])


const delNotification = i => {
	return notifications.value.splice(i, 1)
}

</script>
<template>
	<div class="px-4">

	<section class="bg-primary min-h-screen">

<div class="flex space-x-4 justify-between w-full mr-4 my-4">
	<RouterLink to="/profile" class="rounded-md w-1/2 text-center text-white border border-white text-text-white text-lg py-2 font-semibold">общие</RouterLink>
	<RouterLink to="/profile/realty" class="rounded-md w-1/2 border border-white bg-white text-center text-dark font-bold text-lg py-2 font-semibold">моя недвижимость</RouterLink>
			</div>


		<SectionNavigation :navBlocks="[
			{title: 'главная', link: '/'},
			{title: 'моя недвижимость'}
		]" title="Арендованая недвижимость" :white="true"></SectionNavigation>



	<div class="py-8 list space-y-8">
		<div v-for="i in 3" class="block">
			<RouterLink to="/profile/realty/item">
				<h2 class="mb-2 font-bold text-xl"></h2>
				<div class="images flex space-x-4 max-w-full overflow-auto">
					<img v-for="i in 4" :key="i" src="@/assets/img/realty_example.png" alt="">
				</div>
				<div class="text-white price flex items-center my-2">
					<h3 class="price_full text-xl font-bold">1 150 000 руб.</h3>
					<h3 class="price_full font-medium opacity-50 ml-3">72 000 руб. / м2</h3>
				</div>
					<p class="my-3 text-white text-lg">договор заключён с 25.05.2022 до 25.08.2022</p>
					<div class="flex justify-around items-center">
						<p class="font-bold text-white">осталось 2 дня</p>
						<button class="btn__white" style="width: 250px;">продлить договор</button>
					</div>

			</RouterLink>
		</div>

	</div>





</section>

	</div>
</template>
<style scoped>

</style>
