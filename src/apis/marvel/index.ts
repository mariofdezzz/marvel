import { toURLSearchParams } from '@/utils/toURLSearchParams'
import type { MarvelApiResponse } from './types/api'
import type { Comic } from './types/comics'
import { OrderBy, type GetComicsParams } from './types/comics/methods'

export class MarvelApi {
  constructor(private apikey: string) {}

  comics = {
    get: async (params: GetComicsParams = {}): Promise<Comic[]> => {
      const { orderBy = OrderBy.Asc.onSaleDate } = params

      const searchParams = new URLSearchParams(
        toURLSearchParams({
          ...params,
          apikey: this.apikey,
          orderBy,
        })
      )

      const response: MarvelApiResponse<Comic[]> = await fetch(
        'https://gateway.marvel.com:443/v1/public/comics?' +
          searchParams.toString()
      ).then((res) => res.json())

      return response.data.results
    },
  }
}
