import type { CharacterResult, CharactersResult, State } from '../state/types'

// metodos que modifican el state
export default {
  PUT_CHARACTERS(state: State, data: CharactersResult) {
    state.characters = data.results
    state.totalPages = data.info.pages
  },
  PUT_LOADING(state: State, isLoading: boolean) {
    state.isLoading = isLoading
  },
  PUT_CURRENT_PAGE(state: State, newPage: number) {
    state.currentPage = newPage
  },
  PUT_CHARACTER(state: State, data: CharacterResult) {
    state.character = data
  }
}
