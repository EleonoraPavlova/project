<template>
	<div class="container">
		{{ isLoading }}
		<H1Component>Collect your resume</H1Component>
		<div class="cvbox mb-3">
			<div class="form-control m-2 p-4 cvbox__left">
				<CvLeftBlock @added-info="addInfo" />
			</div>
			<div class="form-control m-2 p-4 cvbox__right">
				<CvtRightBlock />
			</div>
		</div>
		<div class="d-flex justify-content-md-end cv-button">
			<MyButtons
				type="submit"
				class="btn-outline-success"
				color="light"
				size="lg"
				>Download comments</MyButtons
			>
		</div>
		<PublishCV />
	</div>
</template>

<script>
import { mapState } from "vuex";
import H1Component from "../components/common/H1Component.vue";
import CvLeftBlock from "../components/cvconstructor/CvLeftBlock.vue";
import CvtRightBlock from "../components/cvconstructor/CvtRightBlock.vue";
import MyButtons from "../components/common/MyButtons.vue";
import PublishCV from "../components/cvconstructor/PublishCV.vue";

export default {
	name: "CVconstructorView",
	components: {
		H1Component,
		CvLeftBlock,
		MyButtons,
		CvtRightBlock,
		PublishCV,
	},
	data() {
		return {
			allInfo: [],
			editingItem: null,
		};
	},
	computed: {
		// название метода collection(любое название)
		...mapState({
			isLoading: (state) => state.resumeItems.isLoadingList,
		}),
	},
	async created() {
		try {
			await this.$store.dispatch("resumeItems/getList");
		} catch (e) {
			this.$toast.info("There is nothing here yet");
		}
	},
	methods: {
		addInfo(payload) {
			this.allInfo.push(payload);
		},
		// async deleteItemResume(key) {
		// 	const [deleted] = this.allInfo.splice(key, 1);
		// 	try {
		// 		await axios.delete(
		// 			`https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/resume/${deleted.id}.json`
		// 		);

		// 		this.isSuccessDelete = true;
		// 		setTimeout(() => {
		// 			this.isSuccessDelete = false;
		// 		}, 1000);
		// 	} catch (e) {
		// 		console.log(e);
		// 	}
		// },
		// saveItem(payload) {
		// 	//более краткая запись: this.allInfo[payload.index].value = payload.value;
		// 	const item = this.allInfo[payload.index];
		// 	item.value = payload.value;
		// 	this.allInfo[1];
		// },
		// async downloadResume() {
		// 	try {
		// 		const { data } = await axios.get(
		// 			"https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/resume.json"
		// 		);

		// 		this.allInfo = Object.entries(data).map(([key, value]) => {
		// 			return {
		// 				id: key,
		// 				...value,
		// 			};
		// 		});
		// 	} catch (e) {
		// 		//когда {} совсем пустой, возвращает null => преобр в массив
		// 		this.allInfo = [];
		// 		return;
		// 	} finally {
		// 		this.loading = false;
		// 	}
		// },
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";
.container {
	@include for-phone-only {
		padding: 0 15px;
	}
	@include for-tablet-portrait-up {
		max-width: 99%;
		padding: 0 20px;
		margin-right: 0;
		margin-left: 0;
	}
	@include for-tablet-landscape-up {
		max-width: 99%;
	}
}
.cvbox {
	display: grid;
	grid-template-columns: 33% 64%;
	gap: 20px;
	@include for-phone-only {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	@include for-tablet-portrait-up {
		grid-template-columns: 43% 55%;
		gap: 10px;
	}

	&__left {
		grid-area: 1 / 1 / 2 / 2;
	}
	&__right {
		grid-area: 1 / 2 / 2 / 4;
		justify-items: center;
		align-items: center;
	}
}
.p-4 {
	@include for-phone-only {
		padding: 8px !important;
	}
	@include for-tablet-portrait-up {
		padding: 10px !important;
	}
}
.mx-4 {
	@include for-phone-only {
		margin-left: 0px !important;
	}
	@include for-tablet-portrait-up {
		margin-left: 0px !important;
	}
}
.cv-button {
	@include for-phone-only {
		justify-content: center;
		align-items: center;
	}
	@include for-tablet-portrait-up {
		justify-content: center;
		align-items: center;
	}
}
.p-3 {
	@include for-phone-only {
		padding: 5px;
	}
	@include for-tablet-portrait-up {
		padding: 7px;
	}
}
// 	@include for-desktop-up {
// 		font-size: 40px;
// 	}
// }
</style>

