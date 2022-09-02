.<template>
	<button
		type="button"
		class="btn m-1"
		:class="[color, size]"
		@click="$emit('click')"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: "MuButtons",
	props: {
		color: {
			type: String,
			default: "btn-outline-primary",
		},
		size: {
			type: String,
			default: "btn-lg",
		},
	},
	emits: ["click"],
};
</script>

<style>
</style>