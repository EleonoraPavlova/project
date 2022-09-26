<template>
	<div
		v-if="people.length !== 0"
		class="d-flex justify-content-center flex-wrap"
	>
		<div
			v-for="person in people"
			:key="person.id"
			class="
				form-control
				border-info
				form-control-sm
				m-2
				d-flex
				ps-4
				justify-content-between
				align-items-center
			"
		>
			{{ person.firstName }}
			<div class="d-flex justify-content-center">
				<MyButtons
					color="light"
					class="btn-outline-danger"
					size="sm"
					@click="$emit('detele-person', person.id)"
					>Delete</MyButtons
				>
			</div>
		</div>
	</div>
	<div v-else class="div">
		<DescriptionVue>There are no people yet</DescriptionVue>
		<MyButtons class="btn-outline-info" color="light" @click="$emit('download')"
			>Download</MyButtons
		>
	</div>
</template>

<script>
import DescriptionVue from "./DescriptionVue.vue";
import MyButtons from "./MyButtons.vue";

export default {
	name: "DataBaseList",
	components: { DescriptionVue, MyButtons },

	props: {
		people: {
			type: Array,
			default: () => [],
		},
	},
	emits: ["download", "detele-person"],
	//person.id - удалять буду с клиента и сервера по id
	//emits: ["download"], @click="$emit('download')" - переносим событие из компоненты в родителя
};
</script>

<style>
</style>