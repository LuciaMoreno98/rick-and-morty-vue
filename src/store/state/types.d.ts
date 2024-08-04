// el tipo de nuestro state, es decir los datos que debemos definir en nuestro index de la carpeta state
export type State = {
  characters: Character[]
  isLoading: boolean
  totalPages: number
  currentPage: number
  search: string
  character: CharacterResult | null
}

export type CharactersResult = {
  info: {
    count: number
    pages: number
    next: string
    prev: string | null
  }
  results: Character[]
}

export type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export type CharacterResult = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}
