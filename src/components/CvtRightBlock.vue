<template>
	<div class="div">
		<DescriptionVue
			:style="{
				color: allInfo.length < 1 ? 'black' : 'green',
			}"
			>My resume</DescriptionVue
		>
		<div v-for="(info, index) in allInfo" :key="info.key">
			<!-- привязала значение ключа к конкретному значению select -->
			<div
				class="
					d-flex
					justify-content-between
					align-items-center
					mb-3
					form-control
					p-3
				"
			>
				<template v-if="editingItemIndex !== index">
					<div
						v-if="info.key === 'Full name'"
						class="d-flex justify-content-evenly align-items-center"
					>
						<p class="mb-0 mx-4">Full name:</p>
						<p class="mb-0 mx-4">
							<strong>{{ info.value }}</strong>
						</p>
					</div>
					<div
						v-if="info.key === 'Avatar'"
						class="d-flex justify-content-center align-items-center"
					>
						<p class="mb-0 mx-4">Avatar:</p>
						<img
							:src="info.value"
							alt="avatar"
							class="border border-success rounded-circle cv-image mx-4"
						/>
					</div>
					<div
						v-if="info.key === 'Title'"
						class="d-flex justify-content-between align-items-center"
					>
						<p class="mb-0 mx-4">Title:</p>
						<p class="mb-0 mx-4">
							<strong>{{ info.value }}</strong>
						</p>
					</div>

					<div class="">
						<p v-if="info.key === 'About me'">
							<strong class="mx-4">About me: </strong>
							{{ info.value }}
						</p>
					</div>
				</template>
				<template v-else>
					{{ info.value }}
					<MyInput v-model="editingValue" @keypress.enter="onSaveItem()" />
				</template>
				<div class="d-flex justify-content-around align-items-center">
					<MyButtons
						v-if="editingItemIndex !== index"
						color="light"
						class="btn-outline-success"
						size="sm"
						@click="
							editingItemIndex = index;
							editingValue = info.value;
						"
						>Edit</MyButtons
					>
					<MyButtons
						v-else-if="editingItemIndex === index"
						color="light"
						class="btn-outline-warning"
						size="sm"
						@click="onSaveItem"
						>Save</MyButtons
					>
					<div class="p-4">
						<CloseButton size="clxs" @click="$emit('closeItemResume', index)" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DescriptionVue from "../components/DescriptionVue.vue";
import MyButtons from "../components/MyButtons.vue";
import MyInput from "../components/MyInput.vue";
import CloseButton from "../components/CloseButton.vue";

export default {
	name: "CvtRightBlock",
	components: {
		DescriptionVue,
		MyButtons,
		MyInput,
		CloseButton,
	},
	props: {
		allInfo: {
			type: Array,
			default: () => [],
		},
	},
	emits: ["closeItemResume", "saved"],
	data() {
		return {
			//обозначить порядковый номер редак элемента
			editingItemIndex: null,
			//отредактированное значение уже!
			editingValue: null,
		};
	},

	methods: {
		onSaveItem() {
			this.$emit("saved", {
				index: this.editingItemIndex,
				value: this.editingValue,
			});
			this.editingItemIndex = null;
			this.editingValue = null;
		},
	},
};
</script>

<style lang="scss" scoped>
.cv-image {
	width: 160px;
	height: 160px;
}
</style>