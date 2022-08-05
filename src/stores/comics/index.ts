import { MarvelApi } from '@/apis'
import { OrderBy } from '@/apis/marvel/types/comics/methods'
import { defineStore } from 'pinia'
import type { ComicState } from './types'

const api = new MarvelApi(import.meta.env.VITE_MARVEL_API_KEY)

export const useComicsStore = defineStore({
  id: 'comics',
  state: (): ComicState => ({
    isLoading: false,
    comics: [],
  }),
  getters: {
    count: (state) => state.comics.length,
  },
  actions: {
    async fetchMore() {
      if (this.isLoading) return

      this.isLoading = true

      const comics = await api.comics.get({
        orderBy: OrderBy.Desc.focDate,
        offset: this.count,
      })

      this.comics.push(...comics)
      this.isLoading = false
    },
  },
})
