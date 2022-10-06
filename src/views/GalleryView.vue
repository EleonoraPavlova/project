<template>
	<div class="">
		<BgGallery />
		<div class="bg-gallery">
			<MyButtons class="btn-success m-4" size="sm" @click="getImagesMore()"
				>Change images</MyButtons
			>
			<div class="d-flex justify-content-center mx-4 wrapper-gallery">
				<div v-for="value in images" :key="value.image" class="inner-gallery">
					<div
						:style="{ backgroundImage: `url(${value.image})` }"
						alt="img"
						class="gallery-size rounded-3"
					/>
				</div>
			</div>
		</div>
		<BgGallery class="bg-gallery2" />
		<BgGallery class="bg-gallery3" />
	</div>
</template>

<script>
import axios from "axios";
import MyButtons from "../components/common/MyButtons.vue";
import BgGallery from "../components/gallery/BgGallery.vue";

export default {
	name: "GalleryView",
	components: {
		MyButtons,
		BgGallery,
	},
	data() {
		return {
			images: [],
			errors: [],
		};
	},
	created() {
		this.getImages();
		this.getImages();
	},
	methods: {
		getImages() {
			axios
				.get("https://randomfox.ca/floof/")

				.then((response) => {
					this.images.push(response.data);
					// /*eslint-disable*/
					// debugger;
				})
				.catch((e) => {
					this.errors.push(e);
				});
		},
		getImagesMore() {
			if (this.images.length === 2) {
				this.images.splice(0, 2);
				this.getImages();
				this.getImages();
			}
		},
	},
};
</script>

<style lang="scss">
@import "../assets/mixins.scss";
.wrapper-gallery {
	@include for-phone-only {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	@include for-tablet-portrait-up {
		justify-content: space-evenly;
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
.bg-gallery {
	background-image: url("../assets/image/bgGallery.jpg");
	background-repeat: no-repeat;
	background-position: 0 0;
	background-attachment: fixed;
	background-size: cover;
	height: 100%;
	@include for-phone-only {
		background-position: center;
	}
	@include for-tablet-portrait-up {
		background-position: center;
	}
}
.bg-gallery2 {
	background-image: url("../assets/image/bgGalleryPencil.jpg");
	background-repeat: no-repeat;
	background-position: 0 0;
	background-attachment: fixed;
	background-size: cover;
	height: 100%;
}
.bg-gallery3 {
	background-image: url("../assets/image/bgGallary3.jpg");
	background-repeat: no-repeat;
	background-position: 0 0;
	background-attachment: fixed;
	background-size: cover;
	height: 100%;
}
.inner-gallery {
	width: 550px;
	height: 550px;
	@include for-phone-only {
		margin: 6px;
		width: auto;
		height: 250px;
	}
	@include for-tablet-portrait-up {
		margin: 6px;
		width: auto;
		height: 270px;
	}
}
.gallery-size {
	width: 500px;
	height: 500px;
	background-size: cover;
	background-position: center;
	@include for-phone-only {
		width: 260px;
		height: 240px;
	}
	@include for-tablet-portrait-up {
		width: 270px;
		height: 270px;
	}
}

.gallerySlogan {
	top: 22%;
	margin-left: 60%;
}

.m-4 {
	@include for-phone-only {
		margin: 10px !important;
	}
	@include for-tablet-portrait-up {
		margin: 10px !important;
	}
}
</style>