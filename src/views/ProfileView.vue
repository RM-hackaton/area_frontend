<script setup>
import SectionNavigation from '@/components/SectionNavigation.vue'
import {ref} from 'vue'

const notifications = ref([
	'1пожалуйста, подтвердите электронную почту',
	'2пожалуйста, подтвердите электронную почту',
	'3пожалуйста, подтвердите электронную почту',
	'4пожалуйста, подтвердите электронную почту',
	'5пожалуйста, подтвердите электронную почту',
])


const delNotification = i => {
	return notifications.value.splice(i, 1)
}

</script>
<template>
	<section class="bg-primary min-h-screen">
		<SectionNavigation :navBlocks="[
			{title: 'главная', link: '/'},
			{title: 'заполните профиль'}
		]" title="Заполните профиль"></SectionNavigation>


	<div class="notifications">
		<div style="background-color: #FFEDFF" class="my-4 p-4 rounded-md flex text-black items-center justify-around" v-for="(notif, notifI) in notifications">
			<p class="text-sm font-semibold text-lg">{{ notif }}</p>
			<svg @click="delNotification(notifI)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 23" fill="none">
				<path d="M11.8974 11.5L20.9679 2.4295C21.2158 2.1816 21.2158 1.78001 20.9679 1.53211C20.72 1.28422 20.3184 1.28422 20.0705 1.53211L11 10.6027L1.92947 1.53211C1.68157 1.28422 1.27998 1.28422 1.03208 1.53211C0.784187 1.78001 0.784187 2.1816 1.03208 2.4295L10.1026 11.5L1.03208 20.5706C0.784187 20.8185 0.784187 21.2201 1.03208 21.468C1.15603 21.5919 1.31799 21.6539 1.48078 21.6539C1.64356 21.6539 1.80552 21.5919 1.92947 21.468L11 12.3974L20.0705 21.468C20.1945 21.5919 20.3565 21.6539 20.5192 21.6539C20.682 21.6539 20.844 21.5919 20.9679 21.468C21.2158 21.2201 21.2158 20.8185 20.9679 20.5706L11.8974 11.5Z" fill="#222222"/>
			</svg>
		</div>
	</div>

	<section class="my-6">
		<h2 class="text-2xl font-extrabold text-white">Вы занимаетесь этими видами деятельности?</h2>
		<div class="radio mt-4">
			<div class="flex items-center w-1/2">
				<div class="radio rounded-full bg-white w-6 h-6"></div>
				<div class="pl-3 text-white text-xl font-semibold">не занимаюсь</div>
			</div>
<div class="flex items-center w-1/2">
				<div class="radio rounded-full bg-white w-6 h-6"></div>
				<div class="pl-3 text-white text-xl font-semibold">медицина</div>
			</div>
<div class="flex items-center w-1/2">
				<div class="radio rounded-full bg-white w-6 h-6"></div>
				<div class="pl-3 text-white text-xl font-semibold">вет.клиника</div>
			</div>
<div class="flex items-center w-1/2">
				<div class="radio rounded-full bg-white w-6 h-6"></div>
				<div class="pl-3 text-white text-xl font-semibold">общепит</div>
			</div>
		</div>
	</section>

<section class="my-6">
		<h2 class="text-2xl font-extrabold text-white">Заполните реквизиты для оформления сделок</h2>
		<input class="my-3 inp inp-light w-full" placeholder="введите имя" type="text">
		<input class="my-3 inp inp-light w-full" placeholder="введите имя" type="text">
		<input class="my-3 inp inp-light w-full" placeholder="введите имя" type="text">
		<input class="my-3 inp inp-light w-full" placeholder="введите имя" type="text">
	</section>

	</section>
</template>
<style scoped>

</style>
