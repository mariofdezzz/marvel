export interface MarvelApiResponse<T> {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  data: ResponseData<T>
  etag: string
}

export interface ResponseData<T> {
  offset: number
  limit: number
  total: number
  count: number
  results: T
}
