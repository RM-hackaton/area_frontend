<script setup>
import {ref} from "vue"
import {useRouter} from "vue-router"
import AuthForm from "@/components/AuthForm.vue"

const router = useRouter()
</script>

<template>
	<div class="h-screen w-full" style="margin-top: -60px;">
		<img class="w-full h-screen absolute top-0 left-0 object-cover" src="@/assets/img/first.jpg" alt="">
		<div class="container w-full h-screen flex flex-col justify-center" style="background-color: rgba(0,0,0,.3)">
				<div @click="router.back()" class="pb-10 text-lg back flex text-white w-full justify-center items-center">
					<img class="mr-3" src="@/assets/img/icons/arrow.svg" alt="">
					<span>вернуться назад</span>
				</div>

				<AuthForm
					title="Войдите в сервис"
					description="и получите доступ к функционалу"
					submitText="войти"
					:fields="{
						name: {type: 'text', placeholder: 'введите имя'},
						password: {type: 'password', placeholder: 'введите пароль'},
					}"
				></AuthForm>

				<div class="text-lg mt-10 text-center text-white font-medium">Ещё нет профиля?
					<RouterLink class="text-primary" to="/register">Зарегистрируйтесь.</RouterLink>
				</div>

		</div>
	</div>
</template>
