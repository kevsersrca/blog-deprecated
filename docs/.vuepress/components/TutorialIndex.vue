<template>
	<div class="tutorials">
		<div v-for="post in posts" class="tutorial">
			<img :src="post.frontmatter.image" />
			<h2>
				<router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
			</h2>

			<p>{{ post.frontmatter.description }}</p>

			<router-link :to="post.path"><button class="tutorial-button">Read more</button></router-link>
			<div class="date">{{ new Date(post.frontmatter.date).toLocaleDateString() }}</div>
		</div>
	</div>
</template>

<style>
	img {
		width: 100%;
		max-width: 400px;
		height: auto;
		padding-left: 20%;
	}
	.date{
		color: gray;
		font-size: small;
	}
	.tutorial{
		margin-top: 5%;
		border-style: dotted ;
		border-color: whitesmoke;
		padding: 20px;
	}
	.tutorial-button{
		background-color: #4CAF50;
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		cursor: pointer;
	}
</style>

<script>
    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(x => x.path.startsWith('/tutorials/') && !x.frontmatter.tutorial_index)
                    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
            }
        }
    }
</script>
