<template>
	<div class="form-control mb-4 p-4">
		<p class="me-2">
			<strong>Topic: </strong><span class="success">{{ article.topic }}</span>
		</p>
		<DescriptionVue>{{ article.title }} </DescriptionVue>
		<MyButton
			size="lg"
			class="success btn-outline-light mb-4 border-none"
			color="btn-light"
			@click="toggleMoreInfo()"
			>{{ isVisible ? "Hide" : "More info" }}</MyButton
		>
		<div v-if="isVisible">
			<p class="mb-3">{{ article.summary }}</p>
			<div class="d-flex justify-content-end">
				<p class="me-3"><strong>Country: </strong> {{ article.country }}</p>
				<p class="me-3"><strong>Author:</strong> {{ article.author }}</p>
			</div>
		</div>
		<div class="me-3 text-end">
			<strong>Published date: </strong> {{ article.published_date }}
		</div>
	</div>
</template>

<script>
import DescriptionVue from "../components/DescriptionVue.vue";
import MyButton from "./MyButtons.vue";

export default {
	name: "NewsBox",
	components: {
		DescriptionVue,
		MyButton,
	},
	props: {
		article: {
			type: Object,
			default: null,
		},
	},
	data() {
		return {
			isVisible: false,
		};
	},
	methods: {
		toggleMoreInfo() {
			//кнопка выпадушка с опусанием, если isVisible - тогда выдапает обратное условие
			this.isVisible = !this.isVisible;
		},
	},
};
</script>

<style lang="scss" scoped>
.btn-outline-light {
	outline: none;
	background: transparent;
}
</style>
