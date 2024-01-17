import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { BiErrorAlt } from 'react-icons/bi'

import { style } from './FullPageError.style'
import { FullPageErrorProps } from './FullPageError.type'



export default function FullPageError(props: FullPageErrorProps) {
  const { heading, showTryAgain, ActionButton } = props

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <Box component='section' sx={style.root}>
      <style global jsx>{`
        main{
          display:flex;
          justify-content:center;
          align-items:center;
        }
      `}</style>

      <Stack component={Container} sx={style.container}>
        <BiErrorAlt className='error-icon' />
        <Typography variant='h2'>{heading || 'Sorry! Something went wrong'}</Typography>
        {(showTryAgain !== false && !ActionButton)
          ? <Button variant='contained' sx={style.reloadButton} onClick={handleReload}>Try again</Button>
          : ActionButton
        }
      </Stack>
    </Box>
  )
}
