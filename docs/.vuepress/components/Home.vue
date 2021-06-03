<template>
	<main class="home" aria-labelledby="main-title">

		<header class="hero">
			<img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero" />

			<h1 id="main-title" >{{ data.heroText || $title }}</h1>

			<p class="description" v-html="data.tagline || $description"></p>

			<p>
				<StarButton />
			</p>

		</header>

		<div id="home-main">
			<Content />
		</div>

		<div class="footer" v-if="data.footer">{{ data.footer }}</div>
	</main>
</template>

<script>
    import Home from "@theme/components/Home.vue";
    export default {
        extends: Home, // Get default styles
        computed: {
            data() {
                return this.$page.frontmatter;
            }
        }
    };
</script>

<style lang="stylus" scoped>
	@import './config.styl';
	html * {
		font-family:Oxanium !important;
	}
	.hero img {
		margin-top: 1em;
		margin-bottom: 0;
	}
	#main-title {
		margin-top: 0;
		margin-bottom: 0;
		font-size:35px;
	}
	.description {
		margin-top: 0.5rem;
		font-size: 30px;
	}
	#home-main {
		margin-top: 3rem;
	}
	.home-content{
		padding: 0 2rem;
	}
	@media (max-width: $MQMobile) {
		.home-content {
			padding: 0 2rem;
		}
		#home-main {
			display: block;
		}
	}
</style>
