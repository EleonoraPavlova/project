<template>
	<button
		type="button"
		class="btn-close"
		aria-label="Close"
		@click="$emit('click')"
	/>
</template>

<script>
export default {
	name: "CloseButton",
	emits: ["click"],
};
</script>

<style>
</style>