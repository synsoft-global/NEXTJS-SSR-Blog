import { NextApiRequest, NextApiResponse } from 'next'
import db from '@/data/db.json'



export default function getArticle(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query
  const { articles } = db
  const article = articles.find(article => article.slug === slug)

  if (article) res.status(200).json(article)
  else res.status(404).json({ message: 'Article not found' })
}
