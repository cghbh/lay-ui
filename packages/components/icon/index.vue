<template>
	<svg class="icon-self" aria-hidden="true">
		<use :xlink:href="iconName"></use>
	</svg>
</template>

<script>
// 导入iconfont的js文件
import '../../assets/js/iconfont.js'
export default {
	name: 'm-icon',
	props: {
		icon: {
			type: String,
			default: ''
		},
	},
	computed: {
		iconName () {
			return `#icon-${this.icon}`
		}
	}
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
