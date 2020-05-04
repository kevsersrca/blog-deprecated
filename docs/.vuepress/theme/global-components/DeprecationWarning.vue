<template>
	<div class="content deprecation-warning">
		<p>
			<strong>Warning:</strong> architecturecoding blog page under construction.
			If you want to help, please click the <strong>Help us improve this page!</strong> at the bottom. Thank you :)
		</p>
	</div>
</template>

<script>
    export default {
        name: "DeprecationWarning"
    };
</script>

<style lang="stylus" scoped>
	.deprecation-warning {
		$bg = #d2fac2;
		padding: 0 2rem;
		border: 1px solid $bg;
		background-color: rgba($bg, 20%);
		border-radius: 4px;
	}
	body {
		font-family: 'Oxanium' ;
	}
</style>
