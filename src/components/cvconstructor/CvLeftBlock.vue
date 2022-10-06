<template>
	<DescriptionVue>Fill in the fields:</DescriptionVue>
	<div class="d-flex justify-content-start">
		<SelectInput v-model="modelValueType" class="my-3 width">
			<option
				v-for="blockType in blockTypes"
				:key="blockType"
				:value="blockType"
				class="pl-2"
			>
				{{ blockType }}
			</option>
		</SelectInput>
	</div>
	<div class="position-relativ mb-4 cv-left">
		<TextArea
			v-model.trim="resumeText"
			:placeholder="`Enter value.....`"
			size="form-control-sm"
			@keyup.enter="addInfo()"
		/>
		<div
			v-show="resumeText.length < 3 && resumeText.length !== 0"
			class="text-start position-absolute bottom-0 start-0"
		>
			<p class="dangerous fw-lighter m-0">Enter value more please</p>
		</div>
	</div>
	<div v-if="isSuccess" class="alert alert-success">
		The data successfully sent
	</div>
	<MyButtons
		class="btn-success d-flex justify-content-start"
		size="md"
		:disabled="resumeText.length < 3"
		@click="addInfo()"
		>Add</MyButtons
	>
</template>

<script>
import MyButtons from "../common/MyButtons.vue";
import TextArea from "../common/TextArea.vue";
import SelectInput from "../common/SelectInput.vue";
import DescriptionVue from "../common/DescriptionVue.vue";

export default {
	name: "CvLeftBlock",
	components: {
		MyButtons,
		TextArea,
		SelectInput,
		DescriptionVue,
	},
	emits: ["addedInfo"],
	data() {
		return {
			modelValueType: "Title",
			blockTypes: ["Title", "Full name", "Avatar", "About me"],
			resumeText: "",
			isSuccess: false,
		};
	},
	methods: {
		async addInfo() {
			//без store
			//тут я связала 2 значения: select и  TextArea как объект ключ и значение

			// if (this.modelValueType && this.resumeText !== "") {
			// 	this.$emit("addedInfo", {
			// 		key: this.modelValueType,
			// 		value: this.resumeText,
			// 	});
			// try {
			// 	axios
			// 		.post(
			// 			"https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/resume.json",
			// 			{
			// 				key: this.modelValueType,
			// 				value: this.resumeText,
			// 			}
			// 			//key value должно совпадать при запросе получения этой информации с сервера и при выводе в html
			// 		)
			// 		.then((response) => {
			// 			this.isSuccess = true;
			// 			const that = this;
			// 			setTimeout(function () {
			// 				that.isSuccess = false;
			// 			}, 1000);
			// 			console.log(response);
			// 		});
			// } catch (e) {
			// 	console.log(e);
			// }
			try {
				await this.$store.dispatch("resumeItems/createItem", {
					key: this.modelValueType,
					value: this.resumeText,
				});
				this.isSuccess = true;
				const that = this;
				setTimeout(function () {
					that.isSuccess = false;
				}, 1000);
			} catch (e) {
				console.log(e);
			}
			this.modelValueType = "Title"; // по умолчанию остается Title
			this.resumeText = "";
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.width {
	width: 100%;
}
.cv-left {
	@include for-phone-only {
		margin-bottom: 0px !important;
	}
	@include for-tablet-portrait-up {
		margin-bottom: 0px !important;
	}
}
</style>