<template>
	<div class="container">
		<CardBlog
			><p class="pb-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
				deleniti fuga et voluptate adipisci possimus alias, ea consectetur
				corrupti?
			</p>
			<template #header>
				<h3 class="mb-5">Blog for our people!</h3>
			</template>
			<template #footer>
				<hr />
				<h6 class="m-5">Footer</h6>
			</template>
		</CardBlog>
		<BlogPlan class="mb-5">
			<template #default="{ ind, iteration }"
				><strong style="color: green" class="text-start"
					>Index : {{ ind }}</strong
				>
				<span class="m-2"> {{ iteration }}</span>
			</template>
		</BlogPlan>
		<DynamicComponents />
		<AsyncComponent />

		<!-- передаем значения слота как пропс -->
	</div>
</template>

<script>
import CardBlog from "../components/CardBlog.vue";
import BlogPlan from "../components/BlogPlan.vue";
import DynamicComponents from "../components/DynamicComponents.vue";
import { defineAsyncComponent } from "vue";

export default {
	name: "BlogView",
	components: {
		CardBlog,
		BlogPlan,
		DynamicComponents,
		AsyncComponent: defineAsyncComponent(() =>
			import("../components/AsyncComponent.vue")
		),
	},
};
</script>

<style>
</style>