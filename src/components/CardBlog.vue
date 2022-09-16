<template>
	<div class="m-4">
		<slot name="header" />
		<slot>No text</slot>
		<div v-if="$slots.footer">
			<slot name="footer" />
		</div>
	</div>
</template>

<script>
export default {
	name: "CardBlog",
};
</script>

<style>
</style>