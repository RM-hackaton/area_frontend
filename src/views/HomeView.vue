<script setup>
import {ref} from "vue"

const sectionOpened = ref(false)

</script>

<template>
	<div style="margin-top: -60px;">
		<section @dragover="sectionOpened = true" class="h-screen bg-primary first relative">
				{{ sectionOpened ? 'Section opened' : '' }}
				<img src="@/assets/img/first.jpg" class="object-cover w-1/2 absolute h-full" alt="">
				<div style="background-color: rgba(0,0,0,.4)" class="z-2 w-1/2 absolute h-full">
				</div>
				<div class="text-center px-4 h-full space-y-16">
					<h1 class="pt-36 m-auto text-center leading-[50px] font-black text-4xl text-white uppercase">Арендуйте помещения онлайн</h1>
					<RouterLink to="/register" class="btn">получить доступ</RouterLink>
					<div to="#" class="block text-white font-semibold text-center text-lg" href="#">узнать больше</div>
				</div>
			</section>
	</div>
</template>
