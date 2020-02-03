<template lang="pug">
	v-layout(column fill-height fill-width justify-center align-center)
		v-card.login-card
			.login-card__logo.elevation-3: img(src="@/assets/logo.svg")
			v-card-text
				v-layout(column)
					v-text-field(placeholder="Username")
					v-text-field(placeholder="Password")
			v-card-actions
				v-spacer
				v-btn.login-button Login
				v-spacer
</template>

<script>
	export default {
		name: 'Login'
	};
</script>

<style lang="scss" scoped>
	.login-card {
		width       : 500px;
		position    : relative;
		padding-top : 40px;
	}

	.login-button {
		width : 250px;
	}

	.login-card__logo {
		position         : absolute;
		border-radius    : 50% !important;
		background-color : #333333;
		display          : flex;
		justify-content  : center;
		align-items      : center;
		top              : -40px;
		left             : calc(50% - 50px);
		width            : 100px !important;
		height           : 100px !important;

		img {
			width  : 80%;
			height : 80%;
		}
	}

	@media screen and(max-width : 800px) {
		.login-card {
			width : 100% !important;
		}

		.login-button {
			width : 100%;
		}

	}
</style>