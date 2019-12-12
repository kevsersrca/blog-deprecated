<template>
	<div>
		<div v-for="post in posts">
			<h2>
				<router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
			</h2>

			<p>{{ post.frontmatter.description }}</p>

			<button><router-link :to="post.path">Read more</router-link></button>
		</div>
	</div>
</template>

<script>
    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(x => x.path.startsWith('/series/') && !x.frontmatter.series_index)
                    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
            }
        }
    }
</script>
