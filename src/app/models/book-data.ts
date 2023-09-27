export interface IMetadata {
  count: number
  next: string
  previous: any
  results: IBookData[]
}

export interface IBookData {
  id: number
  title: string
  authors: IAuthor[]
  translators: ITranslator[]
  subjects: string[]
  bookshelves: string[]
  languages: string[]
  copyright: boolean
  media_type: string
  formats: IFormats
  download_count: number
}

export interface IAuthor {
  name: string
  birth_year: number
  death_year: number
}

export interface ITranslator {
  name: string
  birth_year?: number
  death_year?: number
}

export interface IFormats {
  "application/x-mobipocket-ebook": string
  "application/epub+zip": string
  "text/html": string
  "application/octet-stream"?: string
  "image/jpeg": string
  "text/plain"?: string
  "text/plain; charset=us-ascii"?: string
  "application/rdf+xml": string
  "text/html; charset=utf-8"?: string
  "text/plain; charset=utf-8"?: string
  "text/plain; charset=iso-8859-1"?: string
  "text/html; charset=iso-8859-1"?: string
  "text/html; charset=us-ascii"?: string
}
