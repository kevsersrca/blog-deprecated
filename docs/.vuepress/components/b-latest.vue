<template>
    <div >
        <template v-for="post in posts">
            <a :href="post.path">
                <img :src="post.frontmatter.image" style="width: 30px"></img>
                <strong>{{ post.frontmatter.title }}</strong>
                <span class="badge badge-light">{{ post.frontmatter.tag }}</span>
            </a>
            <br>
        </template>
        <br>
    </div>
</template>

<script>
    import { getBlogPages } from "./utils";
    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(x => (x.path.startsWith('/tricks/') || x.path.startsWith('/series/')) && !x.frontmatter.tricks_index )
                    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
            }
        }
    };
</script>

<style>
    .badge-light{
        background-color: #b791de;
    }
</style>
