<script setup>
import {ref} from "vue"
import {useRouter} from "vue-router"
import AuthForm from "@/components/AuthForm.vue"

const router = useRouter()
</script>

<template>
	<div class="h-screen w-full" style="margin-top: -60px;">
		<img class="w-full h-full absolute top-0 left-0 object-cover" src="@/assets/img/first.jpg" alt="">
		<div class="container w-full h-screen flex flex-col justify-center" style="background-color: rgba(0,0,0,.3)">
				<div @click="router.back()" class="pb-10 text-lg back flex text-white w-full justify-center items-center">
					<img class="mr-3 w-2" src="@/assets/img/icons/arrow.svg" alt="">
					<span>вернуться назад</span>
				</div>

				<AuthForm
					title="Зарегистрируйтесь"
					description="и получите доступ к функционалу платформы"
					submitText="зарегистрироваться"
					:fields="{
						name: {type: 'text', placeholder: 'введите имя'},
						password: {type: 'password', placeholder: 'введите пароль'},
						repeatPassword: {type: 'password', placeholder: 'повторите пароль'},
					}"
				></AuthForm>

				<div class="text-lg mt-10 text-center text-white font-medium">Уже есть профиль?
					<RouterLink class="text-primary" to="/login">Войдите.</RouterLink>
				</div>

		</div>
	</div>
</template>
