export interface GetComicsParams {
  orderBy?: `${AscOrderBy}` | `${DescOrderBy}`
  limit?: number
  offset?: number
}

export enum AscOrderBy {
  focDate = 'focDate',
  onSaleDate = 'onsaleDate',
  title = 'title',
  issueNumber = 'issueNumber',
  modified = 'modified',
}

export enum DescOrderBy {
  focDate = '-focDate',
  onSaleDate = '-onsaleDate',
  title = '-title',
  issueNumber = '-issueNumber',
  modified = '-modified',
}

export const OrderBy = {
  Asc: AscOrderBy,
  Desc: DescOrderBy,
}
