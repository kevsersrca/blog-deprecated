<template>
	<aside class="home-sidebar">
		<h3 class="first">Latest Series</h3>
		<b-latest-news/>

		<h3>Stay up to date</h3>
		<b-link-list :items="social"/>

		<h3>Get involved</h3>
		<b-link-list :items="contribute"/>
	</aside>
</template>

<script>
    export default {
        data() {
            return {
                social: [
                    {
                        title: "Follow via github",
                        path: "https://github.com/kevsersrca"
                    },
                    {
                        title: "Follow via gist",
                        path: "https://gist.github.com/kevsersrca"
                    },
                    {
                        title: "Follow via linkedin",
                        path:
                            "https://linkedin.com/in/sirca"
                    }
                ],
                contribute: [
                    {
                        title: "Issues",
                        path: "https://github.com/kevsersrca/blog/issues"
                    },
                ]
            };
        }
    };
</script>


<style lang="stylus" scoped>
	@import './config.styl';
	.home-sidebar {
		padding: 1rem 2rem;
		background: $cardBackgroundColor;
		h3:not(.first) {
			margin-top: 2rem;
			padding-top: 1rem;
			border-top: 1px solid #d0d4d8;
		}
		@media (max-width: $MQMobile) {
			margin: 0;
		}
	}
</style>
