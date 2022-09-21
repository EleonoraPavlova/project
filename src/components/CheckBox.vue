<template>
	<div class="div">
		<input
			:id="id"
			type="checkbox"
			:value="id"
			class="me-3"
			@chooseAll="chooseAllSkills"
		/>
		<label
			:for="id"
			class="flex flex-row items-center font-bold cursor-pointer"
		>
			{{ skills.label }}
		</label>
	</div>
</template>

<script>
export default {
	name: "CheckBox",
	props: {
		skills: {
			type: Object,
			default: () => ({}),
		},
		id: {
			type: String,
			required: true,
		},
	},
	emits: ["chose"],
	methods: {
		chooseAllSkills() {
			this.$emit("chose");
		},
	},
};
</script>

<style>
</style>