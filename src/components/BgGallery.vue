<template>
	<div :class="[className]">
		<H1Component class="galleryH1 text-light text-center pt-5"
			>Gallery our work</H1Component
		>
		<div class="gallerySlogan">
			<SloganGallery />
		</div>
	</div>
</template>

<script>
import SloganGallery from "./SloganGallery.vue";
import H1Component from "./H1Component.vue";

export default {
	name: "BgGallery",
	components: {
		SloganGallery,
		H1Component,
	},
	props: {
		className: {
			type: String,
			default: "bg-gallery",
		},
	},
};
</script>

<style lang="scss">
@import "../assets/mixins.scss";
.galleryH1 {
	font-weight: 900;
	margin: 1%;
	font-family: "Dancing Script";
	font-size: 50px;
	filter: drop-shadow(0 0 4px red);
	@include for-phone-only {
		font-weight: 400;
		font-size: 16px;
		margin-top: 8px;
	}
	@include for-tablet-portrait-up {
		font-weight: 400;
		font-size: 20px;
		margin-top: 10px;
	}
	@include for-tablet-landscape-up {
		font-weight: 400;
		font-size: 35px;
		margin-top: 5px;
	}
	@include for-desktop-up {
		font-size: 40px;
	}
}
</style>
