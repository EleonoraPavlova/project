<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/news">News</router-link> |
		<router-link to="/blog">Blog</router-link> |
		<router-link to="/gallery">Gallery</router-link> |
		<router-link to="/database">Database</router-link> |
		<router-link to="/vacancies">Vacancies</router-link> |
		<router-link to="/cvconstructor">CV constructor</router-link>
	</nav>
	<router-view />
</template>

<style lang="scss">
nav {
	padding: 25px;
	a {
		font-weight: bold;
		color: #2c3e50;
		&:hover {
			color: gray;
		}
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
