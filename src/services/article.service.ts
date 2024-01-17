import { ArticleDTO } from '@/dtos/Article.dto'
import { api } from './api.config'



type GetArticlesResponse = {
  articles: ArticleDTO[]
  pageInfo: {
    currentPage: number
    pageSize: number
    totalArticles: number
    totalPages: number
  }
}

const getArticles = async (params?: { page?: number, pageSize?: number }) => {
  return await api.get<GetArticlesResponse>(`/getArticles`, { params })
    .then(respose => respose.data)
    .catch(error => Promise.reject(error))
}

const getArticle = async (params: { slug: string }) => {
  return await api.get<ArticleDTO>(`/getArticle`, { params })
    .then(respose => respose.data)
    .catch(error => Promise.reject(error))
}


export const articleService = {
  getArticles,
  getArticle
}