<template>
	<select class="rounded p-1" :value="modelValue" @input="onInput">
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
	emits: ["update:modelValue"],
	methods: {
		onInput(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>

