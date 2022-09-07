import axios from 'axios'
import type { MarvelApiResponse } from './types/api'
import type { Comic } from './types/comics'
import type { GetComicsParams } from './types/comics/methods'

const { get } = axios.create({
  baseURL: import.meta.env.VITE_MARVEL_BASE_URL,
  params: {
    apikey: import.meta.env.VITE_MARVEL_API_KEY,
  },
})

export class MarvelApi {
  constructor(private apikey: string) {}

  comics = {
    findAll: async (params: GetComicsParams = {}): Promise<Comic[]> => {
      const response: MarvelApiResponse<Comic[]> = await get('/comics', {
        params,
      }).then((res) => res.data)

      return response.data.results
    },
    find: async (id: number): Promise<Comic> => {
      const response: MarvelApiResponse<Comic[]> = await get(
        `/comics/${id}`
      ).then((res) => res.data)

      return response.data.results[0]
    },
  }
}
