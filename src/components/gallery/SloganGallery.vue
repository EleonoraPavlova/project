<template>
	<h3 class="slogan-font text-light">We do it with love!</h3>
</template>

<script>
export default {
	name: "SloganGallery",
};
</script>

<style lang="scss">
@import "../../assets/mixins.scss";
.slogan-font {
	font-family: "Dancing Script";
	font-weight: bold;
	font-size: 60px;
	filter: drop-shadow(0 0 5px green);
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
		font-size: 45px;
		margin-top: 5px;
	}
	@include for-desktop-up {
		font-size: 50px;
	}
}
</style>