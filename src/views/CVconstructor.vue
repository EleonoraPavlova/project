<template>
	<div class="container">
		<H1Component>Collect your resume</H1Component>
		<div class="cvbox mb-3">
			<div class="form-control m-2 cvbox__left">
				<div class="d-flex justify-content-start">
					<SelectInput v-model="modelValueType" class="my-4 width">
						<option disabled value="">Select block type</option>
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
				<TextArea
					v-model.trim="resumeText"
					:placeholder="`Enter value.....`"
					size="form-control-sm"
					@keyup.enter="addInfo()"
				/>
				<MyButtons
					class="btn-outline-success d-flex justify-content-start"
					color="light"
					size="md"
					@click="addInfo()"
					>Add</MyButtons
				>
			</div>
			<div class="form-control m-2 cvbox__right">
				<DescriptionVue>Resume {{}}</DescriptionVue>
				<ResumeInfo v-for="(info, index) in allInfo" :key="index"
					>{{ info }}
				</ResumeInfo>
			</div>
		</div>
		<MyButtons
			class="btn-outline-success d-flex justify-content-start"
			color="light"
			size="lg"
			@click="addInfo()"
			>Download comments</MyButtons
		>
	</div>
</template>

<script>
import H1Component from "../components/H1Component.vue";
import SelectInput from "../components/SelectInput.vue";
import TextArea from "../components/TextArea.vue";
import MyButtons from "../components/MyButtons.vue";
import DescriptionVue from "../components/DescriptionVue.vue";
import ResumeInfo from "../components/ResumeInfo.vue";

export default {
	name: "CVconstructor",
	components: {
		H1Component,
		SelectInput,
		TextArea,
		MyButtons,
		DescriptionVue,
		ResumeInfo,
	},
	data() {
		return {
			modelValueType: "",
			blockTypes: ["Full name", "Title", "Avatar", "Text"],
			allInfo: [],
			resumeText: "",
		};
	},
	methods: {
		addInfo() {
			if (!this.modelValueType) {
				this.allInfo.push(this.modelValueType);
				this.modelValueType = "";
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.cvbox {
	display: grid;
	grid-template-columns: 30% 70%;
	gap: 20px;

	&__left {
		grid-area: 1 / 1 / 2 / 2;
	}
	&__right {
		grid-area: 1 / 2 / 2 / 4;
		justify-items: center;
		align-items: center;
	}
	.width {
		width: 100%;
	}
}
</style>