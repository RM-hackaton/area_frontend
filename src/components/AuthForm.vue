<script setup>

const props = defineProps({
	fields: Object,
	title: String,
	description: String,
	submitText: String
})

console.log(props)

</script>

<template>
	<h1 class="mb-2 title text-3xl font-extrabold text-white">{{title}}</h1>
	<h1 class="mb-6 title text-lg text-white">{{description}}</h1>

	<form action="" class="space-y-4">
		<!--<input class="inp w-full" placeholder="введите имя" type="text">
		<input class="inp w-full" placeholder="введите пароль" type="password">
		<input class="inp w-full" placeholder="повторите пароль" type="password">-->
		<input v-for="(field, k) in props.fields" class="inp w-full" :placeholder="field.placeholder" :type="field.type">
		<RouterLink class="btn__primary" to="/profile">{{submitText}}</RouterLink>
	</form>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
