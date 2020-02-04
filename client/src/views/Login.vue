<template lang="pug">
	v-layout(column fill-height fill-width justify-center align-center)
		v-card.login-card
			.login-card__logo.elevation-3: img(src="@/assets/logo.svg")
			v-card-text
				v-layout(column)
					v-text-field(placeholder="Username" v-model="login" autofocus)
					v-text-field(placeholder="Password" type="password" v-model="password" @keydown="onEnterLogin")
			v-card-actions
				v-spacer
				v-btn.login-button(@click="doLogin") Login
				v-spacer
</template>

<script>
	import {EVENTS} from '../plugins/api';
	import forge from 'node-forge';

	export default {
		name   : 'Login',
		data() {
			return {
				login   : '',
				password: ''
			};
		},
		methods: {
			onEnterLogin(e) {
				if (e.key === 'Enter') {
					this.doLogin();
				}
			},
			async doLogin() {

				const md = forge.md.sha256.create();
				md.update(this.password);

				const result = await this.api.emit(EVENTS.AUTH.DO, {
					login   : this.login,
					password: md.digest().toHex()
				});
			}
		}
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
