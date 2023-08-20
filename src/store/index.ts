// InjectionKey用来标记注入值的类型，通常在provide中使用
import { createStore, Store } from 'vuex'
import type { InjectionKey } from 'vue';

import { StateModel } from './mockData';


export const key: InjectionKey<Store<StateModel>> = Symbol();
export const store = createStore<StateModel>({
	state() {
		return {
			count: 0
		}
	},
	mutations: {
		increment (state:StateModel ) {
			state.count++
		}
	}
})