<template>
	<DescriptionVue>Content second tab</DescriptionVue>
	<div class="m-3">
		<BlogIcon :size="iconSize" :color="iconColor" :name="iconImage" />
	</div>
	<div class="mb-3">
		<h6>Change :</h6>
	</div>
	<MyButtons
		size="sm"
		color="light"
		class="btn-outline-info"
		@click="$emit('changeColor')"
	>
		color</MyButtons
	>
	<MyButtons
		size="sm"
		color="light"
		class="btn-outline-dark"
		@click="$emit('changeSize')"
		>size</MyButtons
	>
	<MyButtons
		size="sm"
		color="light"
		class="btn-outline-warning"
		@click="$emit('changeImage')"
		>image</MyButtons
	>
</template>

<script>
import DescriptionVue from "./DescriptionVue.vue";
import BlogIcon from "./BlogIcon.vue";
import MyButtons from "./MyButtons.vue";

export default {
	name: "CardTwo",
	components: {
		DescriptionVue,
		BlogIcon,
		MyButtons,
	},
	props: {
		iconColor: {
			type: String,
			default: "",
		},
		iconSize: {
			type: String,
			default: "",
		},
		iconImage: {
			type: String,
			default: "",
		},
	},
	emits: ["changeColor", "changeSize", "changeImage"],
};
</script>

<style>
</style>