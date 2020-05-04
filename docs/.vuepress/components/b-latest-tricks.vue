<template>
	<div>
		<template v-for="post in posts" class="card-list">
			<div class='line'></div>
			<table class='order-table'>
				<tbody>
					<tr>
						<td><img :src="post.frontmatter.image" class='full-width'></img>
						</td>
						<td>
							<br> <span class='thin'>{{ post.frontmatter.title }}</span>
							<br> <span class='thin small'> Tags: <span class="badge badge-success">{{ post.frontmatter.tag }}</span><br><br></span>
						</td>
					</tr>
					<tr>
						<td>
							<div>

							</div>
							<div class='price'>
								<a :href="post.path"><button class="btn btn-light btn-sm">View Post</button></a>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</template>
		<span class="btn btn-info" style="float:right;margin-bottom:2%;"><a :href="/tricks/" class="post-description" style="color:white">More trick</a></span>
	</div>
</template>

<script>
	import { getBlogPages } from "./utils";
	export default {
		computed: {
			posts() {
				return this.$site.pages
					.filter(x => x.path.startsWith('/tricks/') && !x.frontmatter.tricks_index)
					.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)).slice(0, 4);
			}
		}
	};
</script>

<style lang="stylus" scoped>
	body,html {
		height:100%;
		margin:0;
		font-family:Oxanium;
	}
	.line {
		height:1px;
		width:100%;
		margin-top:10px;
		margin-bottom:10px;
		background:#ddd;
	}
	.order-table td:first-of-type {
		width:25%;
	}
	.order-table {
		position:relative;
	}
	.order-table td:last-of-type {
		vertical-align:top;
		padding-left:25px;
	}
	.order-info-content {
		table-layout:fixed;

	}
	.thin {
		font-weight:400;
	}
	.small {
		font-size:12px;
		font-size:.8rem;
	}
	.price {
		bottom:0px;
		position:absolute;
		right:0px;
	}
	.full-width {
		width:100%;
	}
</style>
