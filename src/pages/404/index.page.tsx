import Link from 'next/link'
import { Button } from '@mui/material'

import FullPageError from '@/components/fullPageError/FullPageError.component'
import { Page } from '@/types/Page.type'



const PageNotFound: Page = () => {
  return (
    <FullPageError
      heading='404 - Page Not Found'
      ActionButton={
        <Button variant='contained' href='/' component={Link}>Go To Home</Button>
      }
    />
  )
}



PageNotFound.layoutProps = {
  title: '404 - Page Not Found'
}

export default PageNotFound