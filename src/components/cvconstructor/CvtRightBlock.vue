<template>
	<div class="div">
		<DescriptionVue
			:style="{
				color: allInfo.length < 1 ? 'black' : 'green',
			}"
			>My resume</DescriptionVue
		>
		<div v-for="info in allInfo" :key="info.key">
			<!-- привязала значение ключа к конкретному значению select -->
			<div
				class="
					d-flex
					justify-content-between
					align-items-center
					mb-3
					form-control
					p-3
					cv-boxItem
				"
			>
				<template v-if="editingItemId !== info.id">
					<div
						v-if="info.key === 'Full name'"
						class="
							d-flex
							justify-content-evenly
							align-items-center
							cv-itemSelect
						"
					>
						<p class="mb-0 mx-4">Full name:</p>
						<p class="mb-0 mx-4">
							<strong>{{ info.value }}</strong>
						</p>
					</div>

					<div
						v-if="info.key === 'Avatar'"
						class="d-flex align-items-center cv-itemSelect wrap-image"
					>
						<img
							:src="info.value"
							alt="avatar"
							class="border border-success rounded-circle cv-image mx-4"
						/>
					</div>

					<div
						v-if="info.key === 'Title'"
						class="
							d-flex
							justify-content-between
							align-items-center
							cv-itemSelect
						"
					>
						<p class="mb-0 mx-4">Title:</p>
						<p class="mb-0 mx-4">
							<strong>{{ info.value }}</strong>
						</p>
					</div>

					<div class="cv-itemSelect">
						<p v-if="info.key === 'About me'" class="text-sm-start ms-4">
							<strong class="me-4">About me: </strong>
							{{ info.value }}
						</p>
					</div>
				</template>
				<template v-else>
					{{ info.value }}
					<MyInput v-model="editingValue" @keypress.enter="onSaveItem()" />
				</template>
				<div
					class="
						d-flex
						align-items-center
						justify-content-end
						cv-right-width
						ms-2
					"
				>
					<MyButtons
						v-if="editingItemId !== info.id"
						color="light"
						class="btn-outline-success"
						size="sm"
						@click="
							editingItemId = info.id;
							editingValue = info.value;
						"
						>Edit</MyButtons
					>
					<MyButtons
						v-else-if="editingItemId === info.id"
						color="light"
						class="btn-outline-warning"
						size="sm"
						@click="onSaveItem"
						>Save</MyButtons
					>
					<div class="p-2 d-flex justify-content-center align-items-center">
						<CloseButton size="clxs" @click="onDeleteItem(info.id)" />
					</div>
				</div>
			</div>
		</div>
		<!-- <div v-if="allInfo.length === 0" class="alert alert-danger">
			There is nothing here yet
		</div> -->
	</div>
</template>

<script>
import DescriptionVue from "../common/DescriptionVue.vue";
import MyButtons from "../common/MyButtons.vue";
import MyInput from "../common/MyInput.vue";
import CloseButton from "../common/CloseButton.vue";
import { mapState } from "vuex";

export default {
	name: "CvtRightBlock",
	components: {
		DescriptionVue,
		MyButtons,
		MyInput,
		CloseButton,
	},

	emits: ["closeItemResume", "saved"],
	data() {
		return {
			//обозначить порядковый номер редак элемента
			editingItemId: null,
			//отредактированное значение уже!
			editingValue: null,
		};
	},
	computed: {
		...mapState({
			allInfo: (state) => state.resumeItems.list,
		}),
	},
	methods: {
		async onSaveItem() {
			try {
				// const item = this.allInfo[this.editingItemIndex];
				await this.$store.dispatch("resumeItems/editItem", {
					id: this.editingItemId,
					value: this.editingValue,
				});
				this.editingItemId = null;
				this.editingValue = null;
				this.$toast.success("Edited successfuly");
			} catch (e) {
				this.$toast.warning("Something went wrong");
			}
			//без store
			// 	this.$emit("saved", {
			// 		index: this.editingItemIndex,
			// 		value: this.editingValue,
			// 	});
			// 	this.editingItemIndex = null;
			// 	this.editingValue = null;
		},
		async onDeleteItem(id) {
			try {
				await this.$store.dispatch("resumeItems/deleteItem", id);
				this.$toast.success("Deleted successfuly");
			} catch (e) {
				this.$toast.warning("Something went wrong");
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.cv-right-width {
	@include for-phone-only {
		width: 100%;
	}
	@include for-tablet-portrait-up {
		width: 100%;
	}
}
.wrap-image {
	margin-left: 36%;
	@include for-phone-only {
		margin-left: 0;
	}
	@include for-tablet-portrait-up {
		margin-left: 0;
	}
}
.cv-image {
	width: 160px;
	height: 160px;
}
.cv-boxItem {
	@include for-phone-only {
		flex-direction: column;
	}
	@include for-tablet-portrait-up {
		flex-direction: column;
	}
}

.cv-itemSelect {
	@include for-phone-only {
		justify-content: center;
		margin-bottom: 12px !important;
	}
	@include for-tablet-portrait-up {
		margin-bottom: 13px !important;
		justify-content: center;
	}
}
.ms-4 {
	@include for-phone-only {
		margin-left: 0px !important;
	}
	@include for-tablet-portrait-up {
		margin-left: 0px !important;
	}
}
</style>