// <reference types="vite/client" />

/**
 * @description ts只能理解ts文件，不能理解.vue文件。因此需要给vue文件加上类型说明
 * */
declare module '*.vue' {
	import { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}
