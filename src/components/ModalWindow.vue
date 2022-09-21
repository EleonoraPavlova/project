<template>
	<div v-if="show" class="position-fixed modal d-flex p-3" @click="hideModal">
		<div
			class="
				m-auto
				bg-light
				border border-success
				rounded
				modal__content
				p-4
				d-flex
				flex-column
			"
			@click.stop
		>
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: "ModalWindow",

	props: {
		show: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["show"],
	methods: {
		hideModal() {
			this.$emit("show", false);
		},
	},
};
</script>

<style lang="scss" scoped>
.modal {
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	min-height: 70%;
	min-width: 30%;
}
</style>