<template>
	<div class="container">
		<div class="div">
			<h1>{{ title }}</h1>
			<div class="form-control">
				<MyInput
					v-model="inputValue"
					:placeholder="placeholder"
					size="form-control-sm"
					@keyup.enter="addNote()"
				/>
				<MyButtons color="btn-outline-success" size="btn-sm" @click="addNote()"
					>Add</MyButtons
				>
			</div>
			<div class="m-4">
				<ArrayNotes v-for="note in notes" :key="note">{{ note }}</ArrayNotes>
			</div>
		</div>
	</div>
</template>

<script>
import MyButtons from "../components/MyButtons.vue";
import MyInput from "../components/MyInput.vue";
import ArrayNotes from "../components/ArrayNotes.vue";

export default {
	name: "HomeView",
	components: {
		MyButtons,
		MyInput,
		ArrayNotes,
	},
	data() {
		return {
			title: "List notes",
			placeholder: "Enter the note...",
			inputValue: "",
			notes: ["note 1", "note 2", "note 3"],
		};
	},
	methods: {
		addNote() {
			if (this.inputValue !== "") {
				this.notes.push(this.inputValue);
				this.inputValue = "";
			}
		},
		countMinus() {
			if (this.count === 0) {
				this.count;
			} else {
				this.count--;
			}
		},
	},
};
</script>

<style lang="scss">
.form-control-sm {
	width: 60%;
	border: 1px solid #198754;
}
</style>
