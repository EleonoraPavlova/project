<template>
	<div class="container">
		<H1Component>Our vacancies</H1Component>
		<VacanciesBox
			v-for="(list, index) in listVacancies"
			:key="list"
			:list="list"
			:index="index"
		/>
	</div>
</template>

<script>
import H1Component from "../components/H1Component.vue";
import VacanciesBox from "../components/VacanciesBox.vue";

export default {
	name: "VacanciesView",
	components: {
		H1Component,
		VacanciesBox,
	},
	data() {
		return {
			listVacancies: [
				"Leads Researcher",
				"Affiliate manager",
				"Front-end Vue.js Developer",
				"JavaScript Developer Intern",
				"Data QA Engineer",
				"Back-End (PHP) Developer",
			],
		};
	},
};
</script>

<style>
</style>