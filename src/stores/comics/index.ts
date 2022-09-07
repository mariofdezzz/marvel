import { MarvelApi } from '@/apis'
import type { Comic } from '@/apis/marvel/types/comics'
import { OrderBy } from '@/apis/marvel/types/comics/methods'
import { defineStore } from 'pinia'
import type { ComicState } from './types'

const api = new MarvelApi(import.meta.env.VITE_MARVEL_API_KEY)

export const useComicsStore = defineStore({
  id: 'comics',
  state: (): ComicState => ({
    isLoading: false,
    _comics: [],
    orderBy: OrderBy.Desc.focDate,
  }),
  getters: {
    count: (state) => state._comics.length,
    comics: (state): Comic[] | null[] =>
      state.isLoading
        ? state._comics.concat(new Array(20).fill(null))
        : state._comics,
  },
  actions: {
    async fetchMore() {
      if (this.isLoading) return

      this.isLoading = true

      const comics = await api.comics.get({
        orderBy: this.orderBy,
        offset: this.count,
      })

      this._comics.push(...comics)
      this.isLoading = false
    },
    async refresh() {
      this._comics = []
      this.isLoading = false

      await this.fetchMore()
    },
  },
})
