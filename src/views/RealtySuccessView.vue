<script setup>
import SectionNavigation from '@/components/SectionNavigation.vue'
import {ref} from 'vue'

const delNotification = i => {
	return notifications.value.splice(i, 1)
}

</script>
<template>

	<section class="px-2 w-screen h-screen flex flex-col justify-center items-center">
		<h1 class="text-white text-4xl font-bold">Спасибо! Ваша заявка отправлена на одобрение.</h1>

		<div class="w-full space-y-4 mt-4">
			<RouterLink class="w-full btn__white" to="/profile/realty">Моя недвижимость</RouterLink>
			<RouterLink class="w-full btn__white text-white" style="background: rgba(255,255,255,.4)" to="/realty">Смотреть ещё</RouterLink>
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
