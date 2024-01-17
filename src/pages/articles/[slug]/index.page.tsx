import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import { Breadcrumbs, Container, Stack, Typography, Link as MuiLink, Box } from '@mui/material'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { Page } from '@/types/Page.type'
import { articleService } from '@/services/article.service'
import { style } from './ArticleDetails.style'



const ArticleDetails: Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { article } = props


  return <>
    <Head>
      <title>{article.title}</title>
    </Head>


    <Stack component='article' className='section-spacing-mb'>
      <Stack component={Container}>

        {/* Thumbnail */}
        <Stack sx={style.thumbnailBox}>
          <Image
            fill
            src={article.thumbnail}
            alt='Article thumbnail'
            sizes='(max-width:1200px) 100vw, 1500px'
          />
        </Stack>

        {/* Breadcrumb */}
        <Breadcrumbs separator={<MdOutlineKeyboardArrowRight />} sx={style.breadcrumbs}>
          <MuiLink underline='hover' color='inherit' href='/' typography='body2' component={Link}>Home</MuiLink>
          <Typography variant='body2' color='text.primary' className='line-1'>{article.title}</Typography>
        </Breadcrumbs>

        {/* Title & Date */}
        <Typography variant='h1' mt={3}>{article.title}</Typography>
        <Typography variant='caption' component='div' mb={2}>{moment(article.published).format('LL')}</Typography>

        {/* Content */}
        <Box dangerouslySetInnerHTML={{ __html: article.content }} />
      </Stack>
    </Stack>
  </>
}



ArticleDetails.layoutProps = {
  title: false
}


export const getStaticPaths = (async () => {
  const { articles } = await articleService.getArticles({ pageSize: 100 })
  const paths = articles.map(item => ({ params: { slug: item.slug } }))

  return {
    paths,
    fallback: 'blocking',
  }
}) satisfies GetStaticPaths


export const getStaticProps = (async ({ params }) => {
  const article = await articleService.getArticle({ slug: params?.slug as string })
  return {
    props: { article },
    revalidate: 86400
  }
}) satisfies GetStaticProps


export default ArticleDetails