import FullPageError from '@/components/fullPageError/FullPageError.component'
import { Page } from '@/types/Page.type'



const PageNotFound: Page = () => {
  return (
    <FullPageError
      heading='500 - Server-side error occurred'
    />
  )
}



PageNotFound.layoutProps = {
  title: '500 - Server-side error occurred'
}

export default PageNotFound