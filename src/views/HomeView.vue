<template>
	<div class="container">
		<div class="div">
			<H1Component
				:style="{
					color: inputValue.length < 10 ? 'green' : 'gray',
					fontSize: inputValue.length < 6 ? '2rem' : '1.7rem',
				}"
				>{{ title }}</H1Component
			>
			<div class="form-control">
				<MyInput
					v-model="inputValue"
					:placeholder="placeholder"
					size="form-control-sm"
					@keyup.enter="addNote()"
				/>
				<MyButtons
					class="btn-outline-success"
					color="light"
					size="sm"
					@click="addNote()"
					>Add</MyButtons
				>
			</div>
			<div class="m-4">
				<ArrayNotes
					v-for="(note, index) in notes"
					:key="index"
					:is-editing="editingNote === index"
					@click="deleteNote(index)"
					@edit="onEdit(index)"
					@saved="onSave()"
					>{{ index }} , {{ editingNote }}
					<span
						v-if="editingNote != index"
						:class="note.length > 5 ? 'success' : 'dt'"
						>{{ toUpperCaseFirstLetter(note) }}</span
					><MyInput v-else v-model="notes[index]" @keyup.enter="onSave()" />
				</ArrayNotes>
			</div>
			<div v-if="notes.length === 0">No notes</div>
			<hr class="m-4" />
			<TotalCount>Total count notes: {{ notes.length }} </TotalCount>
		</div>
	</div>
</template>

<script>
import H1Component from "../components/H1Component.vue";
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
		H1Component,
	},
	data() {
		return {
			title: "List notes",
			placeholder: "Enter the note...",
			inputValue: "",
			notes: ["note 1", "note 2", "note 3"],
			editingNote: null,
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
		onEdit(index) {
			this.editingNote = index;
		},
		onSave() {
			this.editingNote = null;
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
