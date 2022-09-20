<template>
	<div class="div">
		<input :id="checkboxId" type="checkbox" class="me-3" />
		<label
			:for="checkboxId"
			class="flex flex-row items-center font-bold cursor-pointer"
		>
			<slot />
		</label>
	</div>
</template>

<script>
export default {
	name: "RadioButtons",
	props: {
		checkboxId: {
			type: String,
			required: true,
		},
	},
};
</script>

<style>
</style>