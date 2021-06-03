<template>
	<Layout>
		<template slot="page-top">
			<p class="navbar-fix page-width">
				<router-link to="/news/">← Back to posts</router-link>
			</p>
			<div class="page-width">
			</div>
		</template>
	</Layout>
</template>

<script>
    import Layout from "@theme/layouts/Layout.vue";
    export default { components: { Layout } };
</script>

<style scoped>
	.navbar-fix {
		padding: 4em 2rem 0 2rem;
	}
</style>
