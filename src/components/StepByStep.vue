<template>
	<div class="p-2">
		<div
			class="
				d-flex
				align-items-center
				justify-content-center
				rounded-circle
				border border-4
			"
			:class="color"
		>
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: "StepByStep",
	props: {
		color: {
			type: String,
			default: "secondary",
		},
	},
};
</script>

<style lang="scss">
.rounded-circle {
	width: 60px;
	height: 60px;
}
</style>