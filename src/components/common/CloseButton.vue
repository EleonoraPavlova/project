<template>
	<button
		type="button"
		class="btn-close"
		:class="[color, size]"
		aria-label="Close"
		@click="$emit('click')"
	/>
</template>

<script>
export default {
	name: "CloseButton",
	props: {
		color: {
			type: String,
			default: "primary",
		},
		size: {
			type: String,
			default: "clxs",
		},
	},
	emits: ["click"],
};
</script>

<style lang="scss">
.clxs {
	width: 2px;
	height: 2px;
}
.btn-close {
	&:focus {
		box-shadow: none;
	}
}
</style>