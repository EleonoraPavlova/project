<template>
	<div
		class="
			p-2
			d-flex
			align-items-center
			justify-content-center
			about-mobileStep
		"
	>
		<button
			type="button"
			class="
				btn-success btn
				d-flex
				align-items-center
				justify-content-center
				rounded-circle
				border border-4
			"
			:class="color"
			@click="pageClick"
		>
			<slot />
		</button>

		<DescriptionVue>{{ title }}</DescriptionVue>
	</div>
</template>

<script>
import DescriptionVue from "./DescriptionVue";

export default {
	name: "StepPagination",
	components: {
		DescriptionVue,
	},
	props: {
		color: {
			type: String,
			default: "secondary",
		},
		title: {
			type: String,
			default: "",
		},
	},
	emits: ["click"],
	data() {
		return {};
	},
	methods: {
		pageClick() {
			this.$emit("click");
		},
	},
};
</script>

<style lang="scss">
@import "../assets/mixins.scss";
.rounded-circle {
	width: 60px;
	height: 60px;
}

.about-mobileStep {
	@include for-phone-only {
		justify-content: flex-start !important;
	}
	@include for-tablet-portrait-up {
		justify-content: flex-start !important;
	}
	@include for-tablet-landscape-up {
		flex-wrap: wrap;
	}
	@include for-desktop-up {
		flex-wrap: wrap;
	}
}
</style>