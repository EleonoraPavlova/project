<template>
	<div class="form-control mb-4 p-4">
		<div class="d-flex justify-content-between">
			<MyButton
				size="sm"
				color="light"
				class="btn-outline-success"
				@click="markRead"
				>{{ isRead ? "✓" : "read!" }}
			</MyButton>
			<p class="me-2">
				<strong>Topic: </strong><span class="success">{{ article.topic }}</span>
			</p>
			<div class="div" />
		</div>

		<DescriptionVue>{{ article.title }} </DescriptionVue>
		<MyButton
			size="lg"
			class="success btn-outline-light mb-4 border-none"
			color="btn-light"
			@click="toggleMoreInfo()"
			>{{ isVisible ? "Hide" : "More info" }}</MyButton
		>
		<div v-if="isVisible">
			<p class="mb-4">{{ article.summary }}</p>
			<div class="d-flex justify-content-end">
				<p class="me-3 mb-1">
					<strong>Country: </strong> {{ article.country }}
				</p>
				<p class="me-3 mb-1"><strong>Author:</strong> {{ article.author }}</p>
			</div>
		</div>
		<div class="d-flex justify-content-between">
			<div>
				Open: {{ countOpenNews }} {{ countOpenNews == 1 ? "time" : "times" }}
			</div>
			<p class="me-3">
				<strong>Published date: </strong> {{ article.published_date }}
			</p>
		</div>
	</div>
</template>

<script>
import DescriptionVue from "../components/DescriptionVue.vue";
import MyButton from "./common/MyButtons.vue";

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
		isRead: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["reads"],
	data() {
		return {
			isVisible: false,
			countOpenNews: 0,
		};
	},
	methods: {
		toggleMoreInfo() {
			//кнопка выпадушка с опусанием, если isVisible - тогда выдапает обратное условие
			this.isVisible = !this.isVisible;
			if (this.isVisible) {
				this.countOpenNews++;
			}
		},
		markRead() {
			this.$emit("reads");
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
