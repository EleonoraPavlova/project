<template>
	<div class="">
		<BgBanner class="position-relative" />
		<H1Component class="position-absolute galleryH1 text-light text-center"
			>Gallery our work</H1Component
		>
		<SloganGallery class="position-absolute text-end gallerySlogan" />
	</div>
</template>

<script>
import H1Component from "../components/H1Component.vue";
import BgBanner from "../components/BgBanner.vue";
import SloganGallery from "../components/SloganGallery.vue";

export default {
	name: "GalleryView",
	components: {
		H1Component,
		BgBanner,
		SloganGallery,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss">
.galleryH1 {
	top: 0px;
	font-weight: 900;
	margin-left: 40%;
}
.gallerySlogan {
	top: 22%;
	margin-left: 60%;
}
</style>