import Image from 'next/image'
import moment from 'moment'
import Link from 'next/link'
import { ButtonBase, Card, Stack, Typography } from '@mui/material'

import { ArticleCardProps } from './ArticleCard.type'
import { style } from './ArticleCard.style'



export default function ArticleCard(props: ArticleCardProps) {
  const { data } = props


  return (
    <Card component='article' sx={style.root}>
      <ButtonBase component={Link} href={`articles/${data.slug}`} sx={style.box}>

        {/* Thumbnail */}
        <Stack sx={style.thumbnailBox}>
          <Image
            fill
            loading='eager'
            src={data.thumbnail}
            alt='Article thumbnail'
            sizes='(max-width:600px) 100vw, (max-width:900px) 50vw, (max-width:1200px) 33vw, 250px'
          />
        </Stack>

        {/* Content */}
        <Stack sx={style.content}>
          <Stack>
            <Typography variant='h3' className='line-1'>{data.title}</Typography>
            <Typography variant='body2' className='line-1'>{data.description}</Typography>
          </Stack>
          <Typography variant='caption'>{moment(data.published).format('ll')}</Typography>
        </Stack>

      </ButtonBase>
    </Card>
  )
}
