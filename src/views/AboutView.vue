<template>
	<div class="container">
		<H1Component
			:style="{
				color: 'green',
				textDecoration: 'underline',
			}"
			>{{ titleAbout }}</H1Component
		>
		{{ activeChapter }}
		<div class="form-control">
			<DescriptionVue :class="{ active: activeChapter === index }">{{
				arrayDescriprtion[activeChapter]
			}}</DescriptionVue>
			<div class="d-flex justify-content-between p-4 about-mobile">
				<StepPagination
					v-for="(step, index) in arraySteps"
					:key="index"
					:color="activeChapter >= index ? 'sucsses' : 'grey'"
					:title="step"
					@click="changePage(index)"
					>{{ index + 1 }}</StepPagination
				>
			</div>

			<div class="p-4 d-flex justify-content-start">
				<div v-if="!switchForButton">
					<MyButtons
						size="sm"
						color="light"
						class="btn-outline-success"
						:class="{ disabled: activeChapter === 0 }"
						@click="activeChapter--"
						>Back</MyButtons
					>
					<MyButtons
						v-if="activeChapter != arrayDescriprtion.length - 1"
						size="sm"
						color="light"
						class="btn-outline-success"
						@click="activeChapter++"
						>Forward</MyButtons
					>
					<MyButtons
						v-if="activeChapter === arrayDescriprtion.length - 1"
						size="sm"
						color="light"
						class="btn-outline-warning"
						@click="switchButton()"
						>Finish</MyButtons
					>
				</div>
				<div v-show="switchForButton">
					<MyButtons
						size="lg"
						color="light"
						class="btn-outline-success"
						@click="startOver()"
						>Start over</MyButtons
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import H1Component from "../components/H1Component.vue";
import DescriptionVue from "../components/DescriptionVue.vue";
import StepPagination from "../components/StepPagination.vue";
import MyButtons from "../components/MyButtons.vue";

export default {
	components: {
		H1Component,
		DescriptionVue,
		StepPagination,
		MyButtons,
	},
	data() {
		return {
			index: 0,
			arraySteps: ["Basics", "Components", "Router", "Vuex", "Composition"],
			titleAbout: "Vue 3 study plan",
			arrayDescriprtion: [
				`Vue is a framework and ecosystem that covers most of the common
				features needed in frontend development. But the web is extremely
				diverse - the things we build on the web may vary drastically in form
				and scale. With that in mind, Vue is designed to be flexible and
				incrementally adoptable.`,
				`Vue components are written as a combination of JavaScript objects that 
        manage the app's data and an HTML-based template syntax that maps to the 
        underlying DOM structure.`,
				`Vue Router helps link between the browser's URL/History and Vue's 
        components allowing for certain paths to render whatever view is associated with it.`,
				`Vuex is a state management pattern + library for Vue.js applications. It serves as a 
        centralized store for all the components in an application, with rules ensuring that 
        the state can only be mutated in a predictable fashion.`,
				`Composition API is a set of APIs that allows us to author Vue 
        components using imported functions instead of declaring options.
         It is an umbrella term that covers the following APIs: Reactivity API,
          e.g. ref() and reactive() , that allows us to directly create reactive
           state, computed state, and watchers.`,
			],
			activeChapter: 0,
			switchForButton: false,
			startOverClick: false,
		};
	},
	methods: {
		changePage(pageNumber) {
			this.activeChapter = pageNumber; //меняем значение страницы на номер кликнутой страницы
		},
		switchButton() {
			this.switchForButton = true;
		},
		startOver() {
			this.switchForButton = false;
			this.activeChapter = 0;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";
.about-mobile {
	@include for-phone-only {
		flex-direction: column;
	}
	@include for-tablet-portrait-up {
		flex-direction: column;
	}
	// @include for-tablet-landscape-up {
	// 	width: 50%;
	// }
	// @include for-desktop-up {
	// 	width: 45%;
	// }
}
</style>
