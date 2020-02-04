<template lang="pug">
	v-app
		v-app-bar(dense app flat)
			img.logo(src="@/assets/logo.svg")
			v-toolbar-title Svjs
		v-content: v-container(fluid fill-height): router-view
</template>

<script>
	export default {
		name: 'App',
		async beforeCreate() {
			if (!this.dataService.user.loggedIn && this.$route.path !== '/login') {
				return this.$router.push('/login');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.logo {
		width        : 24px;
		height       : 24px;
		margin-right : 16px;
	}
</style>
