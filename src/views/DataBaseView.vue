<template>
	<div class="container">
		<MistakeMessage :alert="alert" @close-alert="alert = null" />
		<H1Component>Work with database</H1Component>
		<div class="form-control" @submit.prevent="createPerson()">
			<div
				class="m-4 d-flex justify-content-center align-items-center data-mobile"
			>
				<div class="flex-shrink-1">
					<MyInput
						v-model.trim="name"
						:placeholder="`Enter full name`"
						size="form-control-sm"
						@keypress.enter="createPerson()"
					/>
					<div class="div">
						<div v-show="name.length < 3 && name.length !== 0">
							<p class="dangerous fw-lighter">Name is too short</p>
						</div>
						<div v-show="name.length > 60">
							<p class="dangerous fw-lighter">
								Name is too long, write shorter please
							</p>
						</div>
					</div>
				</div>
				<div class="data-mobile__btn">
					<MyButtons
						class="btn-success"
						size="sm"
						:disabled="name.length === 0"
						@click="createPerson()"
						>Create a person</MyButtons
					>
				</div>
			</div>
			<div
				v-if="loading"
				class="d-flex justify-content-center align-items-center"
			>
				<LoaderComponent />
			</div>
			<div v-else class="m-4">
				<DataBaseList
					:people="people"
					@download="downloadPerson()"
					@detele-person="deletePerson"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import H1Component from "../components/H1Component.vue";
import axios from "axios";
import MyInput from "../components/MyInput.vue";
import MyButtons from "../components/MyButtons.vue";
import DataBaseList from "../components/DataBaseList.vue";
import MistakeMessage from "../components/MistakeMessage.vue";
import LoaderComponent from "../components/LoaderComponent.vue";

export default {
	name: "DataBaseView",
	components: {
		H1Component,
		MyInput,
		MyButtons,
		DataBaseList,
		MistakeMessage,
		LoaderComponent,
	},
	data() {
		return {
			name: "",
			people: [],
			alert: null,
			loading: false,
			initialLoad: true, //знать первая загрузка или нет(чтобы не показывалось окошко алерта после перегрузки страницы)
		};
	},
	// watch: {
	// },
	async created() {
		//хук вызывается, когда дерево DOM компонента готово!
		//чтобы подгружать сразу массив people, которые были записаны до вызова downloadPerson ()
		await this.downloadPerson();
		this.initialLoad = false; //меняется при перегрузке страницы
	},
	methods: {
		//без axios
		async createPerson() {
			if (!this.name || this.name.length <= 3) {
				//пустого человека не создавать
				this.name = "";
				return;
			}
			const response = await fetch(
				"https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/people.json",
				{
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify({
						firstName: this.name,
					}),
				}
			);
			const firebaseData = await response.json();

			this.people.push({
				//добавляем нового человека на сервер и автоматич в выводимый список people
				firstName: this.name,
				id: firebaseData.name,
			});
			this.name = "";

			if (this.people.length >= 1) {
				this.alert = null;
			}
		},
		async downloadPerson() {
			//грузим данные с сервера, ответ приходит в {}, а мне нужно трансформ в [] => нужно распарсить объект с помощью Object.keys,
			//Object.keys возвращает [] с криптографич ключами ( типа "-NCebAr8AwI3IAreyDHH")
			//далee итерация map, чтобы получить ключ на каждой итерации, ключ будет равняться каждой из этих строчек - ( типа "-NCebAr8AwI3IAreyDHH")
			//поэтому получается, что id : key, и поле для имени человека, напрм name: data[key].firstName
			//когда есть множество ключей лучше использовать оператор спред ...data[key], чтобы все ключи которые есть в обьекте развернулись в результирующий обьект

			this.loading = true;
			try {
				const { data } = await axios.get(
					"https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/people.json"
				);
				// if (!data) {
				// 	//когда {} совсем пустой, возвращает null => преобр в массив
				// 	this.people = [];
				// 	return;
				// }
				//или показать ошибку вот так:
				if (!data) {
					throw new Error("The list of people is empty");
				}
				this.people = Object.keys(data).map((key) => {
					return {
						id: key,
						...data[key],
					};
				});
				this.loading = false;
			} catch (e) {
				if (!this.initialLoad) {
					this.alert = {
						class: "border border-danger",
						title: "Mistake!",
						text: e.message,
					};
				}
			}
			this.loading = false;
		},
		async deletePerson(id) {
			//удалить с сервера и с интерфейса
			try {
				//удаляем человека и выводим конкретно его имя
				const thisName = this.people.find(
					(person) => person.id === id
				).firstName;
				await axios.delete(
					`https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`
				);
				this.people = this.people.filter((person) => person.id !== id);
				this.alert = {
					class: "border border-success",
					title: "Success!",
					text: `User ${thisName} has been deleted`,
				};
				setTimeout(() => {
					this.alert = null;
				}, 1000);
			} catch (e) {
				this.open();
			}
		},
		open() {
			this.$toast.open({
				//ToastPlugin код
				message: "The list of people is empty",
				type: "error",
				duration: 5000,
				dismissible: true,
				//position: "left-right", //тут меняем положение окошка с ошибкой на странице по желанию
			});
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";
.form-control-sm {
	width: 95%;
	@include for-phone-only {
		width: 90%;
	}
}
.data-mobile {
	display: flex;
	@include for-phone-only {
		flex-direction: column;
		align-items: center;
	}
	&__btn {
		@include for-phone-only {
			width: 50%;
			display: flex;
			justify-content: center;
		}
	}
}

.fw-lighter {
	line-height: 1;
}
.flex-shrink-1 {
	flex-basis: 74%;
}
</style>