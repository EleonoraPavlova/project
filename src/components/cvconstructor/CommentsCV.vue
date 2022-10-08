<template>
	<div>
		<div class="d-flex justify-content-md-end cv-button mb-4 bd-highlight">
			<LoaderComponent
				v-if="loading"
				class="
					m-0
					d-flex
					align-items-center
					p-2
					flex-fill
					bd-highlight
					justify-content-center
				"
			>
				<div class="l-1 letter">W</div>
				<div class="l-2 letter">a</div>
				<div class="l-3 letter">i</div>
				<div class="l-4 letter">t</div>
				<div class="l-8 letter">.</div>
				<div class="l-9 letter">.</div>
				<div class="l-10 letter">.</div>
			</LoaderComponent>
			<MyButtons
				type="submit"
				class="btn-outline-success"
				color="light"
				size="lg"
				@click="downloadComments"
			>
				{{ isVisible ? "Hide" : "Download comments" }}</MyButtons
			>
		</div>

		<div v-if="isVisible">
			<div
				v-for="value in commentsArr"
				:key="value"
				class="d-flex flex-column bd-highlight mb-3 mx-3"
			>
				<div class="d-flex justify-content-between align-items-center mb-3">
					<div class="d-flex align-items-center">
						<div class="commentsImage">
							<img
								:src="value.image"
								alt="image"
								class="border border-info rounded-circle"
							/>
						</div>
						<h6 class="p-3">{{ value.name }}</h6>
					</div>
					<div>
						<div>{{ value.createdAt }}</div>
					</div>
				</div>
				<div class="">
					<p class="cv-comment">{{ value.comment }}</p>
				</div>
				<div class="d-flex justify-content-start align-items-center">
					<p>
						<strong>{{ value.email }}</strong>
					</p>
				</div>
				<hr class="m-3" />
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import MyButtons from "../common/MyButtons.vue";
import LoaderComponent from "../common/LoaderComponent.vue";

export default {
	name: "CommentsCV",
	components: {
		MyButtons,
		LoaderComponent,
	},
	data() {
		return {
			loading: false,
			commentsArr: [],
			isVisible: false,
		};
	},
	methods: {
		async downloadComments() {
			this.commentsArr = [];
			//очистили массив перед загрузкой блока комментариев,
			//чтобы loading подгружался только когда комментарии еще не загружены
			//this.commentsArr = Object.values(data) наполняет массив и при каждой следующей загрузке обновляет его,
			// а не полностью загружает с начала
			this.isVisible = !this.isVisible;
			if (!this.isVisible) {
				return;
			}
			this.loading = true;
			try {
				setTimeout(async () => {
					const { data } = await axios.get(
						"https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/comments.json"
					);

					this.commentsArr = Object.values(data)
						.filter((item) => item !== null)
						.map((item) => {
							const date = new Date(item.createdAt);
							return {
								...item,
								createdAt: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
							};
						});
					this.loading = false;
				}, 1000);
				//`${date.toLocaleDateString()}${date.toLocaleTimeString()}`- вывести время в нужном формате '07/10/2022 15:49:51'
			} catch (e) {
				this.$toast.error("Failed to load comments");
			}
			// this.loading = false;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.cv-button {
	margin-left: 14%;
	@include for-phone-only {
		justify-content: center;
		align-items: center;
	}
	@include for-tablet-portrait-up {
		justify-content: center;
		align-items: center;
	}
}
.commentsImage {
	width: 70px;
	height: 70px;
}
.cv-comment {
	text-align: start;
}
</style>