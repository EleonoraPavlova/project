<template>
	<div class="form-control mb-4 p-4">
		<div class="d-flex justify-content-start">
			<DescriptionVue> {{ index + 1 }}. {{ list }}</DescriptionVue>
		</div>
		<div class="d-flex justify-content-start">
			<MyButtons class="btn-link" color="default: null">Apply</MyButtons>
		</div>
		<ModalWindow :show="true" class="position-relative">
			<div class="position-absolute top-0 end-0">
				<CloseButton />
			</div>
			<Description><strong>Fill out the form</strong> </Description>
			<MyInput
				v-model="inputValue"
				:placeholder="`What's your name?`"
				size="form-control-sm"
			/>

			<SelectInput v-model="modelValue" class="m-2"
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
				<Description class="mb-1">Ready to move?</Description>
				<RadioButtons />
			</div>
			<div class="d-flex flex-column align-items-start m-2">
				<Description class="mb-1">Specify your skill:</Description>
				<CheckBox>Stylus, Sass, Less</CheckBox>
				<CheckBox>Gulp, Webpack, Grunt</CheckBox>
				<CheckBox>Working with API</CheckBox>
				<CheckBox>SQL/MySQL/PostreSQL/NoSQL</CheckBox>
				<CheckBox>Node Js</CheckBox>
				<CheckBox>Docker</CheckBox>
				<CheckBox>Vue 3/Router</CheckBox>
				<CheckBox>Bootstrap</CheckBox>
				<CheckBox>Adaptive layout</CheckBox>
				<CheckBox class="text-decoration-underline">Choose all</CheckBox>
			</div>
			<MyButtons class="btn-outline-success" color="light" size="sm"
				>Send</MyButtons
			>
		</ModalWindow>
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
	},
	props: {
		list: {
			type: Object,
			default: null,
		},
		index: {
			type: Number,
			default: null,
		},
	},
	data() {
		return {
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
		};
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