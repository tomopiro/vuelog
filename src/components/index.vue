<template>
	<div class="hello">
		<h1>vuelog</h1>
		<ul v-for="s in summary.fileMap" :key="s.created_at">
			<li>タイトル：{{ s.title }}</li>
			<br />
			<li>投稿日：{{ s.created_at }}</li>
		</ul>
	</div>
</template>

<script>
import summary from '../json/summary.json';

export default {
	name: 'index',
	props: {
		msg: String,
	},
	data() {
		return {
			summary,
			key: '',
			id: '',
		};
	},
};
console.log('test');
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
