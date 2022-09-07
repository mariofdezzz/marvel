import type { Comic } from '@/apis/marvel/types/comics'
import type { GetComicsParams } from '@/apis/marvel/types/comics/methods'

export interface ComicState {
  isLoading: boolean
  _comics: Comic[]
  orderBy: GetComicsParams['orderBy']
}
