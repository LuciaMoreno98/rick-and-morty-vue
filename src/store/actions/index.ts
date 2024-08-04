import { getCharacter, getCharacters } from '@/services/api/charactersService'

// metodos que normalmente llamamos desde el componente y se encargan de llamar a la mutacion
export default {
  getCharactersRickAndMorty({ commit, state }: any) {
    commit('PUT_LOADING', true)
    getCharacters(state.search, state.currentPage)
      .then((data) => {
        commit('PUT_CHARACTERS', data)
      })
      .finally(() => {
        commit('PUT_LOADING', false)
      })
  },
  putCurrentPage({ commit, dispatch }: any, currentPage: number) {
    commit('PUT_CURRENT_PAGE', currentPage)
    dispatch('getCharactersRickAndMorty')
  },
  getCharacterRickAndMorty({ commit, state }: any, id: number) {
    commit('PUT_LOADING', true)
    getCharacter(id)
      .then((data) => {
        commit('PUT_CHARACTER', data)
      })
      .finally(() => {
        commit('PUT_LOADING', false)
      })
  }
}

// destructuring
// store:{
//   commit: algo
// }
// store.commit o { commit }
