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
				v-model.trim="inputValue"
				:placeholder="`What's your name?`"
				size="form-control-sm"
			/>
			<div v-if="isValidation">
				<p class="dangerous text-center lh-1 fw-lighter font-small">
					Enter your name please
				</p>
			</div>

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
				<DescriptionVue>Specify your skill:</DescriptionVue>
				<CheckBox
					v-for="skill in arrSkills"
					:id="skill.id"
					:key="skill.id"
					v-model="skill.selected"
					:label="skill.label"
				/>
				<div>
					<!-- :key="skill.id" key не может быть объектом, только чистом или строкой или буль -->
					<input
						id="chooseAll"
						:checked="checked"
						type="checkbox"
						class="me-3"
						@input="chooseAllSkills"
					/>
					<label
						for="chooseAll"
						class="flex flex-row items-center font-bold cursor-pointer"
					>
						Choose all</label
					>
				</div>
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
	emits: ["update:show"],
	data() {
		return {
			inputValue: "",
			modelValueCity: "",
			modelValueAge: "",
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
				{ id: 1, label: "Stylus, Sass, Less", selected: false },
				{ id: 2, label: "Gulp, Webpack, Grunt", selected: false },
				{ id: 3, label: "Working with API", selected: false },
				{ id: 4, label: "SQL/MySQL/PostreSQL/NoSQL", selected: false },
				{ id: 5, label: "Node Js", selected: false },
				{ id: 6, label: "Docker", selected: false },
				{ id: 7, label: "Vue 3/Router", selected: false },
				{ id: 8, label: "Bootstrap", selected: false },
				{ id: 9, label: "Adaptive layout", selected: false },
			],
			isHiddenSmallModal: false,
			checked: false,
			isValidation: false,
		};
	},
	methods: {
		validationInput() {
			if (this.inputValue.length === 0) {
				this.isValidation = true;
			}
		},
		showModal() {
			this.isVisibleModal = true;
		},
		closeModal() {
			this.isVisibleModal = null;
		},
		closeSmallModal() {
			this.isHiddenSmallModal = null;
		},
		/*eslint-disable*/
		chooseAllSkills() {
			this.checked = !this.checked;
			this.arrSkills.forEach((item) => (item.selected = this.checked));
		},
		showSentlModal() {
			if (this.isValidation) {
				this.isVisibleModal = false;
				this.isHiddenSmallModal = true;
			} else this.validationInput();
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
.font-small {
	font-size: smaller;
}
</style>