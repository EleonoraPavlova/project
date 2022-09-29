<template>
	<div class="p-2 d-flex align-items-center">
		<div class="me-3 flex-grow-1"><slot /></div>
		<div class="d-flex justify-content-center">
			<MyButtons
				v-if="!isEditing"
				color="light"
				class="btn-outline-success"
				size="sm"
				@click="$emit('edit')"
				>Edit</MyButtons
			>
			<MyButtons
				v-else
				color="light"
				class="btn-outline-success"
				size="sm"
				@click="$emit('saved')"
				>Save</MyButtons
			>
		</div>
	</div>
</template>

<script>
import MyButtons from "./MyButtons.vue";
export default {
	name: "ResumeInfo",
	components: {
		MyButtons,
	},
	props: {
		isEditing: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["edit", "saved"],
};
</script>

<style>
</style>