import { NextApiRequest, NextApiResponse } from 'next'
import db from '@/data/db.json'



export default function getArticles(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, pageSize = 10 } = req.query
  const { articles } = db
  const start = (Number(page) - 1) * Number(pageSize)
  const end = start + Number(pageSize)
  const paginatedArticles = articles.slice(start, end)

  res.status(200).json({
    articles: paginatedArticles,
    pageInfo: {
      currentPage: Number(page),
      pageSize: Number(pageSize),
      totalArticles: articles.length,
      totalPages: Math.ceil(articles.length / Number(pageSize)),
    },
  })
}
