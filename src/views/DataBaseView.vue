<template>
	<div class="container">
		<MistakeMessage :alert="alert" @close-alert="alert = null" />
		<H1Component>Work with database</H1Component>
		<div class="form-control" @submit.prevent="createPerson()">
			<div class="m-4">
				<MyInput
					v-model.trim="name"
					:placeholder="`Enter full name`"
					size="form-control-sm"
					@keypress.enter="createPerson()"
				/>
				<MyButtons
					class="btn-success"
					size="sm"
					:disabled="name.length === 0"
					@click="createPerson()"
					>Create a person</MyButtons
				>
			</div>
			<div class="m-4">
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

export default {
	name: "DataBaseView",
	components: {
		H1Component,
		MyInput,
		MyButtons,
		DataBaseList,
		MistakeMessage,
	},
	data() {
		return {
			name: "",
			people: [],
			alert: null,
		};
	},
	watch: {
		"name.length"() {
			this.alert = null;
		},
	},
	mounted() {
		//хук вызывается, когда дерево DOM компонента готово!
		//чтобы подгружать сразу массив people, которые были записаны до вызова downloadPerson ()
		this.downloadPerson();
	},
	methods: {
		//без axios
		async createPerson() {
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
		},
		async downloadPerson() {
			//грузим данные с сервера, ответ приходит в {}, а мне нужно трансформ в [] => нужно распарсить объект с помощью Object.keys,
			//Object.keys возвращает [] с криптографич ключами ( типа "-NCebAr8AwI3IAreyDHH")
			//далee итерация map, чтобы получить ключ на каждой итерации, ключ будет равняться каждой из этих строчек - ( типа "-NCebAr8AwI3IAreyDHH")
			//поэтому получается, что id : key, и поле для имени человека, напрм name: data[key].firstName
			//когда есть множество ключей лучше использовать оператор спред ...data[key], чтобы все ключи которые есть в обьекте развернулись в результирующий обьект
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
			} catch (e) {
				this.alert = {
					type: "danger",
					title: "Mistake!",
					text: e.message,
				};
			}
		},
		async deletePerson(id) {
			//удалить с сервера и с интерфейса
			await axios.delete(
				`https://vue-with-http2022-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`,
				(this.people = this.people.filter((person) => person.id !== id))
			);
		},
	},
};
</script>

<style lang="scss">
@import "../assets/mixins.scss";
.form-control-sm {
	@include for-phone-only {
		width: 90%;
	}
}
</style>