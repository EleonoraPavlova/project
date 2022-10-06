<template>
	<div>
		<input
			id="yes"
			v-model="picked"
			type="radio"
			value="Yes"
			name="trip"
			class="me-3"
		/>
		<label for="yes">Yes</label>
	</div>
	<div class="div">
		<input
			id="no"
			v-model="picked"
			type="radio"
			name="trip"
			value="No"
			class="me-3"
		/>
		<label for="no">No</label>
	</div>
</template>

<script>
export default {
	name: "RadioButtons",
	data() {
		return {
			picked: "One",
		};
	},
};
</script>

<style>
</style>
