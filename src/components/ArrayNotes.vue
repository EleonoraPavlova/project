<template>
	<div class="p-2 d-flex align-items-center">
		<div class="me-3 flex-grow-1"><slot /></div>
		<div class="d-flex justify-content-center">
			<MyButtons
				v-if="!isEditing"
				color="btn-outline-success"
				size="btn-sm"
				@click="$emit('edit')"
				>Edit</MyButtons
			>
			<MyButtons
				v-else
				color="btn-outline-success"
				size="btn-sm"
				@click="$emit('saved')"
				>Save</MyButtons
			>
			<MyButtons
				color="btn-outline-danger"
				size="btn-sm"
				@click="$emit('click')"
				>Delete</MyButtons
			>
		</div>
	</div>
</template>

<script>
import MyButtons from "./MyButtons.vue";
export default {
	name: "ArrayNotes",
	components: {
		MyButtons,
	},
	props: {
		isEditing: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["click", "edit", "saved"],
	data() {
		return {};
	},
};
</script>

<style>
</style>