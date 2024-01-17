export type ArticleDTO = {
  id: string
  published: string
  updated: string
  category: string
  title: string
  slug: string
  content: string
  description: string
  author: {
    name: string
    image: string
  }
  thumbnail: string
}