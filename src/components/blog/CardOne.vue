<template>
	<DescriptionVue>Content first tab</DescriptionVue>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
	<BlogIcon name="calendar-heart" size="xlg" color="red" />
	<MyInput />
</template>

<script>
import DescriptionVue from "../common/DescriptionVue.vue";
import BlogIcon from "./BlogIcon.vue";
import MyInput from "../common/MyInput.vue";

export default {
	name: "CardOne",
	components: {
		DescriptionVue,
		BlogIcon,
		MyInput,
	},
	data() {
		return {};
	},
};
</script>

<style>
</style>