<template>
	<div class="loader-wrap">
		<div class="load">
			<div class="l-1 letter">L</div>
			<div class="l-2 letter">o</div>
			<div class="l-3 letter">a</div>
			<div class="l-4 letter">d</div>
			<div class="l-5 letter">i</div>
			<div class="l-6 letter">n</div>
			<div class="l-7 letter">g</div>
			<div class="l-8 letter">.</div>
			<div class="l-9 letter">.</div>
			<div class="l-10 letter">.</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "LoaderComponent",
};
</script>

<style lang="scss">
.loader-wrap {
	float: left;
	width: auto;
	height: auto;
	margin: 10px;
	border-radius: 10px;
	text-align: center;
}
.letter {
	float: left;
	font-size: 16px;
	color: green;
}
.load .letter {
	animation-name: loadingF;
	animation-duration: 1.6s;
	animation-iteration-count: infinite;
	animation-direction: linear;
}
.l-1 {
	animation-delay: 0.48s;
}
.l-2 {
	animation-delay: 0.6s;
}
.l-3 {
	animation-delay: 0.72s;
}
.l-4 {
	animation-delay: 0.84s;
}
.l-5 {
	animation-delay: 0.96s;
}
.l-6 {
	animation-delay: 1.08s;
}

.l-7 {
	animation-delay: 1.2s;
}
.l-8 {
	animation-delay: 1.32s;
}
.l-9 {
	animation-delay: 1.44s;
}
.l-10 {
	animation-delay: 1.56s;
}
@keyframes loadingF {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>