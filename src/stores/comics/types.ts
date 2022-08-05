import type { Comic } from '@/apis/marvel/types/comics'

export interface ComicState {
  isLoading: boolean
  comics: Comic[]
}
