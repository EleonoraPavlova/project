<template>
	<i :class="[size, 'mdi', `mdi-${name}`]" :style="{ color: color }" />
</template>

<script>
export default {
	name: "BlogIcon",
	props: {
		name: {
			type: String,
			default: "calendar-heart",
		},
		color: {
			type: String,
			default: "grey",
		},
		size: {
			type: String,
			default: "lg",
		},
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss">
</style>