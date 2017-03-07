import * as types from './mutation-types'

export default {
  addFirstLetter({ commit }) {
    commit(types.ADD_FIRST_LETTER)
  },
  addLetter({ commit },index) {
    commit(types.ADD_LETTER_STATE,index)
  },
  deleteLetter({ commit }) {
    commit(types.DELETE_LETTER_STATE)
  }
};