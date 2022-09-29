<template>
	<div class="form-outline">
		<textarea
			id="textarea"
			class="form-control"
			rows="3"
			:placeholder="placeholder"
			:value="modelValue"
			@input="updateInput"
		/>
		<label class="form-label" for="textarea" />
	</div>
</template>

<script>
export default {
	name: "TextArea",
	props: {
		placeholder: {
			type: String,
			default: "",
		},
		modelValue: {
			type: String,
			default: "",
		},
	},
	emits: ["update:modelValue"],
	methods: {
		updateInput(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>

<style>
</style>