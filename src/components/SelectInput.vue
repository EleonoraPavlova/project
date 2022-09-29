<template>
	<select
		class="rounded p-1"
		:value="modelValue"
		@chooseA="chooseAge"
		@chooseC="chooseCity"
		@chooseT="chooseType"
	>
		<slot />
	</select>
</template>

<script>
export default {
	name: "SelectInput",
	props: {
		modelValue: {
			//поле, по которому будет идти сортировка, название или title
			type: String,
			default: "",
		},
	},
	emits: [
		"update:modelValue",
		"update:modelValueCity",
		"update:modelValueType",
	],
	methods: {
		chooseAge(event) {
			this.$emit("update:modelValue", event.target.value);
		},
		chooseCity(event) {
			this.$emit("update:modelValueCity", event.target.value);
		},
		chooseType(event) {
			this.$emit("update:modelValueType", event.target.value);
		},
	},
};
</script>

<style lang="sass" scoped></style>
