<template>
	<div class="container">
		<H1Component>Actual news</H1Component>

		<NewsBox
			v-for="item in articles"
			:key="item"
			:article="item"
			:is-read="mark.includes(item._id)"
			@reads="markRead(item._id)"
			>{{ item }}</NewsBox
		>
		<div class="d-flex justify-content-between align-items-center mt-5 p-2">
			<div><strong>Total read:</strong> {{ mark.length }} news</div>
			<div class="d-flex">
				<PaginationPages v-if="startPage != 1" @click="setPage(1)"
					>First</PaginationPages
				>
				<PaginationPages v-if="startPage > 1" @click="setPage(startPage - 1)"
					>Back</PaginationPages
				>
				<LabelPages>{{ startPage }} of {{ totalPages }}</LabelPages>
				<PaginationPages
					v-if="startPage != totalPages"
					@click="setPage(startPage + 1)"
					>Next</PaginationPages
				>
				<PaginationPages
					v-if="startPage != totalPages"
					@click="setPage(totalPages)"
					>Last</PaginationPages
				>
			</div>
		</div>
	</div>
</template>

<script>
import H1Component from "../components/common/H1Component.vue";
import axios from "axios";
import NewsBox from "../components/news/NewsBox.vue";
import PaginationPages from "../components/common/PaginationPages.vue";
import LabelPages from "../components/common/LabelPages.vue";

export default {
	components: {
		H1Component,
		NewsBox,
		PaginationPages,
		LabelPages,
	},

	data() {
		return {
			articles: [],
			startPage: 1,
			limit: 10,
			totalPages: 0,
			mark: [],
		};
	},
	async created() {
		await this.fetchNews();
	},
	methods: {
		async fetchNews() {
			try {
				const options = {
					method: "GET",
					url: "https://free-news.p.rapidapi.com/v1/search",
					params: {
						q: "Elon Musk",
						lang: "en",
						page: this.startPage,
						page_size: this.limit,
						totalPages: this.total_pages,
					},
					headers: {
						"X-RapidAPI-Key":
							"fd01ee7db5msh409c3081e30276ap159a59jsn4002e35539f7",
						"X-RapidAPI-Host": "free-news.p.rapidapi.com",
					},
				};
				const response = await axios.request(options);
				this.articles = response.data.articles;
				this.totalPages = response.data.total_pages;
			} catch (e) {
				this.open();
			}
		},
		open() {
			this.$toast.open({
				//ToastPlugin код
				message: "Something went wrong",
				type: "error",
				duration: 5000,
				dismissible: true,
				position: "top-right", //тут меняем положение окошка с ошибкой на странице по желанию
			});
		},
		setPage(page) {
			// автомат подрузка данных API при клике на кнопки
			this.startPage = page;
			this.fetchNews();
		},
		markRead(id) {
			// /*eslint-disable*/
			// debugger;
			if (!this.mark.includes(id)) {
				this.mark.push(id);
			} else {
				const index = this.mark.findIndex((item) => item === id);
				this.mark.splice(index, 1);
			}
		},
	},
};
</script>

<style>
</style>