<script setup>
import ItemNavigation from '@/components/ItemNavigation.vue'
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
		<ItemNavigation title="Офис, 200м² название текст" :white="true"></ItemNavigation>



	<div class="py-8 list space-y-8">
		<div class="block">
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

		</div>
	</div>

	<section class="py-10">
		<h2 class="font-bold mb-4 text-2xl text-white">Ввоз / вывоз ТМЦ</h2>
		<input type="text" class="w-full inp inp-light mb-4 " placeholder="Выберите вариант">
		<button class="btn__white">Оформить проход</button>
	</section>

<section class="py-10">
		<h2 class="font-bold mb-4 text-2xl text-white">Оффлайн-реклама моего бизнеса</h2>
		<button class="btn__white">Заказать услугу</button>
	</section>

<section class="py-10">
		<h2 class="font-bold mb-4 text-2xl text-white">Выданные пропуски</h2>
		<button class="btn__white">Заказать пропуск</button>
	</section>


</section>

	</div>
</template>
<style scoped>

</style>
