<template>
	<div>
		<b-ul v-for="item in items" :key="item.title">
			<li>
				<a :href="item.path" class="post-description">{{ item.title }}</a>
			</li>
		</b-ul>
	</div>
</template>

<script>
    export default {
        props: ["items", "icons"]
    };
</script>
