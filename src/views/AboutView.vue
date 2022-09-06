<template>
	<div class="container">
		<H1Component
			:style="{
				color: 'green',
				textDecoration: 'underline',
			}"
			>{{ titleAbout }}</H1Component
		>
		<div class="form-control">
			<DescriptionVue
				>Vue is a framework and ecosystem that covers most of the common
				features needed in frontend development. But the web is extremely
				diverse - the things we build on the web may vary drastically in form
				and scale. With that in mind, Vue is designed to be flexible and
				incrementally adoptable.</DescriptionVue
			>
			<div class="d-flex justify-content-between p-4">
				<StepByStep v-for="num in 5" :key="num" color="grey">{{
					num
				}}</StepByStep>
			</div>
			<div class="p-4 d-flex justify-content-start">
				<MyButtons size="btn-sm" color="btn-outline-success">Back</MyButtons>
				<MyButtons size="btn-sm" color="btn-outline-success">Forward</MyButtons>
			</div>
		</div>
	</div>
</template>

<script>
import H1Component from "../components/H1Component.vue";
import DescriptionVue from "../components/DescriptionVue.vue";
import StepByStep from "../components/StepByStep.vue";
import MyButtons from "../components/MyButtons.vue";

export default {
	components: {
		H1Component,
		DescriptionVue,
		StepByStep,
		MyButtons,
	},
	data() {
		return {
			titleAbout: "Vue 3 study plan",
		};
	},
};
</script>

<style lang="scss">
</style>
