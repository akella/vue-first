<template>
	<div class="post">
		<h1>{{ heading }}</h1>
		<p>{{subtitle}}</p>
	</div>
</template>

<script>
	export default {
		props: {
			'heading': String,
			'subtitle': String
		}
	}
</script>


<style scoped>
	.post{
		
	}
</style>