<script setup>
import {ref, reactive, onBeforeMount} from "vue"
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router"

let loading = ref(true)

let menuOpened = ref(false)
let menuWhite = ref(false)

const menuItems = reactive([
	{title: "Главная", link: "/"},
	{title: "О сервисе", link: "/about"},
	{title: "Недвижимость", link: "/realty"},
	{title: "Маркетплейс", link: "/market"},
])

// Check white pages
const router = useRouter()
const route = useRoute()
router.beforeEach((to, from, next) => {
	loading.value = true
	setTimeout(() => (next()), 500)
})
router.afterEach(route => {
	loading.value = false
	menuWhite.value = ['primary-white', 'transparent'].includes(route.meta.layout)
})


</script>
<template>
	<header :class="{'bg-darky': menuOpened, 'text-white': menuOpened || menuWhite, 'h-full': menuOpened}" class="p-4 fixed top-0 left-0 w-full z-50 ">
		<div class="z-50 headerCap flex justify-between">
			<h2 class="logo uppercase text-xl"><RouterLink class="font-black" to="/">Area</RouterLink></h2>
			<div class="tools flex">
					<RouterLink @click="menuOpened = false" to="/profile" class="mr-3.5">
						<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19.1679 20.4371C18.5106 16.015 16.796 11.6573 12.7509 10.2599C14.323 9.28082 15.3664 7.53865 15.3664 5.54827C15.3664 2.48684 12.8842 0 9.81818 0C6.75215 0 4.26991 2.48224 4.26991 5.54827C4.26991 7.53406 5.31797 9.28082 6.88546 10.2599C2.84032 11.6573 1.12114 16.015 0.468405 20.4371C0.344293 21.2599 0.992434 22 1.82444 22H17.8027C18.6439 22 19.2921 21.2599 19.1679 20.4371ZM6.36143 5.54827C6.36143 3.64062 7.91512 2.08692 9.82277 2.08692C10.2778 2.08692 10.6502 2.45926 10.6502 2.91433C10.6502 3.36941 10.2778 3.74175 9.82277 3.74175C8.82528 3.74175 8.01625 4.55077 8.01625 5.54827C8.01625 6.00334 7.64392 6.37568 7.18884 6.37568C6.72917 6.37568 6.36143 6.00794 6.36143 5.54827Z" :fill="menuWhite || menuOpened ? '#ffffff' : '#222222'"/>
						</svg>
					</RouterLink>
					<div v-if="!menuOpened" @click="menuOpened = true" class="menuTrigger flex flex-col justify-between w-6 h-6">
						<span class="h-px" :class="menuWhite ? 'bg-white' : 'bg-dark'" style="margin-left: auto; width: 27px;"></span>
						<span class="h-px" :class="menuWhite ? 'bg-white' : 'bg-dark'" style="width: 19px;"></span>
						<span class="h-px" :class="menuWhite ? 'bg-white' : 'bg-dark'" style="margin-left: auto; width: 19px;"></span>
					</div>
					<img class="w-6 h-6" v-else @click="menuOpened = false" src="@/assets/img/icons/close.svg" alt="">
			</div>
		</div>
		<div :class="{hidden: !menuOpened}" class="px-9 h-full flex items-center">
			<ul class="flex flex-col w-full space-y-9">
				<li v-for="menuItem in menuItems" class="uppercase text-2xl"><RouterLink class="font-black" @click="menuOpened = false" :to="menuItem.link">{{menuItem.title}}</RouterLink></li>
			</ul>
		</div>
	</header>

	<Transition name="fade">
		<div v-if="loading" class="loader fixed top-0 left-0 bg-white w-screen h-screen z-50 flex justify-center items-center">
			<img src="@/assets/img/loader3.gif" alt="">
		</div>
	</Transition>


	<div v-if="route.meta.layout == 'white'">
		<section class="primary-area bg-white" style="padding-top: 60px">
			<div class="container px-4">
				<RouterView />
			</div>
		</section>
	</div>
	<div v-else-if="route.meta.layout == 'primary-white'">
		<section class="primary-area bg-primary" style="padding-top: 60px">
			<div class="">
				<RouterView />
			</div>
		</section>
	</div>
	<div v-else-if="route.meta.layout == 'transparent'">
			<section class="primary-area" style="padding-top: 60px;">
				<div>
					<RouterView />
				</div>
			</section>
	</div>
	<div v-else>
		<section class="primary-area bg-primary" style="padding-top: 60px">
				<div class="">
					<RouterView />
				</div>
		</section>
	</div>
	<footer class="bg-white p-4 flex justify-center"><p class="mr-4 font-bold text-lg text-dark">Made in </p><img style="width: 100px" src="@/assets/img/aqua-logo.svg" alt=""></footer>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

</style>
