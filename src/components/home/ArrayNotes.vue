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
			<MyButtons
				color="light"
				class="btn-outline-danger"
				size="sm"
				@click="$emit('click')"
				>Delete</MyButtons
			>
		</div>
	</div>
</template>

<script>
import MyButtons from "../common/MyButtons.vue";
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