<template>
	<div class="p-2 d-flex align-items-center">
		<div class="me-3 flex-grow-1"><slot /></div>
		<div class="d-flex justify-content-center">
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
	emits: ["click"],
	data() {
		return {};
	},
};
</script>

<style>
</style>