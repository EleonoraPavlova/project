<template>
	<div class="form-control mb-4 p-4">
		<div class="d-flex justify-content-start">
			<DescriptionVue> {{ index + 1 }}. {{ list }}</DescriptionVue>
		</div>
		<div class="d-flex justify-content-start">
			<MyButtons class="btn-link" color="default: null" @click="showModal()"
				>Apply</MyButtons
			>
		</div>
		<ModalWindow v-model:show="isVisibleModal" class="position-relative">
			<div class="position-absolute top-0 end-0">
				<CloseButton @click="closeModal()" />
			</div>
			<DescriptionVue><strong>Fill out the form</strong> </DescriptionVue>
			<MyInput
				v-model="inputValue"
				:placeholder="`What's your name?`"
				size="form-control-sm"
			/>

			<SelectInput v-model="modelValueAge" class="m-2"
				><option disabled value="">Сhoose your age</option>
				<option
					v-for="option in options"
					:key="option"
					:value="option"
					class="pl-2"
				>
					{{ option }}
				</option>
			</SelectInput>
			<SelectInput v-model="modelValueCity" class="m-2"
				><option disabled value="">Сhoose your city</option>
				<option v-for="city in cities" :key="city" :value="city" class="pl-2">
					{{ city }}
				</option>
			</SelectInput>
			<div class="d-flex flex-column align-items-start m-2">
				<DescriptionVue class="mb-1">Ready to move?</DescriptionVue>
				<RadioButtons />
			</div>
			<div class="d-flex flex-column align-items-start m-2">
				<DescriptionVue class="mb-1">Specify your skill:</DescriptionVue>
				<CheckBox
					v-for="skill in arrSkills"
					id="id"
					:key="skill"
					:skills="skill"
					@chose="chooseAllSkills()"
				/>
			</div>
			<MyButtons
				class="btn-outline-success"
				color="light"
				size="sm"
				@click="showSentlModal()"
				>Send</MyButtons
			>
		</ModalWindow>
		<SentModal v-if="isHiddenSmallModal" @closed="closeSmallModal()">
			<p class="mb-3">Your short request has been sent!</p>
		</SentModal>
	</div>
</template>

<script>
import DescriptionVue from "../components/DescriptionVue.vue";
import MyButtons from "../components/MyButtons.vue";
import ModalWindow from "../components/ModalWindow.vue";
import MyInput from "../components/MyInput.vue";
import SelectInput from "../components/SelectInput.vue";
import RadioButtons from "./RadioButtons.vue";
import CheckBox from "./CheckBox.vue";
import CloseButton from "./CloseButton.vue";
import SentModal from "./SentModal.vue";

export default {
	name: "VacanciesBox",
	components: {
		DescriptionVue,
		MyButtons,
		ModalWindow,
		MyInput,
		SelectInput,
		RadioButtons,
		CheckBox,
		CloseButton,
		SentModal,
	},
	props: {
		list: {
			type: String,
			default: "",
		},
		index: {
			type: Number,
			default: null,
		},
	},
	emits: ["update: show"],
	data() {
		return {
			inputValue: "",
			modelValueCity: "",
			modelValueAge: "",
			checkedSkills: false,
			//выбрать возраст из предложеного списка
			options: Array(33)
				.fill(1)
				.map((i, index) => index + 18),
			cities: [
				"Kyiv",
				"Kharkiv",
				"Odesa",
				"Zaporizhzhia",
				"Enerhodar, Zaporizhia Oblast",
				"Dnipro",
				"Lviv",
				"Yavorov, Lviv Oblast",
				"Kryvyi Rih",
				"Mykolaiv",
				"Luhansk",
				"Vinnytsia",
				"Chernihiv",
			],
			isVisibleModal: false,
			arrSkills: [
				{ id: 1, label: "Stylus, Sass, Less" },
				{ id: 2, label: "Gulp, Webpack, Grunt" },
				{ id: 3, label: "Working with API" },
				{ id: 4, label: "SQL/MySQL/PostreSQL/NoSQL" },
				{ id: 5, label: "Node Js" },
				{ id: 6, label: "Docker" },
				{ id: 7, label: "Vue 3/Router" },
				{ id: 8, label: "Bootstrap" },
				{ id: 9, label: "Adaptive layout" },
				{ id: 10, label: "Choose all" },
			],
			isHiddenSmallModal: false,
		};
	},
	methods: {
		showModal() {
			this.isVisibleModal = true;
		},
		closeModal() {
			this.isVisibleModal = null;
		},
		closeSmallModal() {
			this.isHiddenSmallModal = null;
		},
		chooseAllSkills() {
			const selected = [];
			if (this.checkedSkills === false) {
				for (let i in this.arrSkills) {
					selected.push(this.arrSkills[i].id);
				}
			}
		},
		showSentlModal() {
			this.isVisibleModal = false;
			this.isHiddenSmallModal = true;
		},
	},
};
</script>

<style lang="scss" scoped>
.btn-link {
	text-decoration: none;
	color: green;
}
.form-control-sm {
	width: 94%;
}
</style>