
<template>
	<div class="form-control">
		<DescriptionVue class="fst-italic">Let's talk!</DescriptionVue>
		<ul class="me-0 p-3 mb-0">
			<li v-for="(item, i) in blogArrays" :key="item" class="mb-3">
				<slot :iteration="item" :ind="i" />
			</li>
		</ul>
	</div>
</template>

<script>
import DescriptionVue from "../common/DescriptionVue.vue";

export default {
	name: "BlogPlan",
	components: {
		DescriptionVue,
	},
	data() {
		return {
			blogArrays: [
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam asperiores ratione natus quibusdam id error blanditiis libero velit provident repellat.",
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam.",
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil totam aut dolore iste? Dolore dolor, aperiam in impedit numquam ullam consequatur? Perferendis deleniti alias illo ab, deserunt iste nisi quaerat non consectetur.",
			],
		};
	},
};
</script>

<style scoped>
ul {
	padding-left: 0;
}
</style>