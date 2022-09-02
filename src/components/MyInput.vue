<template>
	<input
		type="text"
		class="m-2"
		:class="size"
		:value="modelValue"
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
	},
	emits: ["update:modelValue"],
	// :value="modelValue" - очень важно, это двухсторонее связывание!
	methods: {
		updateInput(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>

<style>
</style>