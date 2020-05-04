<template>
	<div>
		<template v-for="post in posts">
			<h3>
				<a :href="post.path" class="post-description">{{ post.frontmatter.title }}</a>
			</h3>
			<p class="post-description">{{ post.frontmatter.description }}</p>
		</template>
		<a :href="/tutorials/" class="post-description">More tutorial</a>
	</div>
</template>

<script>
	import { getBlogPages } from "./utils";
	export default {
		computed: {
			posts() {
				return this.$site.pages
					.filter(x => x.path.startsWith('/tutorials/') && !x.frontmatter.tutorial_index)
					.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)).slice(0, 2);
			}
		}
	};
</script>

<style lang="stylus" scoped>
	.post-description {
		font-size: 0.85em;
	}
</style>
