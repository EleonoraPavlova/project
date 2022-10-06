<template>
	<div class="div">
		<input
			:id="id"
			:checked="modelValue"
			type="checkbox"
			class="me-3"
			name="checkboxName"
			@change="updateCheckbox"
		/>
		<label
			:for="id"
			class="flex flex-row items-center font-bold cursor-pointer"
		>
			{{ label }}
		</label>
	</div>
</template>

<script>
export default {
	name: "CheckBox",
	props: {
		label: {
			type: String,
			default: "",
		},
		id: {
			type: Number,
			required: true,
		},
		modelValue: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["update:modelValue"],
	methods: {
		updateCheckbox() {
			this.$emit("update:modelValue", !this.modelValue);
		},
	},
};
</script>

<style>
</style>