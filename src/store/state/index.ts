import type { State } from './types'

// state: datos de vuex, que modificamos y obtenemos en los componente, es de tipo State, que es un objeto con la info
const state: State = {
  characters: [],
  isLoading: false,
  totalPages: 1,
  currentPage: 1,
  search: '',
  character: null
}

export default state
