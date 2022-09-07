import { toURLSearchParams } from '@/utils/toURLSearchParams'
import type { MarvelApiResponse } from './types/api'
import type { Comic } from './types/comics'
import { OrderBy, type GetComicsParams } from './types/comics/methods'

const baseUrl = import.meta.env.VITE_MARVEL_BASE_URL

export class MarvelApi {
  constructor(private apikey: string) {}

  comics = {
    findAll: async (params: GetComicsParams = {}): Promise<Comic[]> => {
      const { orderBy = OrderBy.Asc.onSaleDate } = params

      const searchParams = new URLSearchParams(
        toURLSearchParams({
          ...params,
          apikey: this.apikey,
          orderBy,
        })
      )

      const response: MarvelApiResponse<Comic[]> = await fetch(
        baseUrl + '/comics?' + searchParams.toString()
      ).then((res) => res.json())

      return response.data.results
    },
    find: async (id: number): Promise<Comic> => {
      const searchParams = new URLSearchParams(
        toURLSearchParams({
          apikey: this.apikey,
        })
      )

      const response: MarvelApiResponse<Comic[]> = await fetch(
        baseUrl + `/comics/${id}?` + searchParams.toString()
      ).then((res) => res.json())

      return response.data.results[0]
    },
  }
}
