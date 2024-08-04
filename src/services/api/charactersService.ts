import type { CharacterResult, CharactersResult } from '@/store/state/types'
import http from '../http'

/**
 * get characters from the service.
 */
export const getCharacters = async (
  search: string,
  currentPage: number
): Promise<CharactersResult> => {
  const { data } = await http.get(`/character/?name=${search}&page=${currentPage}`)

  return data
}

/*
 * get character from the service.
 */
export const getCharacter = async (id: number): Promise<CharacterResult> => {
  const { data } = await http.get(`/character/${id}`)

  return data
}
