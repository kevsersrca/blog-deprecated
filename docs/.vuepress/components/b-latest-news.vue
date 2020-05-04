<template>
	<div>
		<template v-for="post in posts">
			<article class="col-sm-5bx">
				<a class="post-description" :href="post.path">
					<div class="caption">
						<h5 class="caption-heading">{{ post.frontmatter.title }}</h5>
					</div>
				</a>
			</article>
		</template>
	</div>
</template>

<script>
    import { getBlogPages } from "./utils";
    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(x => x.path.startsWith('/series/') && !x.frontmatter.series_index)
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
