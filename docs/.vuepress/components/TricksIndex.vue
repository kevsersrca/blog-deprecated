<template>
	<div>
		<div v-for="post in posts" class="tutorial row">
			<div class="col-md-3">
				<img :src="post.frontmatter.image" class="responsive-img">
			</div>
			<div class="col-md-9">
				<h2>
					<router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
					<span class="label label-info arrowed-in-right arrowed">{{ post.frontmatter.tag }}</span>
				</h2>

				<p>{{ post.frontmatter.description }}</p>
				<router-link :to="post.path"><button class="tutorial-button">Read more</button></router-link>
				<div class="date">{{ new Date(post.frontmatter.date).toLocaleDateString() }}</div>
			</div>
		</div>
	</div>
</template>

<style>
	.label { border-radius: 0; text-shadow: none; font-size: 11px; font-weight: normal; padding: 3px 5px 3px; background-color: #abbac3!important; color:yellow }
	.label-info{ background-color: #9EB25D !important }
	.label-info.arrowed:before { border-right-color: green }
	.label-info.arrowed-in-right:after { border-color: green }
	.date{
		color: gray;
		font-size: small;
		float: right;
	}
	.center {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	}
	.tutorial{
		margin-top: 5%;
		border-style: dotted ;
		border-color: whitesmoke;
		padding: 20px;
	}
	.tutorial-button{
		background-color: #9EB25D;
		border: none;
		color: white;
		padding: 5px 15px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 12px;
		cursor: pointer;
	}
</style>
<script>
    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(x => x.path.startsWith('/tricks/') && !x.frontmatter.tricks_index)
                    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
            }
        }
    }
</script>
