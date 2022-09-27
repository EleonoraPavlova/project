<template>
	<div
		v-if="alert"
		:class="alert.class"
		class="
			mistake-width
			p-2
			rounded-2
			d-flex
			justify-content-evenly
			align-items-center
		"
	>
		<h6 class="m-2">{{ alert.title }}</h6>
		<p class="m-2">{{ alert.text }}</p>
		<CloseButton @click="$emit('closeAlert')" />
	</div>
</template>

<script>
import CloseButton from "../components/CloseButton.vue";

export default {
	name: "MistakeMessage",
	components: {
		CloseButton,
	},
	props: {
		alert: {
			type: Object,
			default: null,
		},
	},
	emits: ["closeAlert"],
};
</script>

<style lang="scss">
@import "../assets/mixins.scss";
.mistake-width {
	width: 40%;
	@include for-phone-only {
		width: 90%;
	}
	@include for-tablet-portrait-up {
		width: 60%;
	}
	@include for-tablet-landscape-up {
		width: 50%;
	}
	@include for-desktop-up {
		width: 45%;
	}
}
</style>