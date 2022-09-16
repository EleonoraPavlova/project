<template>
	<div class="mb-4">
		<DescriptionVue>Dynamic and asynchronous components</DescriptionVue>
		<hr class="mx-3" />
		<div class="mb-4">
			<MyButtons
				:color="active === 'first' ? 'green' : ''"
				class="btn-outline-warning focus:outline-none"
				size="sm"
				@click="active = 'first'"
				>First tab</MyButtons
			>
			<MyButtons
				:color="active === 'second' ? 'green' : ''"
				class="btn-outline-warning"
				size="sm"
				@click="active = 'second'"
				>Second tab</MyButtons
			>
		</div>
		<div class="d-flex justify-content-around">
			<div v-if="active === 'first'">
				<CardOne />
			</div>
			<div v-if="active === 'second'">
				<CardTwo
					:icon-color="iconColor"
					:icon-size="iconSize"
					:icon-image="iconImage"
					@change-size="changeSize()"
					@change-color="changeColor()"
					@change-image="changeImage()"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import DescriptionVue from "./DescriptionVue.vue";
import MyButtons from "./MyButtons.vue";
import CardOne from "./CardOne.vue";
import CardTwo from "./CardTwo.vue";

export default {
	name: "DynamicComponents",
	components: {
		DescriptionVue,
		MyButtons,
		CardOne,
		CardTwo,
	},
	data() {
		return {
			isShowCard: false,
			color: "",
			iconColor: "green",
			iconSize: "",
			iconImage: "",
			active: "first",
		};
	},
	methods: {
		changeColor() {
			//рандомно выбираем цвет иконки
			this.iconColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		},
		changeSize() {
			//ищем случайный индекс массива классов, присваиваем в iconSize
			const sizes = ["lg", "xlg", "xxlg", "xxxlg"];
			const index = Math.floor(Math.random() * sizes.length);
			this.iconSize = sizes[index];
		},
		changeImage() {
			const icons = [
				"mother-heart",
				"heart-pulse",
				"battery-heart",
				"heart-broken",
				"cat",
				"cupboard",
				"eslint",
			];
			const index = Math.floor(Math.random() * icons.length);
			this.iconImage = icons[index];
		},
	},
};
</script>

<style>
</style>