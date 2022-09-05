<template>
	<div class="container">
		<div class="div">
			<h1
				:style="{
					color: inputValue.length < 10 ? 'green' : 'gray',
					fontSize: inputValue.length < 6 ? '2rem' : '1.7rem',
				}"
			>
				{{ title }}
			</h1>
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
				<ArrayNotes
					v-for="(note, index) in notes"
					:key="note"
					@click="deleteNote(index)"
					><span :class="note.length > 5 ? 'success' : 'dt'">{{
						toUpperCaseFirstLetter(note)
					}}</span></ArrayNotes
				>
			</div>
			<div v-if="notes.length === 0">No notes</div>
			<hr class="m-4" />
			<TotalCount>Total count notes: {{ notes.length }} </TotalCount>
		</div>
	</div>
</template>

<script>
import MyButtons from "../components/MyButtons.vue";
import MyInput from "../components/MyInput.vue";
import ArrayNotes from "../components/ArrayNotes.vue";
import TotalCount from "../components/TotalCount.vue";

export default {
	name: "HomeView",
	components: {
		MyButtons,
		MyInput,
		ArrayNotes,
		TotalCount,
	},
	data() {
		return {
			// counter: 0,
			title: "List notes",
			placeholder: "Enter the note...",
			inputValue: "",
			notes: ["note 1", "note 2", "note 3"],
		};
	},
	watch: {
		inputValue(value) {
			if (value.length > 20) {
				this.inputValue = "";
			}
		},
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
		deleteNote(index) {
			this.notes.splice(index, 1);
		},
		toUpperCaseFirstLetter(item) {
			return item[0].toUpperCase() + item.slice(1);
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
