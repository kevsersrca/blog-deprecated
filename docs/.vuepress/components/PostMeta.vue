<template>
	<p v-if="post.date || post.author">
		<template v-if="post.author">&middot; {{ post.author }}</template>
	</p>
</template>

<script>
    export default {
        props: ["post"],
        methods: {
            date(post) {
                return post.date;
            }
        }
    };
</script>
