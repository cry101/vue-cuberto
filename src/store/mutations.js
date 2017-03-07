
import * as types from './mutation-types'

export default {
	[types.ADD_FIRST_LETTER](state){
		console.log(state)
		state.homeDate.first.state = "show,split";
	},
	[types.ADD_LETTER_STATE](state,index){
		state.homeDate.arr[index].state = "show,split";
	},
	[types.DELETE_LETTER_STATE](state){
		state.homeDate.first.state = "";
		state.homeDate.arr.forEach(function(val){
			val.state = ""
		})
	}
}