<template>
	<div class="container">
		<H1Component>Actual news</H1Component>
	</div>
</template>

<script>
import H1Component from "../components/H1Component.vue";
import axios from "axios";

export default {
	components: {
		H1Component,
	},
	created() {
		this.fetchNews();
	},
	methods: {
		async fetchNews() {
			try {
				const options = {
					method: "GET",
					url: "https://free-news.p.rapidapi.com/v1/search",
					params: { q: "Elon Musk", lang: "en" },
					headers: {
						"X-RapidAPI-Key":
							"fd01ee7db5msh409c3081e30276ap159a59jsn4002e35539f7",
						"X-RapidAPI-Host": "free-news.p.rapidapi.com",
					},
				};

				const data = await axios.request(options);
				console.log(data);
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
	},
};
</script>

<style>
</style>