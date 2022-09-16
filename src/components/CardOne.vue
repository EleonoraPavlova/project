<template>
	<DescriptionVue>Content first tab</DescriptionVue>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
	<BlogIcon name="calendar-heart" size="xlg" color="red" />
</template>

<script>
import DescriptionVue from "./DescriptionVue.vue";
import BlogIcon from "./BlogIcon.vue";

export default {
	name: "CardOne",
	components: {
		DescriptionVue,
		BlogIcon,
	},
	data() {
		return {};
	},
};
</script>

<style>
</style>