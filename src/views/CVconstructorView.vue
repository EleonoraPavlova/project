<template>
	<div class="container">
		<H1Component>Collect your resume</H1Component>
		<div class="cvbox mb-3">
			<div class="form-control m-2 p-4 cvbox__left">
				<CvLeftBlock @added-info="addInfo" />
			</div>
			<div class="form-control m-2 p-4 cvbox__right">
				<CvtRightBlock
					:all-info="allInfo"
					@close-item-resume="deleteItemResume"
					@saved="saveItem"
				/>
				<div v-if="isSuccessDelete" class="alert alert-success">
					The item was successfully removed
				</div>
				<div v-if="!loading && allInfo.length === 0" class="alert alert-danger">
					There is nothing here yet
				</div>
			</div>
		</div>
		<MyButtons
			type="submit"
			class="btn-outline-success d-flex justify-content-start"
			color="light"
			size="lg"
			>Send resume</MyButtons
		>
	</div>
</template>

<script>
import H1Component from "../components/H1Component.vue";
import CvLeftBlock from "../components/CvLeftBlock.vue";
import CvtRightBlock from "../components/CvtRightBlock.vue";
import MyButtons from "../components/MyButtons.vue";
import axios from "axios";

export default {
	name: "CVconstructorView",
	components: {
		H1Component,
		CvLeftBlock,
		MyButtons,
		CvtRightBlock,
	},
	data() {
		return {
			allInfo: [],
			editingItem: null,
			isSuccessDelete: false,
			loading: true,
		};
	},

	created() {
		this.downloadResume();
	},

	methods: {
		addInfo(payload) {
			this.allInfo.push(payload);
		},
		async deleteItemResume(key) {
			const [deleted] = this.allInfo.splice(key, 1);
			try {
				await axios.delete(
					`https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/resume/${deleted.id}.json`
				);

				this.isSuccessDelete = true;
				setTimeout(() => {
					this.isSuccessDelete = false;
				}, 1000);
			} catch (e) {
				console.log(e);
			}
		},
		saveItem(payload) {
			//более краткая запись: this.allInfo[payload.index].value = payload.value;
			const item = this.allInfo[payload.index];
			item.value = payload.value;
			this.allInfo[1];
		},
		async downloadResume() {
			try {
				const { data } = await axios.get(
					"https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/resume.json"
				);

				this.allInfo = Object.entries(data).map(([key, value]) => {
					return {
						id: key,
						...value,
					};
				});
			} catch (e) {
				//когда {} совсем пустой, возвращает null => преобр в массив
				this.allInfo = [];
				return;
			} finally {
				this.loading = false;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.cvbox {
	display: grid;
	grid-template-columns: 33% 64%;
	gap: 20px;

	&__left {
		grid-area: 1 / 1 / 2 / 2;
	}
	&__right {
		grid-area: 1 / 2 / 2 / 4;
		justify-items: center;
		align-items: center;
	}
}
</style>

