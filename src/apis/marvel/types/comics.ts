export interface Comic {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: Date
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: TextObject[]
  resourceURI: string
  urls: URL[]
  series: SeriesSummary
  variants: ComicSummary[]
  collections: ComicSummary[]
  collectedIssues: ComicSummary[]
  dates: ComicDate[]
  prices: ComicPrice[]
  thumbnail: Image
  images: Image[]
  creators: Creators
  characters: Characters
  stories: Stories
  events: Events
}

export interface TextObject {
  type: string
  language: string
  text: string
}

export interface URL {
  type: string
  url: string
}

export interface SeriesSummary {
  resourceURI: string
  name: string
}

export interface ComicSummary {
  resourceURI: string
  name: string
}

export interface ComicDate {
  type: string
  date: Date
}

export interface ComicPrice {
  type: string
  price: number
}

export interface Image {
  path: string
  extension: string
}

export interface Creators {
  available: string
  returned: string
  collectionURI: string
  items: CreatorSummary[]
}

export interface CreatorSummary {
  resourceURI: string
  name: string
  role: string
}

export interface Characters {
  available: string
  returned: string
  collectionURI: string
  items: CharactersSummary[]
}

export interface CharactersSummary {
  resourceURI: string
  name: string
  role: string
}

export interface Stories {
  available: string
  returned: string
  collectionURI: string
  items: StorySummary[]
}

export interface StorySummary {
  resourceURI: string
  name: string
  type: string
}

export interface Events {
  available: string
  returned: string
  collectionURI: string
  items: EventSummary[]
}

export interface EventSummary {
  resourceURI: string
  name: string
}
