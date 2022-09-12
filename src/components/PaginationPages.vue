<template>
	<div>
		<MyButtons
			color="transperent"
			class="btn-outline-info"
			size="less"
			@click="pageClick"
			><slot
		/></MyButtons>
	</div>
</template>

<script>
import MyButtons from "./MyButtons.vue";

export default {
	name: "PaginationPages",
	components: {
		MyButtons,
	},
	emits: ["click"],
	methods: {
		pageClick() {
			this.$emit("click");
		},
	},
};
</script>

<style lang="scss">
</style>