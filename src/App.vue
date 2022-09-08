<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/news">News</router-link>
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
