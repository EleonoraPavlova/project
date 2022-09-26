<template>
	<input
		type="text"
		class="m-2"
		:class="size"
		:value="modelValue"
		:placeholder="placeholder"
		@input="updateInput"
	/>
</template>



<script>
export default {
	name: "MyInput",
	props: {
		modelValue: {
			type: String,
			default: "",
		},
		size: {
			type: String,
			default: "form-control",
		},
		placeholder: {
			type: String,
			default: "",
		},
	},
	emits: ["update:modelValue"],
	//emits - @input="updateInput" событие, которое modelValue слушает( что input  изменился, обязательно)
	// у родителя передаем v-model.trim="inputValue" ; inputValue  записывает как строку в data обязательно!
	// :value="modelValue" - очень важно, это двухсторонее связывание!
	methods: {
		updateInput(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>

<style lang="scss">
</style>