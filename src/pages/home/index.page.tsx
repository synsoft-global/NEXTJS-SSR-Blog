import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Container, Grid, Pagination, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import ArticleCard from '@/components/articleCard/ArticleCard.component'
import { Page } from '@/types/Page.type'
import { articleService } from '@/services/article.service'



const Home: Page = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data } = props
  const router = useRouter()


  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    router.push({ query: { page } })
  }


  return (
    <Stack component='section' className='section-spacing-my'>
      <Stack component={Container} gap={3}>

        {/* Heading */}
        <Typography variant='h2'>Latest News </Typography>

        {/* Articles List */}
        <Grid container spacing={3}>
          {data.articles.map((item, index) =>
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ArticleCard data={item} />
            </Grid>
          )}
        </Grid>

        {/* Pagination */}
        <Stack alignItems='center'>
          <Pagination
            count={data.pageInfo.totalPages}
            page={data.pageInfo.currentPage}
            onChange={handlePageChange}
          />
        </Stack>

      </Stack>
    </Stack>
  )
}



Home.layoutProps = {
  title: false
}


export const getServerSideProps = (async ({ query }) => {
  const data = await articleService.getArticles({ page: Number(query.page || 1), pageSize: 10 })
  return {
    props: { data },
  }
}) satisfies GetServerSideProps


export default Home