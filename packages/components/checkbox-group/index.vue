<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'm-checkbox-group',
	provide () {
		return {
			checkedGroup: this
		}
	},
	props: {
		value: {
			type: Array
		}
	}
}
</script>

<style scoped lang="scss">
@import './style.scss'
</style>
