<template>
	<div class="position-fixed modal d-flex p-3">
		<div
			class="
				m-auto
				bg-light
				border border-success
				rounded
				p-5
				d-flex
				flex-column
			"
		>
			<slot />
			<div class="d-flex justify-content-center">
				<MyButtons
					class="btn-outline-success sent-modal"
					color="light"
					size="sm"
					@click="$emit('closed')"
					>I'm glad</MyButtons
				>
			</div>
		</div>
	</div>
</template>

<script>
import MyButtons from "./MyButtons.vue";

export default {
	name: "SentModal",
	components: {
		MyButtons,
	},
	emits: ["closed"],
};
</script>

<style>
.sent-modal {
	width: 40%;
}
</style>